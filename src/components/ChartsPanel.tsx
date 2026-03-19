import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { useSimulationStore } from '../store/simulationStore';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ChartsPanel = () => {
  const { results } = useSimulationStore();

  if (!results) return null;

  const { chartData } = results;

  const congestionData = {
    labels: ['Before Policy', 'After Policy'],
    datasets: [
      {
        label: 'Congestion Level (%)',
        data: [chartData.congestion.before, chartData.congestion.after],
        backgroundColor: ['rgba(239, 68, 68, 0.6)', 'rgba(59, 130, 246, 0.6)'],
        borderRadius: 8,
      },
    ],
  };

  const emissionsData = {
    labels: ['Before Policy', 'After Policy'],
    datasets: [
      {
        label: 'CO2 Emissions (Tons/Day)',
        data: [chartData.emissions.before, chartData.emissions.after],
        backgroundColor: ['rgba(107, 114, 128, 0.6)', 'rgba(34, 197, 94, 0.6)'],
        borderRadius: 8,
      },
    ],
  };

  const efficiencyData = {
    labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
    datasets: [
      {
        label: 'Mobility Efficiency Trend',
        data: chartData.efficiency,
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h4 className="text-sm font-bold text-slate-500 uppercase mb-6">Traffic Congestion</h4>
        <Bar data={congestionData} options={options} />
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h4 className="text-sm font-bold text-slate-500 uppercase mb-6">CO2 Emissions</h4>
        <Bar data={emissionsData} options={options} />
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h4 className="text-sm font-bold text-slate-500 uppercase mb-6">Efficiency Score Trend</h4>
        <Line data={efficiencyData} options={options} />
      </div>
    </div>
  );
};

export default ChartsPanel;