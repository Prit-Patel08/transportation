export interface PolicyValues {
  private_car_usage: number;
  public_transport: number;
  bike_lane_coverage: number;
  ev_adoption: number;
  signal_optimization: number;
}

export interface SimulationMetrics {
  congestionReduction: number;
  travelTimeImprovement: number;
  fuelSavings: number;
  co2Reduction: number;
  mobilityScore: number;
}

export interface SimulationResponse {
  metrics: SimulationMetrics;
  chartData: {
    congestion: { before: number; after: number };
    emissions: { before: number; after: number };
    efficiency: number[];
  };
}

export interface SimulationRequest extends PolicyValues {
  city: string;
}

export interface Scenario {
  id: string;
  name: string;
  timestamp: string;
  city: string;
  policies: PolicyValues;
  results: SimulationMetrics;
}
