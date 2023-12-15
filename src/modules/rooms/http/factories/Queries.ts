import { Prisma, RoomStatus } from "@prisma/client";
import { roomToPrisma } from "../transformers/roomToPrisma";

namespace Queries {
  export function createInput(room: IRoom) {
    const data: Prisma.RoomCreateInput = roomToPrisma(room);
    return {
      data
    };
  }

  export function whereUniqueInput(roomId: string) {
    const where: Prisma.RoomWhereUniqueInput = {
      id: roomId
    };
    return { where };
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

  export function whereUniqueInputReturningImages(roomId: string) {
    const where: Prisma.RoomWhereUniqueInput = {
      id: roomId
    };
    const select: Prisma.RoomSelect = {
      images: true
    };
    return { where, select };
  }

  export function updateImagesInput(
    roomId: string,
    newData: Prisma.InputJsonValue[]
  ) {
    const where: Prisma.RoomWhereUniqueInput = {
      id: roomId
    };
    const updatedData: Prisma.RoomUpdateInput = {
      images: newData
    };
    return {
      where,
      data: updatedData
    };
  }

  export function whereInput(hotelId: string) {
    const where: Prisma.RoomWhereInput = {
      hotelId
    };
    return { where };
  }

  export function updateInput(room: IRoom) {
    const { images, categories, commodities, ...filteredRoom } = room;
    const where: Prisma.RoomWhereUniqueInput = {
      id: room.id
    };
    const data: Prisma.RoomUpdateInput = {
      ...filteredRoom,
      categories: categories && {
        set: categories as any
      },
      commodities: commodities && {
        set: commodities as any
      }
    };
    return {
      where,
      data
    };
  }

  export function paginationInput(input: {
    pageSize: number;
    currentPage: number;
  }) {
    const { pageSize, currentPage } = input;
    const skip = (currentPage - 1) * pageSize;
    const take = pageSize ? pageSize : undefined;
    return { skip, take };
  }

  export function findManyByParams({
    pageSize,
    currentPage,
    name,
    status,
    hotelId
  }: Partial<RoomListDomainDTO>) {
    const pagination =
      currentPage !== undefined && pageSize !== undefined;

    const where: Prisma.RoomWhereInput = {
      name: name
        ? { contains: name, mode: "insensitive" }
        : undefined,
      status:
        status && status.length !== 0
          ? { in: status as RoomStatus[] }
          : undefined,
      hotelId: hotelId && hotelId
    };

    const orderBy: Prisma.RoomOrderByWithRelationInput = {
      createdAt: "desc"
    };
    const skip = pagination
      ? (currentPage - 1) * pageSize
      : undefined;
    const take = pageSize ? pageSize : undefined;
    return {
      where,
      orderBy,
      skip,
      take
    };
  }

  export function countTotalItemsInFindManyByParams({
    name,
    status,
    hotelId
  }: Partial<RoomListDomainDTO>) {
    const where: Prisma.RoomWhereInput = {
      name: name
        ? { contains: name, mode: "insensitive" }
        : undefined,
      status:
        status && status.length !== 0
          ? { in: status as RoomStatus[] }
          : undefined,
      hotelId: hotelId && hotelId
    };

    return {
      where
    };
  }
}
export default Queries;
