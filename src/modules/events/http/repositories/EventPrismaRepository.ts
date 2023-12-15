import type { IEventRepository } from "@modules/events/types";
import { Queries as q } from "@/modules/events/http/factories";
import { Event, EventError } from "@modules/events/domain";
import { RoomPrismaRepository } from "@modules/rooms/http";

import { Category, MediaFile } from "@shared/value-objects";
import { db } from "@/connect";

export class EventPrismaRepository implements IEventRepository {
  private static instance: EventPrismaRepository;
  roomsRepository = RoomPrismaRepository.getInstance();

  private constructor() {}

  public static getInstance(): EventPrismaRepository {
    if (!EventPrismaRepository.instance) {
      EventPrismaRepository.instance = new EventPrismaRepository();
    }
    return EventPrismaRepository.instance;
  }

  private async getTotalItemsThatMatchWithListQuery(
    input: Partial<EventListDomainDTO>
  ) {
    return await db.event.count(
      q.countTotalItemsInFindManyByParams(input)
    );
  }

  private async findHotels(hotelsRef: string[]) {
    return await db.hotel.findMany(q.findHotels(hotelsRef));
  }

  public async findAllCategories(): Promise<Category[]> {
    return db.category
      .findMany({
        where: {
          reference: "events"
        }
      })
      .then((categories) =>
        categories.map((category) => new Category(category as any))
      );
  }

  public async save(event: Event): Promise<Event> {
    const hotels = await this.findHotels(
      event.get.hotels as string[]
    );
    const createdSolicitation = await db.event.create(
      q.create({
        ...event.get
      } as any)
    );
    return new Event({
      ...(createdSolicitation as any),
      hotels
    });
  }

  public async find(id: string): Promise<Event> {
    const event = await db.event.findFirst({
      where: {
        id: id
      }
    });
    if (!event) {
      return null;
    }
    return new Event(event as any);
  }

  public async findBySlug(slug: string): Promise<Event> {
    const event = await db.event.findFirst({
      where: {
        slug: slug
      },
      include: {
        address: true,
        eventHotels: true
      }
    });

    EventError.eventNotFound.apply(event as any);

    const hotels = await db.hotel.findMany({
      where: {
        id: {
          in: event.hotels
        }
      },
      include: {
        address: true
      }
    });

    if (!event) {
      return null;
    }
    return new Event({ ...event, hotels: hotels } as any);
  }

  public async deleteAll(): Promise<void> {
    await db.event.deleteMany();
  }

  public async update(event: IEvent): Promise<Event> {
    const { address, ...filteredEvent } = event;
    return db.event
      .update({
        where: {
          id: event.id
        },
        data: {
          ...(filteredEvent as any),
          address: address && {
            update: {
              ...address
            }
          }
        },
        include: {
          address: true
        }
      })
      .then(async (updatedEvent) => new Event(updatedEvent as any));
  }

  public async delete(id: string): Promise<void> {
    await db.event.delete({
      where: {
        id,
        AND: {
          NOT: {
            status: {
              in: ["approved", "closed"]
            }
          }
        }
      }
    });
  }

  public async saveBanner(banner: MediaFile): Promise<MediaFile> {
    await db.event.update({
      where: {
        id: banner.get.referenceId
      },
      data: {
        banner: banner.get as any
      }
    });

    return banner;
  }

  public async deleteBanner(eventId: string): Promise<void> {
    await db.event.update({
      where: {
        id: eventId
      },
      data: {
        banner: null
      }
    });
  }

  public async findByParams(
    input: Partial<EventListDomainDTO>
  ): Promise<PaginatedList<Event[]>> {
    return db.event
      .findMany(q.findManyByParams(input))
      .then((filteredEvents) =>
        this.getTotalItemsThatMatchWithListQuery(input).then(
          async (totalItems) => ({
            currentPage: input.currentPage,
            itemsOnPage: filteredEvents.length,
            totalPages: Math.ceil(totalItems / input.pageSize),
            totalItems,
            items: await Promise.all(
              filteredEvents.map(async (event) => {
                return new Event(event as any);
              })
            )
          })
        )
      );
  }

  public async findCities(): Promise<string[]> {
    const cities = await db.address.findMany({
      where: {
        event: {
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
        city: true
      }
    });
    return cities.map((address) => address.city);
  }

  public async findStates(): Promise<string[]> {
    const states = await db.address.findMany({
      where: {
        event: {
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
}
