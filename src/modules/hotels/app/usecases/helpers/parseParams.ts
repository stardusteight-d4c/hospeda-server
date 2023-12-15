export function parseParams(
  attrParams: Partial<HotelListDTO>
): Partial<HotelListDomainDTO> {
  return {
    pageSize:
      attrParams?.pageSize &&
      parseInt(String(attrParams.pageSize).trim()),
    currentPage:
      attrParams?.currentPage &&
      parseInt(String(attrParams.currentPage).trim()),
    name: attrParams?.name && String(attrParams.name).trim(),
    city: attrParams?.city ? attrParams.city.trim().split(".") : [],
    state: attrParams?.state
      ? attrParams.state.trim().split(".")
      : [],
    status: attrParams?.status
      ? attrParams.status.trim().split(".")
      : [],
    distance: attrParams.distance
      ? attrParams.distance.trim().split(",")
      : []
  };
}
