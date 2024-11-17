import { Error } from "./Error";

export interface FormResponse {
  Status: string;
  Errors: Error[];
}
