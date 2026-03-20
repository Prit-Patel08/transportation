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

interface EfficiencyChartProps {
  data: number[];
}

const EfficiencyChart: React.FC<EfficiencyChartProps> = ({ data }) => {
  const chartData = {
    labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
    datasets: [{
      data: data,
      borderColor: '#00D1FF',
      backgroundColor: 'rgba(0, 209, 255, 0.1)',
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
      <h4 className="text-[10px] font-black text-slate-500 tracking-widest uppercase mb-6">Transport Efficiency Score</h4>
      <div className="h-[200px]">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default EfficiencyChart;
