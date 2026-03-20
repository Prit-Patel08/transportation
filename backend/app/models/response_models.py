from pydantic import BaseModel
from typing import List, Dict

class SimulationMetrics(BaseModel):
    congestionReduction: float
    travelTimeImprovement: float
    fuelSavings: float
    co2Reduction: float
    mobilityScore: float

class ChartData(BaseModel):
    congestion: Dict[str, float]
    emissions: Dict[str, float]
    efficiency: List[float]

class SimulationResponse(BaseModel):
    metrics: SimulationMetrics
    chartData: ChartData
