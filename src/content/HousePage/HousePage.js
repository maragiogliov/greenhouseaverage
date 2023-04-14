import React from 'react';
import './_house-page.scss';

import { Button } from '@carbon/react';
import { Link } from 'react-router-dom';
import { NextOutline, PreviousOutline } from '@carbon/react/icons';

import IconsNavigation from '../IconsNavigation/IconsNavigation';
import HouseHeader from './House_Header';
import HouseHeaderResults from './House_HeaderResults';
import HouseHeaderVisualization from './House_HeaderVisualization';



import HouseElectricity from './House_Electricity';
import HouseNaturalGas from './House_NaturalGas';
// import HouseHeatingOil from './House_HeatingOil'
import HouseCoal from './House_Coal'
import HouseLPG from './House_LPG'
import HousePropane from './House_Propane'
import HouseFootprintsButton from './House_FootprintsButton'
import HouseIndividualResults from './House_IndividualResults';
import HouseDataVisualization from './House_DataVisualization'
import HouseOffsetButton from './House_OffsetButton'

import HouseTotalResults from './House_TotalResults'

import Waves from '../Waves'



const HousePage = () => {

  return <>
    <IconsNavigation />
    <section className='global-frame-calculator'>
          <div className='global-block-top'>
              <h4>Household Energy</h4>
          </div>

        <section className='house-main-container'>

          <div className='house-inputs-block'>
              <HouseHeader/>
              <div className=''>
                <HouseElectricity />
                <HouseNaturalGas />
                {/* <HouseHeatingOil /> */}
                <HouseCoal /> 
                <HouseLPG />
                <HousePropane />
                {/*<HouseWoodenPellets />*/}
              </div>
              <div className='house-button-container'>
                <HouseFootprintsButton />
              </div>
          </div>

          <div className='house-results-block'>
            <HouseHeaderResults/>
            <div className='house-results-container'>
              <HouseIndividualResults />
            </div>
            <HouseTotalResults />
          </div>

          <div className='house-visualization-block'>
          <HouseHeaderVisualization/>

            <div className='house-datavisual-container'>
              <HouseDataVisualization />
            </div>
            <HouseOffsetButton />
          </div>

        </section>
      {/* ------------------------------------------------------------------- */}
    </section>
      <div className='global-block-bottom'>
        <Link className='global-buttons-link-back-and-forth' to="/welcome">
          <Button 
          renderIcon={PreviousOutline}
           className="global-re-styled-button-back-and-forth"
           kind='tertiary'
          >Welcome
          </Button>
        </Link>
        <Link className='global-buttons-link-back-and-forth' to="/flight">
          <Button 
           className="global-re-styled-button-back-and-forth"
           renderIcon={NextOutline}
           kind='tertiary'
          >Flights
          </Button>
        </Link>
      </div>
      <Waves />

  </>;
};

export default HousePage;