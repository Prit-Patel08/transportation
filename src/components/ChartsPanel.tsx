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
  Filler,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { useSimulationStore } from '../store/simulationStore';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const ChartsPanel = () => {
  const { results } = useSimulationStore();

  const defaultChartData = {
    congestion: { before: 85, after: 62 },
    emissions: { before: 120, after: 95 },
    efficiency: [40, 45, 60, 55, 75, 88],
  };

  const chartData = results?.chartData || defaultChartData;

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { grid: { color: '#1e293b' }, ticks: { color: '#64748b', font: { size: 10 } } },
      x: { grid: { display: false }, ticks: { color: '#64748b', font: { size: 10 } } }
    }
  };

  const lineOptions = {
    ...barOptions,
    elements: { point: { radius: 4, hoverRadius: 6, backgroundColor: '#00D1FF' } }
  };

  const congestionData = {
    labels: ['BASELINE', 'OPTIMIZED'],
    datasets: [{
      data: [chartData.congestion.before, chartData.congestion.after],
      backgroundColor: ['#334155', '#00D1FF'],
      borderRadius: 4,
      barThickness: 60,
    }],
  };

  const emissionsData = {
    labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
    datasets: [{
      data: [20, 35, 45, 65, 78, 75],
      borderColor: '#F87171',
      backgroundColor: 'rgba(248, 113, 113, 0.1)',
      fill: true,
      tension: 0.4,
    }],
  };

  const efficiencyData = {
    labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
    datasets: [{
      data: chartData.efficiency,
      borderColor: '#00D1FF',
      backgroundColor: 'rgba(0, 209, 255, 0.1)',
      fill: true,
      tension: 0.4,
    }],
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="nexus-card p-6 h-[300px]">
        <h4 className="text-[10px] font-black text-slate-500 tracking-widest uppercase mb-6">Traffic Congestion: Before vs After</h4>
        <div className="h-[200px]">
          <Bar data={congestionData} options={barOptions} />
        </div>
      </div>
      <div className="nexus-card p-6 h-[300px]">
        <h4 className="text-[10px] font-black text-slate-500 tracking-widest uppercase mb-6">CO2 Emissions Trend</h4>
        <div className="h-[200px]">
          <Line data={emissionsData} options={lineOptions} />
        </div>
      </div>
      <div className="nexus-card p-6 h-[300px]">
        <h4 className="text-[10px] font-black text-slate-500 tracking-widest uppercase mb-6">Transport Efficiency Score</h4>
        <div className="h-[200px]">
          <Line data={efficiencyData} options={lineOptions} />
        </div>
      </div>
    </div>
  );
};

export default ChartsPanel;