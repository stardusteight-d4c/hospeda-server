import { event as eventBus } from "@config/event";

import type {
  IHotelRepository,
  IHotelService
} from "@modules/hotels/types";
import { Hotel, HotelError } from "@modules/hotels/domain";
import { Event, EventObserver } from "@modules/events/domain";
import { RoomObserver } from "@modules/rooms/domain";

import {
  MediaFile,
  Commodity,
  Category
} from "@shared/value-objects";
import { FindByIdCommand } from "@shared/events";
import { GetHotelRoomsPriceRangeCommand } from "@/shared/events/GetHotelRoomsPriceRangeCommand";

export class HotelService implements IHotelService {
  public constructor(readonly repository: IHotelRepository) {}

  private transformInputListParams(
    input: Partial<HotelListDomainDTO>
  ): Partial<HotelListDomainDTO> {
    const { pageSize, currentPage, city, state, name, status } =
      input;
    const nameLowercase = name?.toLocaleLowerCase();
    const statesLowercase = state?.map((state) =>
      state?.toLocaleLowerCase()
    );
    const citiesLowercase = city?.map((city) =>
      city?.toLocaleLowerCase()
    );
    const statusLowercase = status?.map((status) =>
      status?.toLocaleLowerCase()
    );
    return {
      pageSize,
      currentPage,
      name: nameLowercase,
      state: statesLowercase,
      city: citiesLowercase,
      status: statusLowercase
    };
  }

  public async register(hotel: IHotel): Promise<Hotel> {
    HotelError.propertyIdNotAccepted.apply(hotel.id);
    HotelError.propertyImagesNotAccepted.apply(hotel.images);
    HotelError.commoditiesMustBeAnArrayOfIds.apply(hotel.commodities);
    return this.repository
      .save(new Hotel(hotel).inspect())
      .then((hotel) => hotel);
  }

  public async uploadImages(
    images: IMediaFile[]
  ): Promise<MediaFile[]> {
    await this.get(images[0].referenceId);
    return this.repository
      .saveImages(
        images.map((image) => new MediaFile(image).inspect())
      )
      .then((mediaFiles) => mediaFiles);
  }

  public async removeImages(input: {
    hotelId: string;
    images: string[];
  }): Promise<void> {
    HotelError.hotelIdDoesNotExist.apply(
      await this.repository.find(input.hotelId)
    );
    return this.repository.deleteImages(input);
  }

  public async edit(updatedHotel: IHotel): Promise<Hotel> {
    HotelError.propertyImagesNotAccepted.apply(updatedHotel.images);
    HotelError.commoditiesMustBeAnArrayOfIds.apply(
      updatedHotel.commodities
    );
    await this.get(updatedHotel.id);
    return this.repository
      .update(updatedHotel)
      .then((updatedHotel) => updatedHotel);
  }

  public async remove(id: string): Promise<void> {
    HotelError.hotelIdDoesNotExist.apply(
      await this.repository.find(id)
    );
    return this.repository.delete(id);
  }

  public async removeAll(): Promise<void> {
    return this.repository.deleteAll();
  }

  public async get(
    id: string,
    include?: string[] | undefined
  ): Promise<Hotel> {
    return this.repository.find(id, include).then((hotel) => {
      HotelError.hotelIdDoesNotExist.apply(hotel);
      return hotel;
    });
  }

  public async getAll(): Promise<Hotel[]> {
    return await this.repository.findAll();
  }

  public async getCommodities(): Promise<Commodity[]> {
    return await this.repository.findAllCommodities();
  }

  public async getCategories(): Promise<Category[]> {
    return await this.repository.findAllCategories();
  }

  public async getCities(): Promise<string[]> {
    return await this.repository.findCities();
  }

  public async getStates(): Promise<string[]> {
    return await this.repository.findStates();
  }

  public async list(
    input: Partial<HotelListDomainDTO>
  ): Promise<PaginatedList<Hotel[]>> {
    return this.repository
      .findByParams(this.transformInputListParams(input))
      .then((output) => output);
  }

  public async checkIfHotelsExist(hotelIds: string[]): Promise<void> {
    await this.repository.checkIfHotelsExist(hotelIds);
  }

  public async getEventHotels(eventId: string): Promise<Hotel[]> {
    const findEvent = new FindByIdCommand(eventId);
    const {
      uniqueResponse: event
    }: {
      uniqueResponse: Event;
    } = await eventBus.emit({
      command: findEvent,
      targetObserver: EventObserver.getInstance()
    });
    HotelError.eventDoesNotExist.apply(event);
    const promises = event.get.hotels.map(
      async (hotelId) => await this.get(hotelId, ["rooms"])
    );
    return await Promise.all(promises);
  }

  public async getHotelRoomsPriceRange(
    hotelId: string
  ): Promise<{ min: number; max: number }> {
    const priceRangeCommand = new GetHotelRoomsPriceRangeCommand(
      hotelId
    );
    const {
      uniqueResponse: hotelRoomsPriceRange
    }: {
      uniqueResponse: { min: number; max: number };
    } = await eventBus.emit({
      command: priceRangeCommand,
      targetObserver: RoomObserver.getInstance()
    });
    return hotelRoomsPriceRange;
  }

  public async getBySlug(slug: string): Promise<Hotel> {
    return await this.repository.findBySlug(slug);
  }
}
