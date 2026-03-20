import React from 'react';
import DashboardLayout from "./DashboardLayout";
import TrafficMap from "@/components/map/TrafficMap";
import PolicyControls from "@/components/controls/PolicyControls";
import MetricsGrid from "@/components/metrics/MetricsGrid";
import CongestionChart from "@/components/charts/CongestionChart";
import EmissionsChart from "@/components/charts/EmissionsChart";
import EfficiencyChart from "@/components/charts/EfficiencyChart";
import ScenarioComparison from "@/components/metrics/ScenarioComparison";
import { useSimulationStore } from "@/store/simulationStore";

const DashboardPage = () => {
  const { city, results } = useSimulationStore();

  const defaultMetrics = {
    congestionReduction: 28,
    travelTimeImprovement: 15,
    fuelSavings: 12,
    co2Reduction: 20,
    mobilityScore: 78
  };

  const defaultChartData = {
    congestion: { before: 85, after: 62 },
    emissions: { before: 120, after: 95 },
    efficiency: [40, 45, 60, 55, 75, 88],
  };

  const metrics = results?.metrics || defaultMetrics;
  const chartData = results?.chartData || defaultChartData;

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <MetricsGrid metrics={metrics} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <TrafficMap city={city} />
          </div>
          <div>
            <PolicyControls />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <CongestionChart data={chartData.congestion} />
          <EmissionsChart data={chartData.emissions} />
          <EfficiencyChart data={chartData.efficiency} />
        </div>

        <ScenarioComparison />
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
