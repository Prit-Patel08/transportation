import { create } from 'zustand';
import { City } from '../types/city';
import { PolicyValues, SimulationResponse, Scenario } from '../types/simulation';
import { CITIES } from '../constants/cities';
import { DEFAULT_POLICIES } from '../constants/policyDefaults';

interface SimulationState {
  city: City;
  cities: City[];
  policies: PolicyValues;
  results: SimulationResponse | null;
  isLoading: boolean;
  statusMessage: string;
  scenarios: Scenario[];
  setCity: (city: City) => void;
  setPolicy: (key: keyof PolicyValues, value: number) => void;
  setResults: (results: SimulationResponse | null) => void;
  setIsLoading: (loading: boolean) => void;
  setStatusMessage: (message: string) => void;
  resetPolicies: () => void;
  addScenario: () => void;
  removeScenario: (id: string) => void;
}

export const useSimulationStore = create<SimulationState>((set) => ({
  cities: CITIES,
  city: CITIES[0],
  policies: DEFAULT_POLICIES,
  results: null,
  isLoading: false,
  statusMessage: 'Ready to simulate',
  setCity: (city) => set({ city }),
  setPolicy: (key, value) => set((state) => ({
    policies: { ...state.policies, [key]: value }
  })),
  setResults: (results) => set({ results }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setStatusMessage: (statusMessage) => set({ statusMessage }),
  resetPolicies: () => set({ policies: DEFAULT_POLICIES }),
  scenarios: [],
  addScenario: () => set((state) => {
    if (!state.results) return state;
    
    const count = state.scenarios.length + 1;
    const newScenario: Scenario = {
      id: crypto.randomUUID(),
      name: `Scenario ${String.fromCharCode(64 + count)}`, // A, B, C...
      timestamp: new Date().toLocaleTimeString(),
      city: state.city.name,
      policies: { ...state.policies },
      results: { ...state.results.metrics }
    };
    
    return { scenarios: [...state.scenarios, newScenario] };
  }),
  removeScenario: (id) => set((state) => ({
    scenarios: state.scenarios.filter(s => s.id !== id)
  })),
}));