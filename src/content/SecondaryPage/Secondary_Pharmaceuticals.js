import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setPharmaceuticals, setRangePharmaceuticalsFactor } from "../../redux/secondary";
import countryFactors from '../../countryFactors'

import { TextInput, Select, SelectItem } from '@carbon/react';

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
        <section className="global-inputs-containers">
          <h5 className="global-input-description">Water:</h5>
          <TextInput
            id="pharmaceuticals-amount"
            value={pharmaceuticals || ''}
            onChange={handlePharmaceuticalsChange}
            labelText=""
            className="house-block-middle-form"
            size='lg'
          />

          <Select
            id="pharmaceuticals-select"
            defaultValue={rangePharmaceuticals}
            onChange={handleRangeChange}
            labelText=""
            className="house-block-middle-form"
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
