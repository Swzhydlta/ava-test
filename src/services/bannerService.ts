import { BannerResponse } from "../interfaces/BannerResponse";

const API_BASE = "https://interview-assessment.api.avamae.co.uk/api/v1";

interface ResponseObj {
  status: string;
  data: any;
}

interface contactService {
  fetchBannerDetails: (page: number) => Promise<ResponseObj>;
}

const service: contactService = {
  fetchBannerDetails: async () => {
    let responseObj: ResponseObj = { status: "", data: "" };
    try {
      const response = await fetch(`${API_BASE}/home/banner-details`);
      if (!response.ok) {
        responseObj.status = "apiError";
      } else {
        responseObj.status = "success";
      }
      const json: BannerResponse = await response.json();
      responseObj.data = json;
      return responseObj;
    } catch (error) {
      responseObj.status = "error";
      responseObj.data = error;
      return responseObj;
    }
  },
};

export default service;
