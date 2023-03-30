import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@carbon/react';
import { Calculator } from '@carbon/react/icons';
import {
  setDistanceBetweenAirports,
  setShowFlightResult,
  setFlightFootprint,
} from '../../redux/flights';

const FlightFootprint = () => {
  const dispatch = useDispatch();

  function distance(lat1, lon1, lat2, lon2) {
    const R = 6371; // km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  }

  const { airportFromLocation, airportToLocation } = useSelector(
    (state) => state.flights
  );

  const calculateFlightsFootprint = () => {
    if (airportFromLocation && airportToLocation) {
      const { lat: lat1, lon: lon1 } = airportFromLocation;
      const { lat: lat2, lon: lon2 } = airportToLocation;
      const distanceBetweenAirports = distance(lat1, lon1, lat2, lon2);
      console.log(`Distance between airports: ${distanceBetweenAirports} km`);

      const fuelConsumption = 0.2; // liters per km per passenger
      const co2EmissionFactor = 2.68; // kg of CO2 per liter of fuel
      const conversionFactor = 3.67; // conversion factor for CO2 to carbon
      const passengerCount = 1; // number of passengers

      const co2Emissions =
        (fuelConsumption *
          co2EmissionFactor *
          distanceBetweenAirports *
          passengerCount) /
        1000; // kg of CO2 emissions

      const carbonFootprint = co2Emissions * conversionFactor;
      console.log(`Carbon footprint: ${carbonFootprint} kg CO2e`);

      dispatch(setDistanceBetweenAirports(distanceBetweenAirports.toFixed(2)));
      dispatch(setFlightFootprint(carbonFootprint.toFixed(2)));
      dispatch(setShowFlightResult(true));
    }
  };

  return (
    <Button
      onClick={calculateFlightsFootprint}
      className='flight-calculate-footprint-button'
    >
      Calculate Flights Footprint
      <Calculator className='secondary-calculator-icon' />
    </Button>
  );
};



export default FlightFootprint;
