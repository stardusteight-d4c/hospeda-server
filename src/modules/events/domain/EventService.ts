import { event as eventBus } from "@config/event";

import type {
  IEventRepository,
  IEventService
} from "@modules/events/types";
import { Event, EventError } from "@modules/events/domain";
import { User, UserObserver } from "@modules/users/domain";
import { HotelObserver } from "@modules/hotels/domain";
import { RoomObserver } from "@modules/rooms/domain";

import {
  CheckIfIdsExistCommand,
  FindByIdCommand
} from "@shared/events";
import { Category, MediaFile } from "@shared/value-objects";
import { GetHotelRoomsPriceRangeCommand } from "@shared/events/GetHotelRoomsPriceRangeCommand";

export class EventService implements IEventService {
  public constructor(readonly repository: IEventRepository) {}

  private async getHotelRoomsPriceRange(
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

  private transformInputListParams(
    input: Partial<EventListDomainDTO>
  ): Partial<EventListDomainDTO> {
    const {
      pageSize,
      currentPage,
      city,
      state,
      name,
      status,
      companyId,
      privacy,
      highlight,
      slug
    } = input;
    const nameLowercase = name?.toLocaleLowerCase();
    const slugLowercase = slug?.toLocaleLowerCase();
    const statesLowercase = state?.map((state) =>
      state.toLocaleLowerCase()
    );
    const citiesLowercase = city?.map((city) =>
      city.toLocaleLowerCase()
    );
    const companyIdLowercase = companyId?.toLocaleLowerCase();
    const statusLowercase = status?.map((status) =>
      status.toLocaleLowerCase()
    );
    const privacyLowercase = privacy?.map((privacy) =>
      privacy.toLocaleLowerCase()
    );
    return {
      pageSize,
      currentPage,
      name: nameLowercase,
      state: statesLowercase,
      city: citiesLowercase,
      status: statusLowercase,
      companyId: companyIdLowercase,
      privacy: privacyLowercase,
      highlight,
      slug: slugLowercase
    };
  }

  public async edit(event: IEvent): Promise<Event> {
    EventError.propertyBannerNotAccepted.apply(event.banner);
    EventError.eventNotFound.apply(await this.get(event.id));
    return this.repository.update(event).then((event) => event);
  }

  public async remove(id: string): Promise<void> {
    const event = await this.repository.find(id);
    EventError.eventNotFound.apply(event);
    EventError.eventCannotBeDeleted.apply(event);
    return this.repository.delete(id);
  }

  public async register(
    event: IEvent,
    ownerId: string
  ): Promise<Event> {
    EventError.propertyExtrasNotAccepted.apply(event.extras);
    EventError.propertyBannerNotAccepted.apply(event.banner);
    const findByIdcommand = new FindByIdCommand(ownerId);
    const checkIfIdsExist = new CheckIfIdsExistCommand(
      event.hotels as string[]
    );
    const { uniqueResponse: owner } = await eventBus.emit({
      command: findByIdcommand,
      targetObserver: UserObserver.getInstance()
    });
    EventError.ownerNotFound.apply(owner);
    await eventBus.emit({
      command: checkIfIdsExist,
      targetObserver: HotelObserver.getInstance()
    });

    return await this.repository.save(
      new Event({ ...event, companyId: owner.get.companyId })
    );
  }

  public async get(id: string): Promise<Event> {
    return this.repository.find(id).then((event) => event);
  }

  public async list(
    input: Partial<EventListDomainDTO>
  ): Promise<PaginatedList<Event[]>> {
    return this.repository
      .findByParams(this.transformInputListParams(input))
      .then((output) => output);
  }

  public async getPromoter(id: string): Promise<User> {
    const findByIdcommand = new FindByIdCommand(id);
    const { uniqueResponse: promoter } = await eventBus.emit({
      command: findByIdcommand,
      targetObserver: UserObserver.getInstance()
    });
    return promoter;
  }

  public async uploadBanner(image: IMediaFile): Promise<MediaFile> {
    const event = await this.get(image.referenceId);
    EventError.eventNotFound.apply(event);
    return this.repository
      .saveBanner(new MediaFile(image).inspect())
      .then((mediaFiles) => mediaFiles);
  }

  public async removeBanner(id: string): Promise<void> {
    EventError.eventNotFound.apply(await this.repository.find(id));
    return await this.repository.deleteBanner(id);
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

  public async getBySlug(slug: string): Promise<Event> {
    const event = await this.repository.findBySlug(slug);
    const hotelsWithPricesPromises = event.get.hotels?.map(
      async (hotel: any) => {
        const priceRange = await this.getHotelRoomsPriceRange(
          hotel.id
        );
        return {
          ...hotel,
          priceRange
        };
      }
    );
    const hotelsWithPrices = await Promise.all(
      hotelsWithPricesPromises
    );
    const eventWithHotelsPrices = {
      ...event.get,
      hotels: hotelsWithPrices
    };
    return new Event(eventWithHotelsPrices as unknown as IEvent);
  }

  public async removeAll(): Promise<void> {
    return await this.repository.deleteAll();
  }
}
