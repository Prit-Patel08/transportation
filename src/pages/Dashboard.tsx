import React from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import MapView from '../components/MapView';
import PolicyControls from '../components/PolicyControls';
import MetricsPanel from '../components/MetricsPanel';
import ChartsPanel from '../components/ChartsPanel';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#0B0E14]">
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />
        
        <main className="p-8 space-y-8 overflow-y-auto">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
            <div className="xl:col-span-3">
              <MapView />
            </div>
            <div className="xl:col-span-1">
              <PolicyControls />
            </div>
          </div>

          <MetricsPanel />
          
          <ChartsPanel />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;