export interface FormDetails {
  FullName: string;
  EmailAddress: string;
  PhoneNumbers: string[];
  Message: string;
  bIncludeAddressDetails: boolean;
  AddressDetails: AddressDetails;
}

export interface AddressDetails {
  AddressLine1: string;
  AddressLine2: string;
  CityTown: string;
  StateCounty: string;
  Postcode: string;
  Country: string;
}
