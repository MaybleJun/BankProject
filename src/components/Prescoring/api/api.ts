import { apiClient, APPLICATION_ENDPOINT } from "./data-list-api";
import { PrescoringForm } from "../types";

interface ApiResponse<T> {
  data?: T;
  error?: string;
}

export async function postPrescoring(data: PrescoringForm): Promise<ApiResponse<any>> {
  try {
    const response = await apiClient.post(APPLICATION_ENDPOINT, data);

    if (response.status >= 200 && response.status < 300) {
      return { data: response.data };
    } else {
      return { error: `Unexpected response status: ${response.status}` };
    }
  } catch (error) {
    console.error("Error in postPrescoring:", error);
    return { error: error instanceof Error ? error.message : "An unknown error occurred" };
  }
}
