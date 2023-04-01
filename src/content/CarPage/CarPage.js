import React from 'react';
import './_car-page.scss';

import { Button } from '@carbon/react';
import { Link } from 'react-router-dom';
import { NextOutline, PreviousOutline } from '@carbon/react/icons';

import IconsNavigation from '../IconsNavigation/IconsNavigation';
import CarHeader from './Car_Header';
import CarHeaderResults from './Car_HeaderResults';
import CarHeaderVisualization from './Car_HeaderVisualization';


import CarMileage from './Car_Mileage';
import CarType from './Car_Type';
import CarSize from './Car_Size';

import CarTotalResults from './Car_TotalResults';
import CarFootprintsButton from './Car_FootprintsButton';
import CarIndividualResults from './Car_IndividualResults';
import CarDataVisualization from './Car_DataVisualization'
import CarOffsetButton from './Car_OffsetButton';

import Waves from '../Waves';

const CarPage = () => {
  
  return <>
    <IconsNavigation />
        <section className='global-frame-calculator'>
              <div className='global-block-top'>
                  <h4>Car</h4>
              </div>
            <section className='car-main-container'>
              <div className='car-inputs-block'>
                  <CarHeader/>
                  <div className=''>
                    <CarMileage />
                    <CarType />
                    <CarSize />
                  </div>
                  <div className='car-button-container'>
                    <CarFootprintsButton />
                  </div>
              </div>

              <div className='car-results-block'>
                <CarHeaderResults/>
                <div className='car-results-container'>
                <CarIndividualResults />
                </div>
                <CarTotalResults />
              </div>

              <div className='car-visualization-block'>
                <CarHeaderVisualization/>
                <div className='car-datavisual-container'>
                  <CarDataVisualization />
                </div>
                  <CarOffsetButton />
              </div>
            </section>
        </section>
          <Waves />
    <div className='global-block-bottom'>
        <Link className='global-buttons-link-back-and-forth' to="/flight">
          <Button 
          renderIcon={PreviousOutline}
           className="global-re-styled-button-back-and-forth"
           kind='tertiary'
          >Flights
          </Button>
        </Link>
        <Link className='global-buttons-link-back-and-forth' to="/motorbike">
          <Button 
           className="global-re-styled-button-back-and-forth"
           renderIcon={NextOutline}
           kind='tertiary'
          >Motorbike
          </Button>
        </Link>
      </div>
  </>;

};

export default CarPage;