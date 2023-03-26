import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setFoodDrinks, setRangeFoodDrinksFactor } from "../../redux/secondary";
import countryFactors from '../../countryFactors'

import { TextInput, Select, SelectItem } from '@carbon/react';

const SecondaryFoodDrinks = () => {
  const { foodDrinks, rangeFoodDrinks, selectedCountrySecondary } = useSelector(
    (state) => state.secondary
  );
  const dispatch = useDispatch();

  const rangeOptions = Object.keys(countryFactors[selectedCountrySecondary].foodDrinksRange);

  const handleFoodDrinksChange = (e) => {
    dispatch(setFoodDrinks(parseFloat(e.target.value)));
  };

  const handleRangeChange = (e) => {
    dispatch(setRangeFoodDrinksFactor(e.target.value));
  };

  return (
    <>
        <section className="secondary-electricity-container">
          <h5 className="global-input-description">Food & Drinks:</h5>
          <TextInput
            id="foodDrinks-amount"
            value={foodDrinks || ''}
            onChange={handleFoodDrinksChange}
            labelText=""
            className="secondary-block-middle-form"
            size='lg'
          />

          <Select
            id="range-foodDrinks-select"
            defaultValue={rangeFoodDrinks}
            onChange={handleRangeChange}
            labelText=""
            className="secondary-block-middle-form"
            size='lg'
          >
            {rangeOptions.map((unit) => (
              <SelectItem key={unit} value={unit} text={unit} />
            ))}
          </Select>
        </section>
    </>
  );
};

export default SecondaryFoodDrinks;
