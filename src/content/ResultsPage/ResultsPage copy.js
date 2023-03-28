import React from 'react';
import {  useSelector } from "react-redux";
import './_results-page.scss';
import CarHeader from './Car_Header';
import CarFootprintsButton from './Car_FootprintsButton'
import ResultTotalResults from './Results_TotalResults'


import IconsNavigation from '../IconsNavigation/IconsNavigation';
import { Button } from '@carbon/react';
import { Link } from 'react-router-dom';
import { NextOutline, PreviousOutline } from '@carbon/react/icons';
import { DonutChart } from "@carbon/charts-react";
import { Checkbox } from '@carbon/react';
import "@carbon/charts/styles.css";
import Waves from '../Waves'


const ResultsPage = () => {
  const { electricityFootprint, naturalGasFootprint,heatingOilFootprint, coalFootprint,LPGFootprint, propaneFootprint, woodenPelletsFootprint } = useSelector(
    (state) => state.house
  );
  const totalHouseFootprint = 
    (
      parseFloat(electricityFootprint)+ 
      parseFloat(naturalGasFootprint)+ 
      parseFloat(heatingOilFootprint)+ 
      parseFloat(coalFootprint)+ 
      parseFloat(LPGFootprint)+ 
      parseFloat(propaneFootprint)+ 
      parseFloat(woodenPelletsFootprint)
    ||  0);

  const { motorbikeFootprint } = useSelector(
    (state) => state.motorbike
  );
  const totalMotorbikeFootprint = 
    (
      parseFloat(motorbikeFootprint) 
  
    ||  0);

  const { busFootprint, coachFootprint,localTrainFootprint,longTrainFootprint,tramFootprint,subwayFootprint, taxiFootprint } = useSelector(
    (state) => state.busrail
  );
  const totalBusRailFootprint = 
    (
      parseFloat(busFootprint) + 
      parseFloat(coachFootprint)+ 
      parseFloat(localTrainFootprint)+ 
      parseFloat(longTrainFootprint)+ 
      parseFloat(tramFootprint)+ 
      parseFloat(subwayFootprint)+ 
      parseFloat(taxiFootprint) 
    ||  0);

  const { foodDrinksFootprint, pharmaceuticalsFootprint,textilesFootprint, paperFootprint,electronicsFootprint, furnitureFootprint, hotelsFootprint } = useSelector(
    (state) => state.secondary
  );
  const totalSecondaryFootprint = 
    (
      parseFloat(foodDrinksFootprint)+ 
      parseFloat(pharmaceuticalsFootprint)+ 
      parseFloat(textilesFootprint)+ 
      parseFloat(paperFootprint)+ 
      parseFloat(electronicsFootprint)+ 
      parseFloat(furnitureFootprint)+ 
      parseFloat(hotelsFootprint) 
    ||  0);
  
  const data = [
    {
      "group": "House",
      "value": totalHouseFootprint
    },
    {
      "group": "Flights",
      "value": 0
    },
    {
      "group": "Car",
      "value": 0
    },
    {
      "group": "Motorbike",
      "value": totalMotorbikeFootprint  
    },
    {
      "group": "Bus & Rail",
      "value": totalBusRailFootprint
    },
    {
      "group": "Secondary",
      "value": totalSecondaryFootprint
    }
  ];

  const options = {
    "title": "",
    "resizable": true,
    "legend": {
      "alignment": "center"
    },
    "donut": {
      "center": {
        "label": "Kg of CO2e"
      },
      "alignment": "center"
    },
    "height": "400px",

  }

  return ( <>
      
        <IconsNavigation />

        <section className='global-frame-calculator'>
          {/* ------------------------------------------------------------------- */}
              <div className='global-block-top'>
                  <h4>Results</h4>
              </div>
          {/* ------------------------------------------------------------------- */}
            <CarHeader/>
            <section className='car-inputs-results-container'>
              <div className='car-right-block-inputs'>
                  <div className='results-inputs-container'>
                  <fieldset className='results-fieldset-container'>
                    <legend ></legend>
                    <Checkbox labelText={`Household Energy (${totalHouseFootprint} Kg of CO2e)`} id="checkbox-label-1"  className="cbx" />

                    <Checkbox labelText={`Flights`} id="checkbox-label-2" className="cbx" />
                    <Checkbox labelText={`Car`} id="checkbox-label-3" className="cbx" />
                    <Checkbox labelText={`Motorbike (${totalMotorbikeFootprint} Kg of CO2e)`} id="checkbox-label-4" className="cbx" />
                    <Checkbox labelText={`Bus & Rail (${totalBusRailFootprint} Kg of CO2e)`} id="checkbox-label-5" className="cbx" />
                    <Checkbox labelText={`Secondary (${totalSecondaryFootprint} Kg of CO2e)`} id="checkbox-label-6" className="cbx" />
                  </fieldset>
                  </div>
                  <div className='car-calculate-button-container'>
                    <ResultTotalResults />
                  </div>
              </div>
              <div className='results-left-block-results'>
                
                  <DonutChart
                    data={data}
                    options={options}
                    className='donut-chart'
                  />
                  <div >
                    <CarFootprintsButton />
                  </div>
              </div>
            </section>
          {/* ------------------------------------------------------------------- */}
        </section>
      <Waves />
      <div className='global-block-bottom'>
          <Link className='global-buttons-link-back-and-forth' to="/secondary">
            <Button 
              className="global-re-styled-button-back-and-forth"
              renderIcon={PreviousOutline}
              kind='tertiary'
              >Secondary
            </Button>
          </Link>
          <Link className='global-buttons-link-back-and-forth' to="/welcome">
            <Button 
              renderIcon={NextOutline}
              className="global-re-styled-button-back-and-forth"
              kind='tertiary'
              >Start Again
            </Button>
          </Link>
        </div>
    </>
  );
};

export default ResultsPage;
