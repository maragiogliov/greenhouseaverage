import React from 'react';
import { useDispatch, useSelector } from "react-redux";


import { 
  setFoodDrinksFootprint, 
  setShowFoodDrinksResult, 

  setPharmaceuticalsFootprint, 
  setShowPharmaceuticalsResult,

  setTextilesFootprint, 
  setShowTextilesResult,

  setPaperFootprint, 
  setShowPaperResult,

  setElectronicsFootprint, 
  setShowElectronicsResult,

  setFurnitureFootprint,
  setShowFurnitureResult,

  setHotelsFootprint, 
  setShowHotelsResult
 } from "../../redux/secondary";

import countryFactors from '../../countryFactors'

import { Button } from '@carbon/react';
import { Calculator } from '@carbon/react/icons';

const SecondaryFootprint = () => {
  const { 
    numPeople,
    selectedCountrySecondary, 

    foodDrinks,
    rangeFoodDrinks,

    pharmaceuticals, 
    rangePharmaceuticals,

    textiles, 
    rangeTextiles, 

    paper, 
    rangePaper,

    electronics, 
    rangeElectronics,

    furniture, 
    rangeFurniture,

    hotels, 
    rangeHotels
  
  } = useSelector(
    (state) => state.secondary
  );
  const dispatch = useDispatch();

  const showFootprintResultsFoodDrinks = () => {
    if (foodDrinks > 0) {
      dispatch(setShowFoodDrinksResult(true));
    }
  };
  const showFootprintResultsPharmaceuticals = () => {
    if (pharmaceuticals > 0){
      dispatch( setShowPharmaceuticalsResult(true));
    }
  };
  const showFootprintResultsTextiles = () => {
    if (textiles > 0){
      dispatch( setShowTextilesResult(true));
    }
  };
  const showFootprintResultsPaper = () => {
    if (paper > 0){
      dispatch( setShowPaperResult(true));
    }
  };
  const showFootprintResultsElectronics = () => {
    if (electronics > 0){
      dispatch( setShowElectronicsResult(true));
    }
  };
  const showFootprintResultsFurniture = () => {
    if (furniture > 0){
      dispatch( setShowFurnitureResult(true));
    }
  };
  const showFootprintResultsHotels = () => {
    if(hotels > 0){
      dispatch( setShowHotelsResult(true));
    }
  };

  const calculateAllHouseFootprint = () =>{

    const calculateFoodDrinksFootprint = () => {
      if (
        isNaN(parseFloat(foodDrinks))
      ) {
        dispatch(setFoodDrinksFootprint("Please enter a valid number."));
      } else {
        let total = (parseFloat(foodDrinks) / parseFloat(numPeople)) * (countryFactors[selectedCountrySecondary].foodDrinksRange[rangeFoodDrinks].foodDrinks_factor) * (0.001);
        dispatch(setFoodDrinksFootprint(total.toFixed(2)));
      }
      showFootprintResultsFoodDrinks()
    };


    const calculatePharmaceuticalsFootprint = () => {
      if (
        isNaN(parseFloat(pharmaceuticals))
      ) {
        dispatch(setPharmaceuticalsFootprint("Please enter a valid number."));
      } else {
        let total = (parseFloat(pharmaceuticals) / parseFloat(numPeople)) * (countryFactors[selectedCountrySecondary].pharmaceuticalsRange[rangePharmaceuticals].pharmaceuticals_factor) * (0.001);
        dispatch(setPharmaceuticalsFootprint(total.toFixed(2)));
      }
      showFootprintResultsPharmaceuticals()
    };


    const calculateTextilesFootprint = () => {
        if (
          isNaN(parseFloat(textiles))
        ) {
          dispatch(setTextilesFootprint("Please enter a valid number."));
        } else {
          let total = (parseFloat(textiles) / parseFloat(numPeople)) * (countryFactors[selectedCountrySecondary].textilesRange[rangeTextiles].textiles_factor) * (0.001);
          dispatch(setTextilesFootprint(total.toFixed(2)));
        }
        showFootprintResultsTextiles()
    };
    const calculatePaperFootprint = () => {
        if (
            isNaN(parseFloat(paper))
        ) {
            dispatch(setPaperFootprint("Please enter a valid number."));
        } else {
            let total = (parseFloat(paper) / parseFloat(numPeople)) * (countryFactors[selectedCountrySecondary].paperRange[rangePaper].paper_factor) * (0.001);
            dispatch(setPaperFootprint(total.toFixed(2)));
        }
        showFootprintResultsPaper()

    };
    const calculateElectronicsFootprint = () => {
        if (
        isNaN(parseFloat(electronics))
        ) {
        dispatch(setElectronicsFootprint("Please enter a valid number."));
        } else {
        let total = (parseFloat(electronics) / parseFloat(numPeople)) * (countryFactors[selectedCountrySecondary].electronicsRange[rangeElectronics].electronics_factor) * (0.001);
        dispatch(setElectronicsFootprint(total.toFixed(2)));
        }
        showFootprintResultsElectronics()

    };
    const calculateFurnitureFootprint = () => {
    if (
      isNaN(parseFloat(furniture))
    ) {
      dispatch(setFurnitureFootprint("Please enter a valid number."));
    } else {
      let total = (parseFloat(furniture) / parseFloat(numPeople)) * (countryFactors[selectedCountrySecondary].furnitureRange[rangeFurniture].furniture_factor) * (0.001);
      dispatch(setFurnitureFootprint(total.toFixed(2)));
    }
    showFootprintResultsFurniture()

    };
    const calculateHotelsFootprint = () => {
    if (
      isNaN(parseFloat(hotels))
    ) {
      dispatch(setHotelsFootprint("Please enter a valid number."));
    } else {
      let total = (parseFloat(hotels) / parseFloat(numPeople)) * (countryFactors[selectedCountrySecondary].hotelsRange[rangeHotels].hotels_factor) * (0.001);
      dispatch(setHotelsFootprint(total.toFixed(2)));
    }
    showFootprintResultsHotels()

    };
    calculateFoodDrinksFootprint();
    calculatePharmaceuticalsFootprint();
    calculateTextilesFootprint();
    calculatePaperFootprint();
    calculateElectronicsFootprint();
    calculateFurnitureFootprint();
    calculateHotelsFootprint();
}
  return <>  
    <Button 
        onClick={calculateAllHouseFootprint} 
        className='results-calculate-footprint-button'
        > Send Calculation To Email
    </Button>
  </>
};

export default SecondaryFootprint;