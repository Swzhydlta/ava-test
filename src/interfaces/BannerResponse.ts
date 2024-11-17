import { Error } from "./Error";

export interface BannerResponse {
  Details: Detail[];
  Status: string;
  Errors: Error[];
}

export interface Detail {
  Title: string;
  Subtitle: string;
  ImageUrl: string;
}
