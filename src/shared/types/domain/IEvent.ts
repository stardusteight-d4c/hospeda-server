type TEventPrivacy = "public" | "private";

type TEventStatus = "pending" | "approved" | "rejected" | "closed";

type TEventExtras = {
  transfer: boolean;
  insurance: boolean;
  specialPackages: boolean;
};

interface IEvent {
  id: string;
  companyId: string;
  name: string;
  slug: string
  type: string;
  estimatedAudience: number;
  privacy: TEventPrivacy;
  description: string;
  banner: IMediaFile;
  status: TEventStatus;
  accommodations?: number;
  bookings?: number;
  extras?: TEventExtras;
  tags: string[];
  highlight?: boolean;
  address: IAddress;
  officialHotels: string[] | IHotel[];
  hotels: string[] | IHotel[];
  dateTime: IDateTime;
}
