import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setFoodDiet } from "../../redux/secondary";
import countryFactors from '../../countryFactors'

import { Select, SelectItem } from '@carbon/react';

const SecondaryFoodDrinks = () => {
  const { foodDiet, selectedCountrySecondary } = useSelector(
    (state) => state.secondary
  );
  const dispatch = useDispatch();

  const rangeOptions = ["-select type-",
   ,...Object.keys(countryFactors[selectedCountrySecondary]?.foodDietRange || 0)
  ]

  const handleDietChange = (e) => {
    dispatch(setFoodDiet(e.target.value));
  };

  return (
    <>
        <section className="global-inputs-containers">
          <h5 className="secondary-input-description">Food & Diet:</h5>
          {console.log(foodDiet)}
       
          <Select
            id="range-foodDrinks-select"
            defaultValue={foodDiet}
            onChange={handleDietChange}
            labelText=""
            className="secondary-block-middle-form"
            size='lg'
          >
            {rangeOptions.map((unit) => (
              <SelectItem 
              key={unit} 
              value={unit} 
              text={countryFactors[selectedCountrySecondary]?.foodDietRange[unit]?.description || unit.charAt(0).toUpperCase() + unit.slice(1)}

              />
            ))}
          </Select>
        </section>
    </>
  );
};

export default SecondaryFoodDrinks;
