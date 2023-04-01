import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { 
    setShowFoodDrinksResult, 
    resetFoodDrinksFootprint,
    
    setShowPharmaceuticalsResult,
    resetPharmaceuticalsFootprint,

    setShowTextilesResult,
    resetTextilesFootprint,

    setShowPaperResult,
    resetPaperFootprint,

    setShowElectronicsResult,
    resetElectronicsFootprint,

    setShowFurnitureResult,
    resetFurnitureFootprint,

    setShowHotelsResult,
    resetHotelsFootprint

} from "../../redux/secondary";

import { Button } from '@carbon/react';
import { TrashCan } from '@carbon/react/icons';

const SecondaryResults = () => {
  const {

    foodDrinks,
    rangeFoodDrinks,
    foodDrinksFootprint,
    showFoodDrinksResult,
    
    pharmaceuticals,
    rangePharmaceuticals,
    pharmaceuticalsFootprint,
    showPharmaceuticalsResult,

    textiles,
    rangeTextiles,
    textilesFootprint,
    showTextilesResult,

    paper,
    rangePaper,
    paperFootprint,
    showPaperResult,

    electronics,
    rangeElectronics,
    electronicsFootprint,
    showElectronicsResult,

    furniture,
    rangeFurniture,
    furnitureFootprint,
    showFurnitureResult,

    hotels,
    rangeHotels,
    hotelsFootprint,
    showHotelsResult

    } = useSelector(
    (state) => state.secondary
  );
  const dispatch = useDispatch();

  const resetFootprintFoodDrinks = () => {
    dispatch(resetFoodDrinksFootprint());
    dispatch(setShowFoodDrinksResult(false))
  };
  const resetFootprintPharmaceuticals = () => {
    dispatch(resetPharmaceuticalsFootprint());
    dispatch(setShowPharmaceuticalsResult(false))
  };
  const resetFootprintTextiles = () => {
    dispatch(resetTextilesFootprint());
    dispatch(setShowTextilesResult(false))
  };
  const resetFootprintPaper = () => {
    dispatch(resetPaperFootprint());
    dispatch(setShowPaperResult(false))
  };
  const resetFootprintElectronics = () => {
    dispatch(resetElectronicsFootprint());
    dispatch(setShowElectronicsResult(false))
  };
  const resetFootprintFurniture = () => {
    dispatch(resetFurnitureFootprint());
    dispatch(setShowFurnitureResult(false))
  };
  const resetFootprintHotels = () => {
    dispatch(resetHotelsFootprint());
    dispatch(setShowHotelsResult(false))
  };

  return <>  

    {showFoodDrinksResult && foodDrinks > 0 &&  (
        <section className='secondary-result-section'>
          <h5 
            className='secondary-results-container'>
            {foodDrinksFootprint} Kg:	{foodDrinks}  {rangeFoodDrinks} of Food & Drinks
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
    {showPharmaceuticalsResult && pharmaceuticals > 0 &&  (
        <section className='secondary-result-section'>
          <h5 
            className='secondary-results-container'>
            {pharmaceuticalsFootprint} Kg:	{pharmaceuticals}   {rangePharmaceuticals} of Pharmaceuticals
          </h5>
          <Button
            kind='ghost'
            size='md'
            className='secondary-result-trashcan-icon-container'
            onClick={resetFootprintPharmaceuticals} >
            <TrashCan />
          </Button>
        </section>
      )
    }
    {showTextilesResult && textiles > 0 &&  (
        <section className='secondary-result-section'>
          <h5 
            className='secondary-results-container'>
            {textilesFootprint} Kg:	{textiles}   {rangeTextiles} of Textiles
          </h5>
          <Button
            kind='ghost'
            size='md'
            className='secondary-result-trashcan-icon-container'
            onClick={resetFootprintTextiles} >
            <TrashCan />
          </Button>
        </section>
      )
    }
    {showPaperResult && paper > 0 &&  (
        <section className='secondary-result-section'>
          <h5 
            className='secondary-results-container'>
            {paperFootprint} Kg:	{paper}   {rangePaper} of Paper products
          </h5>
          <Button
            kind='ghost'
            size='md'
            className='secondary-result-trashcan-icon-container'
            onClick={resetFootprintPaper} >
            <TrashCan />
          </Button>
        </section>
      )
    }
    {showElectronicsResult && electronics > 0 &&  (
        <section className='secondary-result-section'>
          <h5 
            className='secondary-results-container'>
            {electronicsFootprint} Kg:	{electronics}   {rangeElectronics} of Electronics
          </h5>
          <Button
            kind='ghost'
            size='md'
            className='secondary-result-trashcan-icon-container'
            onClick={resetFootprintElectronics} >
            <TrashCan />
          </Button>
        </section>
      )
    }
    {showFurnitureResult && furniture > 0 &&  (
        <section className='secondary-result-section'>
          <h5 
            className='secondary-results-container'>
            {furnitureFootprint} Kg:	{furniture}   {rangeFurniture} of Furniture
          </h5>
          <Button
            kind='ghost'
            size='md'
            className='secondary-result-trashcan-icon-container'
            onClick={resetFootprintFurniture} >
            <TrashCan />
          </Button>
        </section>
      )
    }
    {showHotelsResult && hotels > 0 &&  (
        <section className='secondary-result-section'>
          <h5 
            className='secondary-results-container'>
            {hotelsFootprint} Kg:	{hotels}   {rangeHotels} of Hotels
          </h5>
          <Button
            kind='ghost'
            size='md'
            className='secondary-result-trashcan-icon-container'
            onClick={resetFootprintHotels} >
            <TrashCan />
          </Button>
        </section>
      )
    }
  </>
};

export default SecondaryResults;