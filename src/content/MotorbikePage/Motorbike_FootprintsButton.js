import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setMotorbikeFootprint, setShowMotorbikeResult } from "../../redux/motorbike";
import countryFactors from '../../countryFactors'
import { Button } from '@carbon/react';
import { Calculator } from '@carbon/react/icons';

const MotorbikeFootprint = () => {
  const {
    selectedCountryMotorbike, 
    motorbikeMileage,
    unitMotorbike,
    motorbikeSize,
    efficiencyMotorbike,
    efficiencyMotorbikeUnit

  } = useSelector(
    (state) => state.motorbike
  );
  const dispatch = useDispatch();


// In this function motorbikeMileage is being multiplied by the factor and also by the efficiency but once I try to select the motorbikeMotorSize stop working.

// I am disabling the input fields of efficiency when the user select a MotorSize
  const showFootprintResultsMotorbike = () => {
    console.log('efficiency factor', efficiencyMotorbike);
    console.log('efficiency unit', efficiencyMotorbikeUnit);
    
    if (
      isNaN(parseFloat(motorbikeMileage)) 
       //|| motorbikeSize === "-select type-" || !countryFactors[selectedCountryMotorbike].motorbikeMotorSize[motorbikeSize]
    ) {
      dispatch(setMotorbikeFootprint("Error, check your input"));
    } else {
      const efficiency = parseFloat(efficiencyMotorbike);
      let total = 
      parseFloat(motorbikeMileage) * 
      countryFactors[selectedCountryMotorbike].motorbikeMileageUnits[unitMotorbike].motorbikeMileage_factor * efficiency *
      //countryFactors[selectedCountryMotorbike].motorbikeMotorSize[motorbikeSize].motorbikeSize_factor * 
      0.001;

      dispatch (setMotorbikeFootprint(total.toFixed(2)));
      dispatch(setShowMotorbikeResult(true));
    };

  };

  return (
    <Button 
      onClick={showFootprintResultsMotorbike} 
      className='motorbike-calculate-footprint-button'
    >
      Calculate Motorbike Footprint
      <Calculator className='motorbike-calculator-icon' />
    </Button>
  );
}

export default MotorbikeFootprint;
