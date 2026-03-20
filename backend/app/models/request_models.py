from pydantic import BaseModel

class SimulationRequest(BaseModel):
    city: str
    private_car_usage: int
    public_transport: int
    bike_lane_coverage: int
    ev_adoption: int
    signal_optimization: int
