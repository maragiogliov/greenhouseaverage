import React from 'react';
import './_car-page.scss';
import './_motorbike-page.scss';


import { Button } from '@carbon/react';
import { Link } from 'react-router-dom';
import { NextOutline, PreviousOutline } from '@carbon/react/icons';

import IconsNavigation from '../IconsNavigation/IconsNavigation';
import CarHeader from './Car_Header';

import CarMileage from './Car_Mileage';
import CarType from './Car_Type';
import CarSize from './Car_Size'

import CarTotalResults from './Car_TotalResults'

import CarFootprintsButton from './Car_FootprintsButton'
import CarIndividualResults from './Car_IndividualResults';



import Waves from '../Waves'

const CarMotorbikePage = () => {
  
  return <>
<IconsNavigation />
        
        <section className='global-frame-calculator'>
          {/* ------------------------------------------------------------------- */}
              <div className='global-block-top'>
                  <h4>Car & Motorbike</h4>
              </div>
          {/* ------------------------------------------------------------------- */}
            <CarHeader/>
            <section className='car-inputs-results-container'>
              <div className='car-right-block-inputs'>
                  <div className='car-inputs-container'>
                    <CarMileage />
                    <CarType />
                    <CarSize />

  
                  </div>
            
             
                  <div className='car-calculate-button-container'>
                    <CarFootprintsButton />
                  </div>
              </div>
              <div className='car-left-block-results'>
                <div className='car-results-big-container'>
                <CarIndividualResults />
                </div>
                <CarTotalResults />
              </div>
            </section>
          {/* ------------------------------------------------------------------- */}
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

export default CarMotorbikePage;