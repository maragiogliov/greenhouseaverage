import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { 
  setCarResult,
  setCarFootprint,
  setShowCarResult 

 } from "../../redux/car";

import countryFactors from '../../countryFactors'

import { Button } from '@carbon/react';
import { Calculator } from '@carbon/react/icons';

const SecondaryFootprint = () => {
  const { 
    selectedCountryCar, 
    carMileage,
    carUnit,
    carType,
    carSize

  } = useSelector(
    (state) => state.car
  );
  const dispatch = useDispatch();
/////////////////////////////////////////////////
  const showFootprintResultsCar = () => {
    if (carMileage > 0) {
      dispatch(setShowCarResult (true));
    }
  };
/////////////////////////////////////////////////
  const calculateCarAndMotorbikeFootprint = () => {

    const calculateCarFootprint = () => {
      if (isNaN(parseFloat(carMileage))) {
        dispatch(setCarFootprint("Please enter a valid number."));
      } else {
        let total =
        parseFloat(carMileage) * 
        (countryFactors[selectedCountryCar].carMileageUnits[carUnit].car_mileage_factor) * (0.001)
        
        dispatch(setCarFootprint(total.toFixed(2)));
        showFootprintResultsCar();
      }
    };
    calculateCarFootprint();
  };
  /////////////////////////////////////////////////

  return <>  
    <Button 
        onClick={calculateCarAndMotorbikeFootprint} 
        className='car-calculate-footprint-button'
        > Calculate Car & Motorbike Footprint
       
        <Calculator className='car-calculator-icon' />
    </Button>
  </>
};

export default SecondaryFootprint;