import { BannerResponse } from "../interfaces/BannerResponse";

const API_BASE = "https://interview-assessment.api.avamae.co.uk/api/v1";

interface BannerServiceResponse {
  status: string;
  data: BannerResponse;
}

interface bannerService {
  fetchBannerDetails: () => Promise<BannerServiceResponse>;
}

const service: bannerService = {
  fetchBannerDetails: async () => {
    let responseObj: BannerServiceResponse = {
      status: "",
      data: {
        Details: [],
        Status: "",
        Errors: [],
      },
    };
    try {
      const response = await fetch(`${API_BASE}/home/banner-details`);
      if (!response.ok) {
        responseObj.status = "error";
      } else {
        responseObj.status = "success";
      }
      const json: BannerResponse = await response.json();
      responseObj.data = json;
      return responseObj;
    } catch (error) {
      responseObj.status = "error";
      return responseObj;
    }
  },
};

export default service;
