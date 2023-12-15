interface HotelUploadFormDataDTO {
  hotelId: string;
  images: IMediaFile[];
}

interface RoomUploadFormDataDTO {
  roomId: string;
  images: IMediaFile[];
}

interface EventUploadFormDataDTO {
  eventId: string;
  banner: IMediaFile;
}


interface BannerUploadFormDataDTO {
  bannerId: string;
  image: IMediaFile;
}

