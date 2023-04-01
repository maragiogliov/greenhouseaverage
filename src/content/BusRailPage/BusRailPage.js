import React from 'react';
import './_bus-rail-page.scss';

import { Button } from '@carbon/react';
import { Link } from 'react-router-dom';
import { NextOutline, PreviousOutline } from '@carbon/react/icons';

import IconsNavigation from '../IconsNavigation/IconsNavigation';
import BusRailHeaders from './BusRail_Headers';
import BusRailHeaderResults from './BusRail_HeaderResults';
import BusRailHeaderVisualization from './BusRail_HeaderVisualization';


import BusRailBus from './BusRail_Bus';
import BusRailCoach from './BusRail_Coach';
import BusRailLocalTrain from './BusRail_LocalTrain'
import BusRailLongTrain from './BusRail_LongTrain'
import BusRailTram from './BusRail_Tram'
import BusRailSubway from './BusRail_Subway'
import BusRailTaxi from './BusRail_Taxi';
import BusRailTotalResult from './BusRail_TotalResult';

import BusRailFootprintsButton from './BusRail_FootprintsButton'
import BusRailIndividualResults from './BusRail_IndividualResults'
import BusRailDataVisualization from './BusRail_DataVisualization'
import BusRailOffsetButton from './BusRail_OffsetButton'
import Waves from '../Waves'

const BusRailPage = () => {
  return <>
              <IconsNavigation />
        
    <section className='global-frame-calculator'>
          <div className='global-block-top'>
              <h4>Public Transport</h4>
          </div>
        <section className='bus-rail-main-container'>

          <div className='bus-rail-inputs-block'>
            <BusRailHeaders/>
              <div className=''>
                <BusRailBus />
                <BusRailCoach />
                <BusRailLocalTrain />
                <BusRailLongTrain /> 
                <BusRailTram />
                <BusRailSubway />
                <BusRailTaxi />
              </div>
              <div className='bus-rail-button-container'>
                <BusRailFootprintsButton />
              </div>
          </div>

          <div className='bus-rail-results-block'>
          <BusRailHeaderResults/>

            <div className='bus-rail-results-container'>
              <BusRailIndividualResults />
            </div>
              <BusRailTotalResult/>
          </div>
          <div className='bus-rail-visualization-block'>
          <BusRailHeaderVisualization/>
            <div className='busrail-datavisual-containerr'>
            <BusRailDataVisualization />
            </div>
            <BusRailOffsetButton />
          </div>
        </section>
    </section>
  
    <Waves />
      <div className='global-block-bottom'>
        <Link className='global-buttons-link-back-and-forth' to="/motorbike">
          <Button 
          renderIcon={PreviousOutline}
           className="global-re-styled-button-back-and-forth"
           kind='tertiary'
          >Motorbike
          </Button>
        </Link>
        <Link className='global-buttons-link-back-and-forth' to="/secondary">
          <Button 
           className="global-re-styled-button-back-and-forth"
           renderIcon={NextOutline}
           kind='tertiary'
          >Household
          </Button>
        </Link>
      </div>
  </>;
};

export default BusRailPage;