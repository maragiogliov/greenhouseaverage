import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {  setRangePharmaceuticalsFactor } from "../../redux/secondary";
import countryFactors from '../../countryFactors'

import { Select, SelectItem } from '@carbon/react';

const SecondaryPharmaceuticals = () => {
  const { rangePharmaceuticals, selectedCountrySecondary } = useSelector(
    (state) => state.secondary
  );
  const dispatch = useDispatch();

  const rangeOptions = Object.keys(countryFactors[selectedCountrySecondary].waterRange);

  const handleRangeChange = (e) => {
    dispatch(setRangePharmaceuticalsFactor(e.target.value));
  };

  return (
    <>
        <section className="global-inputs-containers">
          <h5 className="secondary-input-description">Water:</h5>
          <Select
            id="pharmaceuticals-select"
            defaultValue={rangePharmaceuticals}
            onChange={handleRangeChange}
            labelText=""
            className="secondary-block-middle-form"
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

export default SecondaryPharmaceuticals;
