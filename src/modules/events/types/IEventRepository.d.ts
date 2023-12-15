import { User } from "@modules/users/domain";
import { Event } from "@modules/events/domain";
import { Room } from "@modules/rooms/domain";

interface IEventRepository {
  save(event: Event): Promise<Event>;
  find(id: string): Promise<Event | null>;
  findBySlug(slug: string): Promise<Event>;
  findAllCategories(): Promise<Category[]>;
  findCities(): Promise<string[]>;
  findStates(): Promise<string[]>;
  findByParams(
    input: Partial<EventListDomainDTO>
  ): Promise<PaginatedList<Event[]>>;
  update(event: IEvent): Promise<Event>;
  delete(id: string): Promise<void>;
  saveBanner(banner: MediaFile): Promise<MediaFile>;
  deleteBanner(id: string): Promise<void>;
  deleteAll(): Promise<void>;
}
