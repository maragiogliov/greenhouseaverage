import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { 
  setFoodDrinksFootprint, 
  setShowFoodDrinksResult

 } from "../../redux/secondary";

import countryFactors from '../../countryFactors'

import { Button } from '@carbon/react';
import { Calculator } from '@carbon/react/icons';

const SecondaryFootprint = () => {
  const { 

    selectedCountrySecondary, 

    foodDrinks,
    rangeFoodDrinks,

  
  } = useSelector(
    (state) => state.secondary
  );
  const dispatch = useDispatch();

  const showFootprintResultsFoodDrinks = () => {
    if (foodDrinks > 0) {
      dispatch(setShowFoodDrinksResult(true));
    }
  };

  const calculateAllHouseFootprint = () =>{

    const calculateFoodDrinksFootprint = () => {
      if (
        isNaN(parseFloat(foodDrinks))
      ) {
        dispatch(setFoodDrinksFootprint("Please enter a valid number."));
      } else {
        let total = (countryFactors[selectedCountrySecondary].foodDietRange[rangeFoodDrinks].foodDrinks_factor);

        dispatch(setFoodDrinksFootprint(total));
      }
      showFootprintResultsFoodDrinks()
    };

    calculateFoodDrinksFootprint();

}
  return <>  
    <Button 
        onClick={calculateAllHouseFootprint} 
        className='secondary-calculate-footprint-button'
        > Calculate Household Consumption Footprint
       
        <Calculator className='secondary-calculator-icon' />
    </Button>
  </>
};

export default SecondaryFootprint;