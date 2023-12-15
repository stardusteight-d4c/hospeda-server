import { Commodity } from "@shared/value-objects/commodity/Commodity";
import { Hotel } from "@modules/hotels";
import { Category, MediaFile } from "@shared/value-objects";

interface IHotelRepository {
  save(hotel: Hotel): Promise<Hotel>;
  saveImages(images: MediaFile[]): Promise<MediaFile[]>;
  deleteImages(input: {
    hotelId: string;
    images: string[];
  }): Promise<void>;
  update(hotel: IHotel): Promise<Hotel>;
  delete(id: string): Promise<void>;
  deleteAll(): Promise<void>;
  find(
    id: string,
    include?: string[] | undefined
  ): Promise<Hotel | null>;
  findBySlug(slug: string): Promise<Hotel>;
  findAll(): Promise<Hotel[]>;
  findByParams(
    input: Partial<HotelListDomainDTO>
  ): Promise<PaginatedList<Hotel[]>>;
  findAllCommodities(): Promise<Commodity[]>;
  findAllCategories(): Promise<Category[]>;
  findCities(): Promise<string[]>;
  findStates(): Promise<string[]>;
  checkIfHotelsExist(hotelIds: string[]): Promise<void>;
}
