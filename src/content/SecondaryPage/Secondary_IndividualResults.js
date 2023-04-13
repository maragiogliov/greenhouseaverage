import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { 
  setShowFoodDietResult, 
  resetFoodDietFootprint,
  setShowWaterResult,
  resetWaterFootprint
} from "../../redux/secondary";
import { Button } from '@carbon/react';
import { TrashCan } from '@carbon/react/icons';

const SecondaryResults = () => {
  const {
    foodDietFootprint,
    showFoodDietResult,
    waterFootprint,
    showWaterResult,
  } = useSelector(
    (state) => state.secondary
  );
  const dispatch = useDispatch();

  const resetFootprintFoodDiet = () => {
    dispatch(resetFoodDietFootprint());
    dispatch(setShowFoodDietResult(false));
  };

  const resetFootprintWater = () => {
    dispatch(resetWaterFootprint());
    dispatch(setShowWaterResult(false));
  };

  return (
    <>  
      {showFoodDietResult && foodDietFootprint > 0 && (
        <section className='secondary-result-section'>
          <h5 className='secondary-results-container'>
            {foodDietFootprint} Kg of CO2 
          </h5>
          <Button
            kind='ghost'
            size='lg'
            className='secondary-result-trashcan-icon-container'
            onClick={resetFootprintFoodDiet} 
          >
            <TrashCan />
          </Button>
        </section>
      )}
      {showWaterResult && waterFootprint > 0 && (
        <section className='secondary-result-section'>
          <h5 className='secondary-results-container'>
            {waterFootprint} Kg of CO2 
          </h5>
          <Button
            kind='ghost'
            size='lg'
            className='secondary-result-trashcan-icon-container'
            onClick={resetFootprintWater} 
          >
            <TrashCan />
          </Button>
        </section>
      )}
    </>
  );
};

export default SecondaryResults;
