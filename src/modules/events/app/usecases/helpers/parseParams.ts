export function parseParams(
  attrParams: Partial<EventListDTO>
): Partial<EventListDomainDTO> {
  const handleHighlight = () => {
    if (attrParams.highlight === "true") return true;
    if (attrParams.highlight === "false") return false;
    return undefined;
  };
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
    privacy: attrParams?.privacy
      ? attrParams.privacy.trim().split(".")
      : [],
    highlight: handleHighlight(),
    slug: attrParams?.slug && String(attrParams.slug).trim()
  };
}
