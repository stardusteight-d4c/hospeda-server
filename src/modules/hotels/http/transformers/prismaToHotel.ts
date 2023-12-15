import {
  Address,
  Commodity,
  Hotel,
  HotelInternalInformation
} from "@prisma/client";

import { Hotel as HotelEntity } from "@modules/hotels/domain";

export function prismaToHotel(prismaData: {
  hotel: Hotel;
  hotelInternalInformation?: HotelInternalInformation;
  address: Address;
}): HotelEntity {
  const { hotel, hotelInternalInformation, address } = prismaData;
  let roomsCount: number | null;
  // @ts-ignore
  if (hotel?._count?.rooms !== undefined) {
    // @ts-ignore
    roomsCount = hotel._count.rooms;
  }

  const hotelData = {
    ...hotel,
    roomsCount,
    // @ts-ignore
    internalInformation: hotel.internalInformation ?? hotelInternalInformation,
    address: {
      id: address.id,
      postalCode: address.postalCode,
      number: address.number,
      street: address.street,
      complement: address.complement,
      neighbourhood: address.neighbourhood,
      city: address.city,
      state: address.state,
      latitude: address.latitude,
      longitude: address.longitude
    }
  };

  // @ts-ignore
  delete hotelData?._count;
  return new HotelEntity(hotelData as unknown as IHotel);
}
