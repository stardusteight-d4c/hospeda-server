import { event } from "@config/event";

import type {
  IRoomService,
  IRoomRepository
} from "@modules/rooms/types";
import { HotelObserver } from "@modules/hotels/domain";
import { Room, RoomError } from "@modules/rooms/domain";

import { FindByIdCommand } from "@shared/events";
import {
  MediaFile,
  Commodity,
  Category
} from "@shared/value-objects";

export class RoomService implements IRoomService {
  public constructor(readonly repository: IRoomRepository) {}

  private transformInputListParams(
    input: Partial<RoomListDomainDTO>
  ): Partial<RoomListDomainDTO> {
    const { pageSize, currentPage, status, name, hotelId } = input;
    const nameLowercase = name?.toLocaleLowerCase();
    const statusLowercase = status?.map((status) =>
      status?.toLocaleLowerCase()
    );
    return {
      pageSize,
      currentPage,
      name: nameLowercase,
      status: statusLowercase,
      hotelId
    };
  }

  public async register(room: IRoom): Promise<Room> {
    RoomError.propertyIdNotAccepted.apply(room?.id);
    RoomError.propertyImagesNotAccepted.apply(room?.images);
    const command = new FindByIdCommand(room.hotelId);
    await event.emit({
      command,
      targetObserver: HotelObserver.getInstance()
    });
    return this.repository
      .save(new Room(room).inspect())
      .then((room) => room);
  }

  public async uploadImages(
    images: IMediaFile[]
  ): Promise<MediaFile[]> {
    return this.repository
      .saveImages(
        images.map((image) => new MediaFile(image).inspect())
      )
      .then((mediaFiles) => mediaFiles);
  }

  public async removeImages(input: {
    roomId: string;
    images: string[];
  }): Promise<void> {
    RoomError.roomNotfound.apply(
      await this.repository.find(input.roomId)
    );
    return this.repository.deleteImages(input);
  }

  public async edit(room: IRoom): Promise<Room> {
    RoomError.roomNotfound.apply(await this.get(room.id));
    RoomError.propertyImagesNotAccepted.apply(room.images);
    RoomError.hotelIdIsNotAccepted.apply(room.hotelId);
    return this.repository.update(room).then((room) => room);
  }

  public async remove(id: string): Promise<void> {
    await this.get(id);
    return this.repository
      .delete(id)
      .catch((err) => console.error(err));
  }

  public async removeAll(): Promise<void> {
    return this.repository
      .deleteAll()
      .catch((err) => console.error(err));
  }

  public async get(id: string): Promise<Room> {
    const room = await this.repository.find(id);
    RoomError.roomNotfound.apply(room);
    return room;
  }

  public async getAll(): Promise<Room[]> {
    return this.repository.findAll().then((rooms) => rooms);
  }

  public async getByPagination(input: {
    pageSize: number;
    currentPage: number;
  }): Promise<{
    totalPages: number;
    totalItems: number;
    currentPage: number;
    itemsOnPage: number;
    items: Room[];
  }> {
    return this.repository
      .findWithPagination(input)
      .then((output) => {
        return {
          currentPage: input.currentPage,
          itemsOnPage: output.items.length,
          ...output
        };
      });
  }

  public async getCommodities(): Promise<Commodity[]> {
    return await this.repository.findAllCommodities();
  }

  public async getCategories(): Promise<Category[]> {
    return await this.repository.findAllCategories();
  }

  public async getAllByHotel(hotelId: string): Promise<Room[]> {
    const command = new FindByIdCommand(hotelId);
    await event.emit({
      command,
      targetObserver: HotelObserver.getInstance()
    });
    const rooms = await this.repository
      .findAllByHotel(hotelId)
      .then((rooms) => rooms);
    return rooms;
  }

  public async getAllEventHotelRooms(params: {
    eventId: string;
    hotelId: string;
  }): Promise<FindEventHotelRoomsDTOResponse[]> {
    return await this.repository.findAllEventHotelRooms(params);
  }

  public async getHotelRoomsPriceRange(
    hotelId: string
  ): Promise<{ min: number; max: number }> {
    return await this.repository.findHotelRoomsPriceRange(hotelId);
  }

  public async list(
    input: Partial<RoomListDomainDTO>
  ): Promise<PaginatedList<Room[]>> {
    return this.repository
      .findByParams(this.transformInputListParams(input))
      .then((output) => output);
  }
}
