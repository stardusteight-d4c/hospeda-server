import { Hotel } from "@modules/hotels";

import {
  MediaFile,
  Commodity,
  Category
} from "@shared/value-objects";

interface IHotelService {
  register(hotel: IHotel): Promise<Hotel>;
  uploadImages(images: IMediaFile[]): Promise<MediaFile[]>;
  removeImages(input: {
    hotelId: string;
    images: string[];
  }): Promise<void>;
  edit(hotel: IHotel): Promise<Hotel>;
  remove(id: string): Promise<void>;
  removeAll(): Promise<void>;
  get(id: string, include?: string[] | undefined): Promise<Hotel>;
  getAll(): Promise<Hotel[]>;
  getBySlug(slug: string): Promise<Hotel>;
  getHotelRoomsPriceRange(
    hotelId: string
  ): Promise<{ min: number; max: number }>;
  list(
    input: Partial<HotelListDomainDTO>
  ): Promise<PaginatedList<Hotel[]>>;
  getCommodities(): Promise<Commodity[]>;
  getCategories(): Promise<Category[]>;
  getCities(): Promise<string[]>;
  getStates(): Promise<string[]>;
  getEventHotels(eventId: string): Promise<Hotel[]>;
  checkIfHotelsExist(hotelIds: string[]): Promise<void>;
}
