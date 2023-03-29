import React from 'react';
import './_motorbike-page.scss';

import { Button } from '@carbon/react';
import { Link } from 'react-router-dom';
import { NextOutline, PreviousOutline } from '@carbon/react/icons';

import IconsNavigation from '../IconsNavigation/IconsNavigation';
import MotorbikeHeader from './Motorbike_Header';

import MotorbikeMileage from './Motorbike_Mileage';
import MotorbikeMotorSize from './Motorbike_MotorSize';

import MotorbikeTotalResults from './Motorbike_TotalResults'
import MotorbikeFootprintsButton from './Motorbike_FootprintsButton'
import MotorbikeIndividualResults from './Motorbike_IndividualResults';
import MotorbikeDataVisualization from './Motorbike_DataVisualization'
import MotorbikeOffsetButton from './Motorbike_OffsetButton'
import Waves from '../Waves'


const MotorbikePage = () => {
  return <>
  <IconsNavigation />

 <section className='global-frame-calculator'>
          {/* ------------------------------------------------------------------- */}
              <div className='global-block-top'>
                  <h4>Motorbike</h4>
              </div>
          {/* ------------------------------------------------------------------- */}
            <MotorbikeHeader/>
            <section className='motorbike-inputs-results-container'>

              <div className='motorbike-right-block-inputs'>
                  <div className='motorbike-inputs-container'>
                    <MotorbikeMileage/>
                    <MotorbikeMotorSize/>
                  </div>
                  <div className='motorbike-calculate-button-container'>
                    <MotorbikeFootprintsButton />
                  </div>
              </div>
              
              <div className='motorbike-center-block-results'>
                <div className='motorbike-results-big-container'>
                <MotorbikeIndividualResults />
                </div>
                <MotorbikeTotalResults />
              </div>

              <div className='motorbike-left-block-results'>
                  <div className='motorbike-datavisual-big-container'>
                  <MotorbikeDataVisualization />
                  </div>
                  <MotorbikeOffsetButton />
              </div>
            </section>
          {/* ------------------------------------------------------------------- */}
        </section>
    <Waves />
    <div className='global-block-bottom'>
        <Link className='global-buttons-link-back-and-forth' to="/car">
          <Button 
          renderIcon={PreviousOutline}
           className="global-re-styled-button-back-and-forth"
           kind='tertiary'
          >Car
          </Button>
        </Link>
        <Link className='global-buttons-link-back-and-forth' to="/bus-rail">
          <Button 
           className="global-re-styled-button-back-and-forth"
           renderIcon={NextOutline}
           kind='tertiary'
          >Bus & Rail
          </Button>
        </Link>
      </div>

 
  </>;

};

export default MotorbikePage;