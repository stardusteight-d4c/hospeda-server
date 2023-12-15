interface IHotelInternalInformation {
  id?: string;
  hotelPolicies: string;
  breakfastTax: number;
  issTax: number;
  serviceTax: number
  contacts: IContact[]
}
