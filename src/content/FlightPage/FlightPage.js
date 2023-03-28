import React from 'react';
import './_flight-page.scss'
import { Button } from '@carbon/react';
import { Link } from 'react-router-dom';
import IconsNavigation from '../IconsNavigation/IconsNavigation';
import { NextOutline, PreviousOutline } from '@carbon/react/icons';
import FlightHeader from './Flight_Header';


import FlightOptions from './Flight_Options';
import FlightFrom from './Flight_From';
import FlightTo from './Flight_To'
import FlightClass from './Flight_Class'
import FlightTrips from './Flight_Trips'
import FlightRadiative from './Flight_Radiative'
import FlightLuggage from './Flight_Luggage';
import FlightTotalResults from './Flight_TotalResults'

import FlightFootprintsButton from './Flight_FootprintsButton'
import FlightIndividualResults from './Flight_IndividualResults';
import Waves from '../Waves'

const FlightsPage = () => {

  return <>
      <IconsNavigation />
      <section className='global-frame-calculator'>
      {/* ------------------------------------------------------------------- */}
          <div className='global-block-top'>
              <h4>Flights</h4>
          </div>
      {/* ------------------------------------------------------------------- */}
        <FlightHeader/>
        <section className='flight-inputs-results-container'>
          <div className='flight-right-block-inputs'>
              <div className='flight-inputs-container'>
                <FlightOptions />
                <FlightFrom />
                <FlightTo />
                <FlightLuggage  />
                <FlightClass /> 
                <FlightTrips />
                <FlightRadiative />
              </div>
              <div className='flight-calculate-button-container'>
                <FlightFootprintsButton />
              </div>
          </div>
          <div className='flight-left-block-results'>
            <div className='flight-results-big-container'>
            <FlightIndividualResults />
            </div>
            <FlightTotalResults />
          </div>
        </section>
      {/* ------------------------------------------------------------------- */}
    </section>

    <Waves />
      <div className='global-block-bottom'>
        <Link className='global-buttons-link-back-and-forth' to="/house">
          <Button 
           className="global-re-styled-button-back-and-forth"
           renderIcon={PreviousOutline}
           kind='tertiary'
          >House
          </Button>
        </Link>
        <Link className='global-buttons-link-back-and-forth' to="/car-motorbike">
          <Button 
          renderIcon={NextOutline}
           className="global-re-styled-button-back-and-forth"
           kind='tertiary'
          >Car
          </Button>
        </Link>
      </div>

    </>;
};

export default FlightsPage;
