import React from 'react';
import './_secondary-page.scss';

import { Button } from '@carbon/react';
import { Link } from 'react-router-dom';
import { NextOutline, PreviousOutline } from '@carbon/react/icons';

import IconsNavigation from '../IconsNavigation/IconsNavigation';
import SecondaryHeader from './Secondary_Header';

import SecondaryFoodDrinks from './Secondary_FoodDrinks';
import SecondaryPharmaceuticals from './Secondary_Pharmaceuticals';
import SecondaryTextiles from './Secondary_Textiles'
import SecondaryPaper from './Secondary_Paper'
import SecondaryElectronics from './Secondary_Electronics'
import SecondaryFurniture from './Secondary_Furniture'
import SecondaryHotels from './Secondary_Hotels';
import SecondaryTotalResults from './Secondary_TotalResults'

import SecondaryFootprintsButton from './Secondary_FootprintsButton'
import SecondaryIndividualResults from './Secondary_IndividualResults';
import Waves from '../Waves'



const SecondaryPage = () => {


  return <>
              <IconsNavigation />
        
    <section className='global-frame-calculator'>
      {/* ------------------------------------------------------------------- */}
          <div className='global-block-top'>
              <h4>Secondary</h4>
          </div>
      {/* ------------------------------------------------------------------- */}
        <SecondaryHeader/>
        <section className='secondary-inputs-results-container'>
          <div className='secondary-right-block-inputs'>
              <div className='secondary-inputs-container'>
                <SecondaryFoodDrinks />
                <SecondaryPharmaceuticals />
                <SecondaryTextiles />
                <SecondaryPaper /> 
                <SecondaryElectronics />
                <SecondaryFurniture />
                <SecondaryHotels />
              </div>
              <div className='secondary-calculate-button-container'>
                <SecondaryFootprintsButton />
              </div>
          </div>
          <div className='secondary-left-block-results'>
            <div className='secondary-results-big-container'>
            <SecondaryIndividualResults />
            </div>
            <SecondaryTotalResults />
          </div>
        </section>
      {/* ------------------------------------------------------------------- */}
    </section>
      <Waves />
      <div className='global-block-bottom'>
        <Link className='global-buttons-link-back-and-forth' to="/bus-rail">
          <Button 
          renderIcon={PreviousOutline}
           className="global-re-styled-button-back-and-forth"
           kind='tertiary'
          >Bus & Rail
          </Button>
        </Link>
        <Link className='global-buttons-link-back-and-forth' to="/results">
          <Button 
           className="global-re-styled-button-back-and-forth"
           renderIcon={NextOutline}
           kind='tertiary'
          >Results
          </Button>
        </Link>
      </div>
  </>;
};

export default SecondaryPage;