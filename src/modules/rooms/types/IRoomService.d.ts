import { Category } from "@/shared/value-objects";
import { Room } from "@modules/rooms/domain";

interface IRoomService {
  register(room: IRoom): Promise<Room>;
  uploadImages(images: IMediaFile[]): Promise<MediaFile[]>;
  removeImages(input: {
    roomId: string;
    images: string[];
  }): Promise<void>;
  edit(room: IRoom): Promise<Room>;
  remove(id: string): Promise<void>;
  removeAll(): Promise<void>;
  get(id: string): Promise<Room>;
  getAll(): Promise<Room[]>;
  getAllEventHotelRooms(params: {
    eventId: string;
    hotelId: string;
   }): Promise<FindEventHotelRoomsDTOResponse[]>;
  getByPagination(input: {
    pageSize: number;
    currentPage: number;
  }): Promise<{
    totalPages: number;
    totalItems: number;
    itemsOnPage: number;
    currentPage: number;
    items: Hotel[];
  }>;
  getAllByHotel(hotelId: string): Promise<Room[]>;
  getCommodities(): Promise<Commodity[]>;
  getCategories(): Promise<Category[]>;
  getHotelRoomsPriceRange(
    hotelId: string
  ): Promise<{ min: number; max: number }>;
  list(
    input: Partial<RoomListDomainDTO>
  ): Promise<PaginatedList<Room[]>>;
}
