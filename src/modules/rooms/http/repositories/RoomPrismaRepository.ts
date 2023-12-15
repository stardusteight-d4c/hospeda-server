import { Prisma } from "@prisma/client";

import { db } from "@/connect";

import type { IRoomRepository } from "@/modules/rooms/types";
import { Room } from "@modules/rooms/domain";
import { prismaToRoom } from "@modules/rooms/http/transformers";
import { Queries as q } from "@/modules/rooms/http/factories";

import {
  MediaFile,
  Commodity,
  Category
} from "@shared/value-objects";

export class RoomPrismaRepository implements IRoomRepository {
  private static instance: RoomPrismaRepository;
  private constructor() {}

  public static getInstance(): RoomPrismaRepository {
    if (!RoomPrismaRepository.instance) {
      RoomPrismaRepository.instance = new RoomPrismaRepository();
    }
    return RoomPrismaRepository.instance;
  }

  private async findRoom(id: string) {
    return await db.room.findUnique(q.whereUniqueInput(id));
  }

  private async findRoomImages(id: string) {
    return await db.room.findUnique(
      q.whereUniqueInputReturningImages(id)
    );
  }

  private async getTotalItemsThatMatchWithListQuery(
    input: Partial<RoomListDomainDTO>
  ) {
    return await db.room.count(
      q.countTotalItemsInFindManyByParams(input)
    );
  }

  private async concatOldImagesWithNew(data: {
    roomId: string;
    newImages: MediaFile[];
  }) {
    return this.findRoomImages(data.roomId).then((room) => {
      const existingImages = room.images || [];
      const concatenatedImages = existingImages.concat(
        data.newImages.map((image: any) => image.get)
      );
      return concatenatedImages;
    });
  }

  private async deleteExistingImagesById(
    existingImages: Prisma.JsonValue[],
    imagesToBeDeletedID: string[]
  ) {
    return existingImages.filter(
      (image: any) => !imagesToBeDeletedID.includes(image.id)
    );
  }

  private async findCommodities(commoditiesRef: string[]) {
    if (!commoditiesRef) return undefined;
    return db.commodity.findMany(
      q.whereCommodityInput(commoditiesRef)
    );
  }

  private async findCategories(categoriesRef: string[]) {
    if (!categoriesRef) return undefined;
    return db.category.findMany(q.whereCategoryInput(categoriesRef));
  }

  public async save(room: Room): Promise<Room> {
    const commodities = (await this.findCommodities(
      room.get.commodities as string[]
    )) as ICommodity[];
    const categories = (await this.findCategories(
      room.get.categories as string[]
    )) as ICategory[];

    return db.room
      .create(q.createInput({ ...room.get, commodities, categories }))
      .then((room) => prismaToRoom(room));
  }

  public async saveImages(
    newImages: MediaFile[]
  ): Promise<MediaFile[]> {
    const roomId = newImages[0].get.referenceId;
    return (async () => {
      return await this.concatOldImagesWithNew({
        roomId,
        newImages
      });
    })().then(async (concatenatedImages) => {
      return db.room
        .update(q.updateImagesInput(roomId, concatenatedImages))
        .then((updatedHotel) =>
          updatedHotel.images.map(
            (image: any) => new MediaFile(image)
          )
        );
    });
  }

  public async deleteImages(input: {
    roomId: string;
    images: string[];
  }): Promise<void> {
    await this.findRoom(input.roomId).then(async (room) => {
      if (room) {
        await this.deleteExistingImagesById(
          room.images,
          input.images
        ).then(async (updatedImages) => {
          await db.room.update(
            q.updateImagesInput(input.roomId, updatedImages)
          );
        });
      }
    });
  }

  public async update(room: IRoom): Promise<Room> {
    const commodities = (await this.findCommodities(
      room.commodities as string[]
    )) as ICommodity[];
    const categories = (await this.findCategories(
      room.categories as string[]
    )) as ICategory[];
    return db.room
      .update(q.updateInput({ ...room, commodities, categories }))
      .then((room) => prismaToRoom(room));
  }

  public async delete(id: string): Promise<void> {
    await db.room.delete(q.whereUniqueInput(id));
  }

  public async deleteAll(): Promise<void> {
    await db.room.deleteMany({});
  }

  public async find(id: string): Promise<Room> {
    return db.room
      .findUnique(q.whereUniqueInput(id))
      .then((room) => (room ? prismaToRoom(room) : null))
      .catch(() => null);
  }

  public async findAll(): Promise<Room[]> {
    return db.room
      .findMany({})
      .then((rooms) => rooms.map((room) => prismaToRoom(room)));
  }

  public async findAllEventHotelRooms(params: {
    eventId: string;
    hotelId: string;
  }): Promise<FindEventHotelRoomsDTOResponse[]> {
    const eventHotel = await db.eventHotel.findUnique({
      where: {
        eventId_hotelId: params
      }
    });

    if (!eventHotel) return [];

    const eventHotelRooms = await db.eventHotelRoom.findMany({
      where: {
        eventHotelId: eventHotel.id
      }
    });
    const rooms = await db.room.findMany({
      where: {
        hotelId: params.hotelId
      }
    });

    if (!eventHotelRooms && !rooms) return [];

    const eventHotelRoomsRoomsIds = eventHotelRooms.map(
      (eventHotelRoom) => eventHotelRoom.roomId
    );

    const filteredRooms = rooms.filter((room) =>
      eventHotelRoomsRoomsIds.includes(room.id)
    );

    const parsedRooms = filteredRooms.flatMap((filteredRoom) => {
      const eventHotelRoom = eventHotelRooms.find(
        (eventHotelRoom) => eventHotelRoom.roomId === filteredRoom.id
      );
      return {
        ...filteredRoom,
        eventHotelRoom
      };
    });

    return parsedRooms as any
  }

  public async findWithPagination(input: {
    pageSize: number;
    currentPage: number;
  }): Promise<{
    items: Room[];
    totalPages: number;
    totalItems: number;
  }> {
    return db.room
      .findMany(q.paginationInput(input))
      .then(async (rooms) => {
        const totalCount = await db.room.count();
        const totalPages = Math.ceil(totalCount / input.pageSize);
        return {
          items: rooms.map((room) => prismaToRoom(room)),
          totalPages,
          totalItems: totalCount
        };
      });
  }

  public async findAllCommodities(): Promise<Commodity[]> {
    return db.commodity
      .findMany()
      .then((commodities) =>
        commodities.map((commodity) => new Commodity(commodity))
      );
  }

  public async findAllCategories(): Promise<Category[]> {
    return db.category
      .findMany({
        where: {
          reference: "rooms"
        }
      })
      .then((categories) =>
        categories.map((category) => new Category(category as any))
      );
  }

  public async findAllByHotel(hotelId: string): Promise<Room[]> {
    return db.room
      .findMany(q.whereInput(hotelId))
      .then((rooms) => rooms.map((room) => prismaToRoom(room)));
  }

  public async findHotelRoomsPriceRange(
    hotelId: string
  ): Promise<{ min: number; max: number }> {
    const result = await db.room.findFirst({
      where: {
        hotelId,
        status: "available"
      },
      select: {
        minRoomNightPrice: true
      },
      orderBy: { minRoomNightPrice: "asc" }
    });

    if (result) {
      const minPrice = result.minRoomNightPrice;
      const maxPrice =
        (
          await db.room.findFirst({
            where: { hotelId, status: "available" },
            select: {
              minRoomNightPrice: true
            },
            orderBy: { minRoomNightPrice: "desc" }
          })
        )?.minRoomNightPrice || minPrice;

      return { min: minPrice, max: maxPrice };
    } else {
      return { min: 0, max: 0 };
    }
  }

  public async findByParams(
    input: Partial<RoomListDomainDTO>
  ): Promise<PaginatedList<Room[]>> {
    return db.room
      .findMany(q.findManyByParams(input))
      .then((filteredRooms) =>
        this.getTotalItemsThatMatchWithListQuery(input).then(
          async (totalItems) => ({
            currentPage: input.currentPage,
            itemsOnPage: filteredRooms.length,
            totalPages: Math.ceil(totalItems / input.pageSize),
            totalItems,
            items: filteredRooms.map(
              (room) => new Room(room as unknown as IRoom)
            )
          })
        )
      );
  }
}
