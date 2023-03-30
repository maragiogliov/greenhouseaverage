import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { 
    setShowFlightResult, 
    resetFlightFootprint,

} from "../../redux/flights";

import { Button } from '@carbon/react';
import { TrashCan } from '@carbon/react/icons';

const FlightResults = () => {
  const {
    distanceBetweenAirports,
    flightFootprint,
    showFlightResult,

    } = useSelector(
    (state) => state.flights
  );
  const dispatch = useDispatch();

  const resetFootprintFlight = () => {
    dispatch(resetFlightFootprint());
    dispatch(setShowFlightResult(false))
  };

  return <>  

    {showFlightResult && distanceBetweenAirports > 0 &&  (
        <section className='flight-result-section'>
          <h5 
            className='flight-results-container'>
            {flightFootprint} kg of CO2e in {distanceBetweenAirports} km
          </h5>
          <Button
            kind='ghost'
            size='lg'
            className='flight-result-trashcan-icon-container'
            onClick={resetFootprintFlight} >
            <TrashCan />
          </Button>
        </section>
      )
    }
  </>
};

export default FlightResults;