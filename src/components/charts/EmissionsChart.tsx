import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

interface EmissionsChartProps {
  data: { before: number; after: number }; // In real app, this might be a time series
}

const EmissionsChart: React.FC<EmissionsChartProps> = ({ data }) => {
  const chartData = {
    labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
    datasets: [{
      data: [20, 35, 45, 65, 78, 75], // Using mock trend for visual consistency
      borderColor: '#F87171',
      backgroundColor: 'rgba(248, 113, 113, 0.1)',
      fill: true,
      tension: 0.4,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { grid: { color: '#1e293b' }, ticks: { color: '#64748b', font: { size: 10 } } },
      x: { grid: { display: false }, ticks: { color: '#64748b', font: { size: 10 } } }
    }
  };

  return (
    <div className="nexus-card p-6 h-[300px]">
      <h4 className="text-[10px] font-black text-slate-500 tracking-widest uppercase mb-6">CO2 Emissions Trend</h4>
      <div className="h-[200px]">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default EmissionsChart;
