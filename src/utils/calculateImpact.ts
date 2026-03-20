import { PolicyValues, SimulationMetrics } from "@/types/simulation";

export const calculateImpact = (policies: PolicyValues): Partial<SimulationMetrics> => {
  // Placeholder for client-side impact Estimation logic
  const reduction = (policies.public_transport * 0.5 + policies.bike_lane_coverage * 0.3) / 100;
  return {
    congestionReduction: reduction * 100,
  };
};
