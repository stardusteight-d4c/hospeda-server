import { EventPrivacy, EventStatus, Prisma } from "@prisma/client";

namespace Queries {
  export function create(event: IEvent) {
    const { address, banner, companyId, ...filteredEvent } =
      event as IEvent & {
        officialHotels: string[];
        hotels: string[];
        dateTime: any;
      };
    const data: Prisma.EventCreateInput = {
      ...filteredEvent,
      company: {
        connect: { id: companyId }
      },
      address: {
        create: address
      }
    };

    return { data };
  }

  export function findCategories(categoriesRef: string[]) {
    const where: Prisma.CategoryWhereInput = {
      id: {
        in: categoriesRef
      }
    };
    return { where };
  }

  export function findHotels(hotelsRef: string[]) {
    const where: Prisma.HotelWhereInput = {
      id: {
        in: hotelsRef
      }
    };
    const include: Prisma.HotelInclude = {
      address: true
    };
    return { where, include };
  }

  export function findManyByParams({
    pageSize,
    currentPage,
    name,
    status,
    city,
    state,
    companyId,
    privacy,
    highlight,
    slug
  }: Partial<EventListDomainDTO>) {
    const pagination =
      currentPage !== undefined && pageSize !== undefined;
    const where: Prisma.EventWhereInput = {
      name: name
        ? { contains: name, mode: "insensitive" }
        : undefined,
      slug: slug
        ? { contains: slug, mode: "insensitive" }
        : undefined,
      status:
        status && status.length !== 0
          ? { in: status as EventStatus[] }
          : undefined,
      privacy:
        privacy && privacy.length !== 0
          ? { in: privacy as EventPrivacy[] }
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
      },
      companyId: companyId ? { equals: companyId } : undefined,
      highlight:
        (highlight === true && { equals: true }) ||
        (highlight === false && { equals: false }) ||
        undefined
    };
    const include: Prisma.EventInclude = {
      address: true,
      company: true
    };
    const orderBy: Prisma.EventOrderByWithRelationInput = {
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

  export function countTotalItemsInFindManyByParams({
    name,
    status,
    city,
    state,
    companyId,
    privacy,
    highlight,
    slug
  }: Partial<EventListDomainDTO>) {
    const where: Prisma.EventWhereInput = {
      name: name
        ? { contains: name, mode: "insensitive" }
        : undefined,
      slug: slug
        ? { contains: slug, mode: "insensitive" }
        : undefined,
      status:
        status && status.length !== 0
          ? { in: status as EventStatus[] }
          : undefined,
      privacy:
        privacy && privacy.length !== 0
          ? { in: privacy as EventPrivacy[] }
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
      },
      companyId: companyId ? { equals: companyId } : undefined,
      highlight:
        (highlight === true && { equals: true }) ||
        (highlight === false && { equals: false }) ||
        undefined
    };
    return {
      where
    };
  }
}

export default Queries;
