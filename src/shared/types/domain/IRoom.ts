type TRoomStatus = "available" | "unavailable";

interface IRoom {
  id?: string;
  hotelId: string;
  name: string;
  maxGuest: number;
  beds: number;
  description: string;
  commodities: ICommodity[] | string[];
  categories: ICategory[] | string[];
  minRoomNightPrice?: number;
  status?: TRoomStatus;
  images?: IMediaFile[];
}
