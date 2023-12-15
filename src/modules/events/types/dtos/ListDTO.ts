interface EventListDTO {
  pageSize: number;
  currentPage: number;
  name: string;
  city: string;
  state: string;
  status: string;
  promoterId: string;
  privacy: string;
  highlight: string;
  slug: string;
}

interface EventListDomainDTO {
  pageSize: number;
  currentPage: number;
  name: string;
  city: string[];
  state: string[];
  status: string[];
  companyId: string;
  privacy: string[];
  highlight: boolean;
  slug: string;
}
