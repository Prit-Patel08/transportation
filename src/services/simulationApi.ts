import axios from "axios";
import { SimulationRequest, SimulationResponse } from '@/types/simulation';

// Point to the FastAPI backend
const API_BASE_URL = "http://localhost:8000";

export const simulationApi = {
  simulateTraffic: async (payload: SimulationRequest): Promise<SimulationResponse> => {
    try {
      const response = await axios.post(`${API_BASE_URL}/simulateTraffic`, payload);
      return response.data;
    } catch (error) {
      console.error("Simulation API Error:", error);
      throw error;
    }
  }
};
