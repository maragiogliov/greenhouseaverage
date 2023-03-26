import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {  setRangeFurnitureFactor } from "../../redux/secondary";
import countryFactors from '../../countryFactors'
import { Select, SelectItem } from '@carbon/react';

const SecondaryFurniture = () => {
  const { rangeFurniture, selectedCountrySecondary } = useSelector(
    (state) => state.secondary
  );
  const dispatch = useDispatch();

  const rangeOptions = Object.keys(countryFactors[selectedCountrySecondary].furnitureRange);

  const handleRangeChange = (e) => {
    dispatch(setRangeFurnitureFactor(e.target.value));
  };

  return (
    <>
        <section className="car-inputs-containers">
          <h5 className="global-input-description"></h5>
    
          <Select
            id="range-furniture-select"
            defaultValue={rangeFurniture}
            onChange={handleRangeChange}
            labelText=""
            className="car-block-middle-form"
            size='lg'
          >
            {rangeOptions.map((range) => (
              <SelectItem key={range} value={range} text={range} />
            ))}
          </Select>
        </section>
    </>
  );
};

export default SecondaryFurniture;
