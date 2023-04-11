import React from 'react';
import './_flight-page.scss'
import { Button } from '@carbon/react';
import { Link } from 'react-router-dom';
import IconsNavigation from '../IconsNavigation/IconsNavigation';
import { NextOutline, PreviousOutline } from '@carbon/react/icons';
import FlightHeader from './Flight_Header';
import FlightHeaderResults from './Flight_HeaderResults';
import FlightHeaderVisualization from './Flight_HeaderVisualization';



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

import FlightDataVisualization from './Flight_DataVisualization'
import FlightOffsetButton from './Flight_OffsetButton'
import Waves from '../Waves'

const FlightsPage = () => {

  return <>
      <IconsNavigation />
      <section className='global-frame-calculator'>

          <div className='global-block-top'>
              <h4>Flights</h4>
          </div>

        <section className='flight-main-container'>

          <div className='flight-inputs-block'>
          <FlightHeader/>
          <br />
              <div className='flight-inputs-container'>
                <FlightOptions />
                <FlightFrom />
                <FlightTo />
                <FlightLuggage  />
                <FlightClass /> 
                <FlightTrips />
                <FlightRadiative />
              </div>
              <div className='flight-button-container'>
                <FlightFootprintsButton />
              </div>
          </div>

          <div className='flight-results-block'>
            <FlightHeaderResults/>
            <div className='flight-results-container'>
            <FlightIndividualResults />
            </div>
            <FlightTotalResults />
          </div>

          <div className='flight-visualization-block'>
          <FlightHeaderVisualization/>

            <div className='flight-datavisual-container'>
            <FlightDataVisualization />
            </div>
            <FlightOffsetButton />
          </div>

        </section>
      {/* ------------------------------------------------------------------- */}
    </section>

      <div className='global-block-bottom'>
        <Link className='global-buttons-link-back-and-forth' to="/house">
          <Button 
           className="global-re-styled-button-back-and-forth"
           renderIcon={PreviousOutline}
           kind='tertiary'
          >House
          </Button>
        </Link>
        <Link className='global-buttons-link-back-and-forth' to="/car">
          <Button 
          renderIcon={NextOutline}
           className="global-re-styled-button-back-and-forth"
           kind='tertiary'
          >Car
          </Button>
        </Link>
      </div>
      <Waves />


    </>;
};

export default FlightsPage;
