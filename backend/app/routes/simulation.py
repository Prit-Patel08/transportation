from fastapi import APIRouter
from app.models.request_models import SimulationRequest
from app.models.response_models import SimulationResponse
from app.services.traffic_simulation import traffic_service

router = APIRouter()

@router.post("/simulateTraffic", response_model=SimulationResponse)
async def simulate_traffic(request: SimulationRequest):
    return await traffic_service.run_simulation(request)
