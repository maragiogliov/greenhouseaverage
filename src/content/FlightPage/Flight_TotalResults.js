import React from 'react';
import {  useSelector } from "react-redux";

const FlightTotalResult = () => {
  const { flightFootprint } = useSelector(
    (state) => state.flights
  );
  const totalFlightFootprint = (parseFloat(flightFootprint) ||  0);

  return <>
          <div className='secondary-results'>Calculated Flight Footprint = <span style={{ marginLeft: '5px', marginRight: '5px' }}>{(totalFlightFootprint.toFixed(2))}</span> kilograms of CO2e</div>
  </>;
};

export default FlightTotalResult;