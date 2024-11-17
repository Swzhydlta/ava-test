import { FormDetails } from "../interfaces/FormDetails";
import { FormResponse } from "../interfaces/FormResponse";

const API_BASE = "https://interview-assessment.api.avamae.co.uk/api/v1";

interface FormServiceResponse {
  status: string;
  data: FormResponse;
}

interface formService {
  postFormData: (data: FormDetails) => Promise<FormServiceResponse>;
}

const service: formService = {
  postFormData: async (data: FormDetails) => {
    let responseObj: FormServiceResponse = {
      status: "",
      data: {
        Status: "",
        Errors: [],
      },
    };
    try {
      const response = await fetch(`${API_BASE}/contact-us/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        responseObj.status = "apiError";
      } else {
        responseObj.status = "success";
      }
      const json: FormResponse = await response.json();
      responseObj.data = json;
      return responseObj;
    } catch (error) {
      responseObj.status = "error";
      return responseObj;
    }
  },
};

export default service;
