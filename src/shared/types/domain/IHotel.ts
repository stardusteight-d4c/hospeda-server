type THotelStatus = "available" | "unavailable";

interface IHotel {
  id?: string;
  name: string;
  slug: string
  status: THotelStatus;
  starRating: number;
  description: string;
  internalInformation: IHotelInternalInformation;
  categories: ICategory[] | string[];
  commodities: ICommodity[] | string[];
  images?: IMediaFile[];
  address: IAddress;
}
