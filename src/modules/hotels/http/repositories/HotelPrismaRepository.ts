import type { Prisma } from "@prisma/client";

import { db } from "@/connect";

import type { IHotelRepository } from "@modules/hotels/types";
import { Queries as q } from "@/modules/hotels/http/factories";
import { Hotel } from "@modules/hotels/domain";
import { prismaToHotel } from "@modules/hotels/http/transformers";

import {
  MediaFile,
  Commodity,
  Category
} from "@shared/value-objects";

export class HotelPrismaRepository implements IHotelRepository {
  private static instance: HotelPrismaRepository;

  private constructor() {}

  public static getInstance(): HotelPrismaRepository {
    if (!HotelPrismaRepository.instance) {
      HotelPrismaRepository.instance = new HotelPrismaRepository();
    }
    return HotelPrismaRepository.instance;
  }

  private async findHotel(id: string) {
    return await db.hotel.findUnique(q.whereUniqueInput(id));
  }

  private async findHotelImages(id: string) {
    return await db.hotel.findUnique(
      q.whereUniqueInputReturningImages(id)
    );
  }

  private async concatOldImagesWithNew(data: {
    hotelId: string;
    newImages: MediaFile[];
  }) {
    return this.findHotelImages(data.hotelId).then((hotel) => {
      const existingImages: any = hotel.images || [];
      const concatenatedImages = existingImages.concat(
        data.newImages.map((image) => image.get)
      );
      return concatenatedImages;
    });
  }

  private async getTotalItemsThatMatchWithListQuery(
    input: Partial<HotelListDomainDTO>
  ) {
    return await db.hotel.count(
      q.countTotalItemsInFindManyByParams(input)
    );
  }

  private async deleteExistingImagesById(
    existingImages: Prisma.JsonValue[],
    imagesToBeDeletedID: string[]
  ) {
    const updatedImages = existingImages.filter(
      (image: any) => !imagesToBeDeletedID.includes(image.id)
    );
    return updatedImages;
  }

  private async createInternalInformation(hotel: Hotel) {
    return await db.hotelInternalInformation.create(
      q.createInternalInformation(hotel)
    );
  }

  private async updateHotelInternalInformation(hotel: Hotel) {
    return await db.hotelInternalInformation.update(
      q.updateInternalInformation(hotel)
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

  public async save(hotel: Hotel): Promise<Hotel> {
    const commodities = (await this.findCommodities(
      hotel.get.commodities as string[]
    )) as ICommodity[];
    const categories = (await this.findCategories(
      hotel.get.categories as string[]
    )) as ICategory[];
    return db.hotel
      .create(q.create({ ...hotel.get, commodities, categories }))
      .then(async (savedHotel) => {
        return prismaToHotel({
          hotel: savedHotel,
          hotelInternalInformation:
            await this.createInternalInformation(hotel),
          address: savedHotel.address
        });
      });
  }

  public async saveImages(
    newImages: MediaFile[]
  ): Promise<MediaFile[]> {
    const hotelId = newImages[0].get.referenceId;
    return (async () => {
      return await this.concatOldImagesWithNew({
        hotelId,
        newImages
      });
    })().then(async (concatenatedImages) => {
      return db.hotel
        .update(q.updateImagesInput(hotelId, concatenatedImages))
        .then((updatedHotel) =>
          updatedHotel.images.map(
            (image) => new MediaFile(image as any)
          )
        );
    });
  }

  public async deleteImages(input: {
    hotelId: string;
    images: string[];
  }): Promise<void> {
    await this.findHotel(input.hotelId).then(async (hotel) => {
      if (hotel) {
        await this.deleteExistingImagesById(
          hotel.images,
          input.images
        ).then(async (updatedImages) => {
          await db.hotel.update(
            q.updateImagesInput(input.hotelId, updatedImages)
          );
        });
      }
    });
  }

  public async update(hotel: IHotel): Promise<Hotel> {
    const commodities = (await this.findCommodities(
      hotel.commodities as string[]
    )) as ICommodity[];
    const categories = (await this.findCategories(
      hotel.categories as string[]
    )) as ICategory[];
    return db.hotel
      .update(q.updateInput({ ...hotel, commodities, categories }))
      .then(async (updatedHotel) => {
        return prismaToHotel({
          hotel: updatedHotel,
          hotelInternalInformation:
            await this.updateHotelInternalInformation(
              new Hotel(hotel)
            ),
          address: updatedHotel.address
        });
      });
  }

  public async delete(id: string): Promise<void> {
    await db.hotel.delete(q.whereUniqueInput(id));
  }

  public async deleteAll(): Promise<void> {
    await db.hotel.deleteMany();
  }

  public async findBySlug(slug: string): Promise<Hotel> {
    return db.hotel
      .findFirst({
        where: { slug },
        include: {
          rooms: true,
          address: true
        }
      })
      .then(async (hotel) => {
        return hotel
          ? prismaToHotel({
              hotel,
              address: hotel.address
            })
          : null;
      });
  }

  public async find(
    id: string,
    include?: string[] | undefined
  ): Promise<Hotel | null> {
    const includeRooms = include && include.includes("rooms");
    return db.hotel
      .findUnique(q.findUnique(id, includeRooms))
      .then(async (hotel) => {
        return hotel
          ? prismaToHotel({
              hotel,
              address: hotel.address
            })
          : null;
      });
  }

  public async findAll(): Promise<Hotel[]> {
    return db.hotel.findMany(q.include()).then((hotels) =>
      hotels.map((hotel) =>
        prismaToHotel({
          hotel,
          address: hotel.address
        })
      )
    );
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
          reference: "hotels"
        }
      })
      .then((categories) =>
        categories.map((category) => new Category(category as any))
      );
  }

  public async findCities(): Promise<string[]> {
    const cities = await db.address.findMany({
      where: {
        hotel: {
          some: {
            id: {
              not: {
                equals: undefined
              }
            }
          }
        }
      },
      distinct: ["city"],
      select: {
        city: true,
        hotel: true
      }
    });
    return cities.map((address) => address.city);
  }

  public async findStates(): Promise<string[]> {
    const states = await db.address.findMany({
      where: {
        hotel: {
          some: {
            id: {
              not: {
                equals: undefined
              }
            }
          }
        }
      },
      distinct: ["state"],
      select: {
        state: true
      }
    });
    return states.map((address) => address.state);
  }

  public async findByParams(
    input: Partial<HotelListDomainDTO>
  ): Promise<PaginatedList<Hotel[]>> {
    return db.hotel
      .findMany(q.findManyByParams(input))
      .then((filteredHotels) =>
        this.getTotalItemsThatMatchWithListQuery(input).then(
          async (totalItems) => ({
            currentPage: input.currentPage,
            itemsOnPage: filteredHotels.length,
            totalPages: Math.ceil(totalItems / input.pageSize),
            totalItems,
            items: await Promise.all(
              filteredHotels.map(async (hotel) => {
                return prismaToHotel({
                  hotel,
                  address: hotel.address
                });
              })
            )
          })
        )
      );
  }

  public async checkIfHotelsExist(hotelIds) {
    const existingHotels = await db.hotel.findMany({
      where: {
        id: {
          in: hotelIds
        }
      }
    });

    const missingHotelIds = hotelIds.filter(
      (hotelId) =>
        !existingHotels.some((hotel) => hotel.id === hotelId)
    );

    if (missingHotelIds.length > 0) {
      throw new Error(
        `Hotels with the following IDs were not found: ${missingHotelIds.join(
          ", "
        )}`
      );
    }
  }
}
