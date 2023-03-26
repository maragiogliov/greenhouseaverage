import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setPharmaceuticals, setRangePharmaceuticalsFactor } from "../../redux/secondary";
import countryFactors from '../../countryFactors'

import {  Select, SelectItem } from '@carbon/react';

const SecondaryPharmaceuticals = () => {
  const { pharmaceuticals, rangePharmaceuticals, selectedCountrySecondary } = useSelector(
    (state) => state.secondary
  );
  const dispatch = useDispatch();

  const rangeOptions = Object.keys(countryFactors[selectedCountrySecondary].pharmaceuticalsRange);

  const handlePharmaceuticalsChange = (e) => {
    dispatch(setPharmaceuticals(parseFloat(e.target.value)));
  };

  const handleRangeChange = (e) => {
    dispatch(setRangePharmaceuticalsFactor(e.target.value));
  };

  return (
    <>
        <section className="global-inputs-containers1">
          <h5 className="global-input-description">Choose Vehicle:</h5>
       

          <Select
            id="pharmaceuticals-select"
            defaultValue={rangePharmaceuticals}
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

export default SecondaryPharmaceuticals;
