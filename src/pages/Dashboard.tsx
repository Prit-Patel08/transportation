import React from 'react';
import MapView from '../components/MapView';
import PolicyControls from '../components/PolicyControls';
import MetricsPanel from '../components/MetricsPanel';
import ChartsPanel from '../components/ChartsPanel';
import CitySelector from '../components/CitySelector';
import SimulationStatus from '../components/SimulationStatus';
import { LayoutDashboard, Info, Settings, BarChart3 } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-12">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-[2000]">
        <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <LayoutDashboard className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight text-slate-800">AI City Traffic</h1>
              <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Digital Twin Platform</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <SimulationStatus />
            <div className="h-8 w-[1px] bg-slate-200"></div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                <Info className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-6 py-8">
        {/* Top Section: City Selector */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Simulation Dashboard</h2>
            <p className="text-slate-500">Adjust policies to visualize real-time traffic impact.</p>
          </div>
          <CitySelector />
        </div>

        {/* Main Grid: Map + Controls */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 mb-8">
          <div className="xl:col-span-3">
            <MapView />
          </div>
          <div className="xl:col-span-1">
            <PolicyControls />
          </div>
        </div>

        {/* Metrics Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-bold text-slate-800">Impact Metrics</h3>
          </div>
          <MetricsPanel />
        </div>

        {/* Charts Section */}
        <ChartsPanel />

        {/* Future Extensions Placeholders */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-50">
          <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 flex flex-col items-center justify-center text-slate-400">
            <p className="text-sm font-bold uppercase">AI Prediction Panel</p>
            <p className="text-xs">Coming Soon</p>
          </div>
          <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 flex flex-col items-center justify-center text-slate-400">
            <p className="text-sm font-bold uppercase">2035 Forecast Mode</p>
            <p className="text-xs">Coming Soon</p>
          </div>
          <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 flex flex-col items-center justify-center text-slate-400">
            <p className="text-sm font-bold uppercase">Scenario Comparison</p>
            <p className="text-xs">Coming Soon</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;