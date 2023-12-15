import { HotelStatus, Prisma } from "@prisma/client";

import { Hotel } from "@modules/hotels/domain";

namespace Queries {
  export function create(hotel: IHotel) {
    const {
      commodities,
      categories,
      address,
      images,
      internalInformation,
      ...filteredHotel
    } = hotel;
    const data: Prisma.HotelCreateInput = {
      ...filteredHotel,
      commodities: commodities && {
        set: commodities as any
      },
      categories: categories && { set: categories as any },
      address: address && {
        create: {
          ...address
        }
      }
    };
    const include: Prisma.HotelInclude = {
      address: true,
      internalInformation: true
    };
    return {
      data,
      include
    };
  }

  export function findUnique(hotelId: string, includeRooms: boolean) {
    const where: Prisma.HotelWhereUniqueInput = {
      id: hotelId
    };
    const include: Prisma.HotelInclude = {
      address: true,
      internalInformation: true,
      rooms: includeRooms ? true : false
    };
    return { where, include };
  }

  export function include() {
    const include: Prisma.HotelInclude = {
      address: true,
      internalInformation: true
    };
    return { include };
  }

  export function whereUniqueInputReturningImages(hotelId: string) {
    const where: Prisma.HotelWhereUniqueInput = {
      id: hotelId
    };
    const select: Prisma.HotelSelect = {
      images: true
    };
    return { where, select };
  }

  export function whereCommodityInput(commoditiesRef: string[]) {
    const where: Prisma.CommodityWhereInput = {
      id: {
        in: commoditiesRef
      }
    };
    return { where };
  }

  export function whereCategoryInput(categoriesRef: string[]) {
    const where: Prisma.CategoryWhereInput = {
      id: {
        in: categoriesRef
      }
    };
    return { where };
  }

  export function updateImagesInput(
    hotelId: string,
    newData: Prisma.InputJsonValue[]
  ) {
    const where: Prisma.HotelWhereUniqueInput = {
      id: hotelId
    };
    const updatedData: Prisma.HotelUpdateInput = {
      images: newData
    };
    return {
      where,
      data: updatedData
    };
  }

  export function whereUniqueInput(hotelId: string) {
    const where: Prisma.HotelWhereUniqueInput = {
      id: hotelId
    };
    return { where };
  }

  export function roomWhereInput(hotelId: string) {
    const where: Prisma.RoomWhereInput = {
      hotelId
    };
    return { where };
  }

  export function updateInput(hotel: IHotel) {
    const where: Prisma.HotelWhereUniqueInput = {
      id: hotel.id
    };

    const {
      images,
      categories,
      commodities,
      internalInformation,
      address,
      ...filteredHotel
    } = hotel;
    // @ts-ignore
    delete filteredHotel.addressId;
    const data: Prisma.HotelUpdateInput = {
      ...filteredHotel,
      categories: categories && { set: categories as any },
      commodities: commodities && { set: commodities as any },
      address: address && {
        update: {
          ...address
        }
      }
    };
    const include: Prisma.HotelInclude = {
      address: true,
      internalInformation: true
    };
    return {
      where,
      data,
      include
    };
  }

  export function findManyByParams({
    pageSize,
    currentPage,
    name,
    status,
    city,
    state
  }: Partial<HotelListDomainDTO>) {
    const pagination =
      currentPage !== undefined && pageSize !== undefined;

    const where: Prisma.HotelWhereInput = {
      name: name
        ? { contains: name, mode: "insensitive" }
        : undefined,
      status:
        status && status.length !== 0
          ? { in: status as HotelStatus[] }
          : undefined,
      address: {
        city:
          city && city.length !== 0
            ? { in: city, mode: "insensitive" }
            : undefined,
        state:
          state && state.length !== 0
            ? { in: state, mode: "insensitive" }
            : undefined
      }
    };
    const include: Prisma.HotelInclude = {
      address: true,
      internalInformation: true,
      _count: {
        select: {
          rooms: true
        }
      }
    };

    const orderBy: Prisma.HotelOrderByWithRelationInput = {
      createdAt: "desc"
    };
    const skip = pagination
      ? (currentPage - 1) * pageSize
      : undefined;
    const take = pageSize ? pageSize : undefined;
    return {
      where,
      orderBy,
      include,
      skip,
      take
    };
  }

  export function createInternalInformation(hotel: Hotel) {
    const { id, internalInformation } = hotel.get;
    const data: Prisma.HotelInternalInformationUncheckedCreateInput =
      {
        hotelId: id,
        hotelPolicies: internalInformation?.hotelPolicies,
        breakfastTax: internalInformation?.breakfastTax,
        issTax: internalInformation?.issTax,
        serviceTax: internalInformation?.serviceTax,
        contacts: {
          set: internalInformation?.contacts as any
        }
      };
    return { data };
  }

  export function updateInternalInformation(hotel: Hotel) {
    const { id, internalInformation } = hotel.get;
    if (!internalInformation)
      return { where: { hotelId: hotel.get.id }, data: {} } as any;
    const { contacts, ...filteredInternalInformation } =
      internalInformation;
    const data: Prisma.HotelInternalInformationUncheckedUpdateInput =
      {
        ...filteredInternalInformation,
        contacts: contacts && {
          set: internalInformation?.contacts as any
        }
      };

    const where = {
      hotelId: id
    };
    return { where, data };
  }

  export function countTotalItemsInFindManyByParams({
    name,
    status,
    city,
    state
  }: Partial<HotelListDomainDTO>) {
    const where: Prisma.HotelWhereInput = {
      name: name
        ? { contains: name, mode: "insensitive" }
        : undefined,
      status:
        status && status.length !== 0
          ? { in: status as HotelStatus[] }
          : undefined,
      address: {
        city:
          city && city.length !== 0
            ? { in: city, mode: "insensitive" }
            : undefined,
        state:
          state && state.length !== 0
            ? { in: state, mode: "insensitive" }
            : undefined
      }
    };
    return {
      where
    };
  }
}
export default Queries;
