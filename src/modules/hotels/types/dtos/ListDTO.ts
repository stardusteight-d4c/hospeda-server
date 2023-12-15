interface HotelListDTO {
  pageSize: number;
  currentPage: number;
  name: string;
  city: string;
  state: string;
  status: string;
  distance: string;
}
interface HotelListDomainDTO {
  pageSize: number;
  currentPage: number;
  name: string;
  city: string[];
  state: string[];
  status: string[];
  distance: string[];
}
