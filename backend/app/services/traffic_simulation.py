from app.models.request_models import SimulationRequest
from app.models.response_models import SimulationResponse, SimulationMetrics, ChartData
import math

class TrafficSimulationService:
    @staticmethod
    async def run_simulation(request: SimulationRequest) -> SimulationResponse:
        """
        Calculates traffic impact based on transportation policies.
        These formulas are heuristic-based for the digital twin simulation.
        """
        
        # 1. Calculate Congestion Reduction (%)
        # Heavy weights on public transport and car usage reduction
        congestion_reduction = (
            (request.public_transport * 0.4) + 
            (request.signal_optimization * 0.3) +
            ((100 - request.private_car_usage) * 0.3)
        )
        # Normalize/Clip
        congestion_reduction = min(max(congestion_reduction * 0.5, 5.0), 45.0)

        # 2. Calculate Travel Time Improvement (%)
        # Closely linked to congestion and signal optimization
        travel_time_improvement = (congestion_reduction * 0.7) + (request.signal_optimization * 0.2)

        # 3. Calculate CO2 Reduction (%)
        # Weights on EV adoption, Bike lanes, and Public Transport
        co2_reduction = (
            (request.ev_adoption * 0.5) + 
            (request.public_transport * 0.3) + 
            (request.bike_lane_coverage * 0.2)
        )
        co2_reduction = min(max(co2_reduction * 0.4, 3.0), 50.0)

        # 4. Calculate Fuel Savings (%)
        # Correlated with CO2 reduction and reduced idling (congestion)
        fuel_savings = (co2_reduction * 0.6) + (congestion_reduction * 0.3)

        # 5. Calculate Mobility Score (0-100)
        # Holistic score based on all factors
        mobility_score = 60 + (
            (congestion_reduction + travel_time_improvement + co2_reduction + fuel_savings) / 4
        )
        mobility_score = min(mobility_score, 100.0)

        # 6. Generate Chart Data
        # Base values for 'Before'
        base_congestion = 85.0
        base_emissions = 120.0
        
        # 'After' values
        after_congestion = base_congestion * (1 - congestion_reduction / 100)
        after_emissions = base_emissions * (1 - co2_reduction / 100)
        
        # Mock efficiency trend (6 points representing time of day)
        # Efficiency improves as policies are implemented
        base_efficiency = [40, 45, 60, 55, 75, 88]
        improvement_factor = 1 + (mobility_score - 60) / 100
        after_efficiency = [min(v * improvement_factor, 100.0) for v in base_efficiency]

        return SimulationResponse(
            metrics=SimulationMetrics(
                congestionReduction=round(congestion_reduction, 1),
                travelTimeImprovement=round(travel_time_improvement, 1),
                fuelSavings=round(fuel_savings, 1),
                co2Reduction=round(co2_reduction, 1),
                mobilityScore=round(mobility_score, 1)
            ),
            chartData=ChartData(
                congestion={"before": base_congestion, "after": round(after_congestion, 1)},
                emissions={"before": base_emissions, "after": round(after_emissions, 1)},
                efficiency=[round(v, 1) for v in after_efficiency]
            )
        )

traffic_service = TrafficSimulationService()
