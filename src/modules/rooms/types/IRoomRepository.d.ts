import { Category } from "@shared/value-objects";
import { Room } from "@modules/rooms/domain";

interface IRoomRepository {
  save(room: Room): Promise<Room>;
  saveImages(images: MediaFile[]): Promise<MediaFile[]>;
  deleteImages(input: {
    roomId: string;
    images: string[];
  }): Promise<void>;
  update(room: IRoom): Promise<Room>;
  delete(id: string): Promise<void>;
  deleteAll(): Promise<void>;
  find(id: string): Promise<Room | null>;
  findAll(): Promise<Room[]>;
  findAllEventHotelRooms(params: {
    eventId: string;
    hotelId: string;
   }): Promise<FindEventHotelRoomsDTOResponse[]>;
  findWithPagination(input: {
    pageSize: number;
    currentPage: number;
  }): Promise<{
    totalPages: number;
    totalItems: number;
    items: Hotel[];
  }>;
  findAllByHotel(hotelId: string): Promise<Room[]>;
  findAllCommodities(): Promise<Commodity[]>;
  findAllCategories(): Promise<Category[]>;
  findHotelRoomsPriceRange(
    hotelId: string
  ): Promise<{ min: number; max: number }>;
  findByParams(
    input: Partial<RoomListDomainDTO>
  ): Promise<PaginatedList<Room[]>>;
}
