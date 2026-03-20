import { useSimulationStore } from "@/store/simulationStore";

export const useCitySelection = () => {
  const { cities, city, setCity } = useSimulationStore();

  const handleCityChange = (cityName: string) => {
    const targetCity = cities.find(c => c.name === cityName);
    if (targetCity) {
      setCity(targetCity);
    }
  };

  return {
    cities,
    city,
    setCity: handleCityChange
  };
};
