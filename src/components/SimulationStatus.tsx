import React from 'react';
import { useSimulationStore } from '../store/simulationStore';
import { Activity, CheckCircle2, Loader2 } from 'lucide-react';

const SimulationStatus = () => {
  const { statusMessage, isLoading } = useSimulationStore();

  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-full border border-slate-200">
      {isLoading ? (
        <Loader2 className="w-4 h-4 text-blue-500 animate-spin" />
      ) : statusMessage === 'Simulation Complete' ? (
        <CheckCircle2 className="w-4 h-4 text-green-500" />
      ) : (
        <Activity className="w-4 h-4 text-slate-400" />
      )}
      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
        {statusMessage}
      </span>
    </div>
  );
};

export default SimulationStatus;