import { City } from "@/types/city";
import { CITIES } from "@/constants/cities";

export const cityApi = {
  getCities: async (): Promise<City[]> => {
    // Simulated API call
    return Promise.resolve(CITIES);
  }
};
