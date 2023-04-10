import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { 
  setFoodDietFootprint, 
  setShowFoodDietResult
 } from "../../redux/secondary";

import countryFactors from '../../countryFactors'

import { Button } from '@carbon/react';
import { Calculator } from '@carbon/react/icons';

const SecondaryFootprint = () => {
  const {  
    foodDiet

  } = useSelector(
    (state) => state.secondary
  );
  const dispatch = useDispatch();

  const showFootprintResultsFoodDiet = () => {
    if (foodDiet > 0) {
      dispatch(setShowFoodDietResult(true));
    }
  };

const calculateFoodDietFootprint = () => {
  if (
    isNaN(parseFloat(foodDiet))
  ) {
    dispatch(setFoodDietFootprint("Please enter a valid number."));
  } else {
    let total = countryFactors.foodDietRange[foodDiet].foodDiet_factor + 5;

    dispatch(setFoodDietFootprint(total));
  }
  showFootprintResultsFoodDiet()
};

  return <>  
    <Button 
        onClick={calculateFoodDietFootprint} 
        className='secondary-calculate-footprint-button'
        > Calculate Household Consumption Footprint
       
        <Calculator className='secondary-calculator-icon' />
    </Button>
  </>
};

export default SecondaryFootprint;