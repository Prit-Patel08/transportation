import axios from 'axios';
import { SimulationRequest, SimulationResponse } from '../types/simulation';

const API_BASE_URL = 'http://localhost:8000';

export const simulateTraffic = async (data: SimulationRequest): Promise<SimulationResponse> => {
  try {
    // In a real scenario, this would call the backend. 
    // For this demo, we'll simulate a response if the backend isn't running.
    const response = await axios.post(`${API_BASE_URL}/simulateTraffic`, data);
    return response.data;
  } catch (error) {
    console.warn("Backend not reachable, returning mock data for demonstration.");
    // Mock response for UI demonstration
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          metrics: {
            congestionReduction: Math.floor(Math.random() * 30) + 10,
            travelTimeImprovement: Math.floor(Math.random() * 25) + 5,
            fuelSavings: Math.floor(Math.random() * 20) + 5,
            co2Reduction: Math.floor(Math.random() * 35) + 15,
            mobilityScore: Math.floor(Math.random() * 40) + 50,
          },
          chartData: {
            congestion: { before: 85, after: 85 - (Math.random() * 20) },
            emissions: { before: 120, after: 120 - (Math.random() * 30) },
            efficiency: Array.from({ length: 6 }, () => Math.floor(Math.random() * 50) + 40),
          }
        });
      }, 1500);
    });
  }
};