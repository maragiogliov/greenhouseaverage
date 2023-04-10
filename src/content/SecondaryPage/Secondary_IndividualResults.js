import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { 
    setShowFoodDrinksResult, 
    resetFoodDrinksFootprint

} from "../../redux/secondary";

import { Button } from '@carbon/react';
import { TrashCan } from '@carbon/react/icons';

const SecondaryResults = () => {
  const {

    foodDrinks,
    rangeFoodDrinks,
    foodDrinksFootprint,
    showFoodDrinksResult,
  

    } = useSelector(
    (state) => state.secondary
  );
  const dispatch = useDispatch();

  const resetFootprintFoodDrinks = () => {
    dispatch(resetFoodDrinksFootprint());
    dispatch(setShowFoodDrinksResult(false))
  };
  return <>  

    {showFoodDrinksResult && foodDrinks > 0 &&  (
        <section className='secondary-result-section'>
          <h5 
            className='secondary-results-container'>
            {foodDrinksFootprint} Kg:	{foodDrinks}  {rangeFoodDrinks} of Food & Diet
          </h5>
          <Button
            kind='ghost'
            size='lg'
            className='secondary-result-trashcan-icon-container'
            onClick={resetFootprintFoodDrinks} >
            <TrashCan />
          </Button>
        </section>
      )
    }

  </>
};

export default SecondaryResults;