export function parseParams(
  attrParams: Partial<RoomListDTO>
): Partial<RoomListDomainDTO> {
  return {
    pageSize:
      attrParams?.pageSize &&
      parseInt(String(attrParams.pageSize).trim()),
    currentPage:
      attrParams?.currentPage &&
      parseInt(String(attrParams.currentPage).trim()),
    status: attrParams?.status
      ? attrParams.status.trim().split(".")
      : [],
    hotelId: attrParams?.hotelId && attrParams?.hotelId.trim()
  };
}
