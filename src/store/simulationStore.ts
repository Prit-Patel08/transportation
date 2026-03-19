import { create } from 'zustand';
import { City, PolicyValues, SimulationResponse } from '../types/simulation';

interface SimulationState {
  selectedCity: City;
  cities: City[];
  policies: PolicyValues;
  results: SimulationResponse | null;
  isLoading: boolean;
  statusMessage: string;
  setSelectedCity: (city: City) => void;
  setPolicy: (key: keyof PolicyValues, value: number) => void;
  setResults: (results: SimulationResponse | null) => void;
  setIsLoading: (loading: boolean) => void;
  setStatusMessage: (message: string) => void;
}

export const useSimulationStore = create<SimulationState>((set) => ({
  cities: [
    { name: 'Ahmedabad', lat: 23.0225, lng: 72.5714 },
    { name: 'Mumbai', lat: 19.0760, lng: 72.8777 },
    { name: 'Delhi', lat: 28.6139, lng: 77.2090 },
    { name: 'Bangalore', lat: 12.9716, lng: 77.5946 },
  ],
  selectedCity: { name: 'Ahmedabad', lat: 23.0225, lng: 72.5714 },
  policies: {
    private_car_usage: 60,
    public_transport: 30,
    bike_lane_coverage: 10,
    ev_adoption: 25,
    signal_optimization: 40,
  },
  results: null,
  isLoading: false,
  statusMessage: 'Simulation Ready',
  setSelectedCity: (city) => set({ selectedCity: city }),
  setPolicy: (key, value) => set((state) => ({
    policies: { ...state.policies, [key]: value }
  })),
  setResults: (results) => set({ results }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setStatusMessage: (statusMessage) => set({ statusMessage }),
}));