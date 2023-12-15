interface RoomListDTO {
  pageSize: number;
  currentPage: number;
  status: string;
  name: string;
  hotelId: string;
}
interface RoomListDomainDTO {
  pageSize: number;
  currentPage: number;
  status: string[];
  name: string;
  hotelId: string;
}
