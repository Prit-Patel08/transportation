import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface CongestionChartProps {
  data: { before: number; after: number };
}

const CongestionChart: React.FC<CongestionChartProps> = ({ data }) => {
  const chartData = {
    labels: ['BASELINE', 'OPTIMIZED'],
    datasets: [{
      data: [data.before, data.after],
      backgroundColor: ['#334155', '#00D1FF'],
      borderRadius: 4,
      barThickness: 60,
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
      <h4 className="text-[10px] font-black text-slate-500 tracking-widest uppercase mb-6">Traffic Congestion: Before vs After</h4>
      <div className="h-[200px]">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default CongestionChart;
