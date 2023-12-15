import { Event } from "@modules/events/domain";

interface IEventService {
  register(event: IEvent, ownerId: string): Promise<Event>;
  getPromoter(id: string): Promise<User>;
  get(id: string): Promise<Event>;
  getBySlug(slug: string): Promise<Event>;
  getCategories(): Promise<Category[]>;
  getCities(): Promise<string[]>;
  getStates(): Promise<string[]>;
  edit(event: IEvent): Promise<Event>;
  remove(id: string): Promise<void>;
  list(
    input: Partial<EventListDomainDTO>
  ): Promise<PaginatedList<Event[]>>;
  uploadBanner(banner: IMediaFile): Promise<MediaFile>;
  removeBanner(eventId: string): Promise<void>;
  removeAll(): Promise<void>;
}
