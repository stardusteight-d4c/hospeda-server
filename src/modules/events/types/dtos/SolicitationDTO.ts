interface SolicitationDTO {
  status: string;
  eventId: string;
  accommodations: number;
  extras: {
    transfer: boolean;
    insurance: boolean;
    specialPackages: boolean;
  };
}
