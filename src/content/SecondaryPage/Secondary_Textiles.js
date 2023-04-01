import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setTextiles, setRangeTextilesFactor } from "../../redux/secondary";
import countryFactors from '../../countryFactors'

import { TextInput, Select, SelectItem } from '@carbon/react';

const SecondaryTextiles= () => {
  const {textiles, rangeTextiles, selectedCountrySecondary } = useSelector(
    (state) => state.secondary
  );
  const dispatch = useDispatch();

  const rangeOptions = Object.keys(countryFactors[selectedCountrySecondary].textilesRange);

  const handleTextilesChange = (e) => {
    dispatch(setTextiles(parseFloat(e.target.value)));
  };

  const handleRangeChange = (e) => {
    dispatch(setRangeTextilesFactor(e.target.value));
  };

  return (
    <>
        <section className="global-inputs-containers">
          <h5 className="global-input-description">Clothes, textiles and shoes:</h5>
          <TextInput
            id="heating-amount"
            value={textiles || ""}
            onChange={handleTextilesChange}
            labelText=""
            className="secondary-block-middle-form"
            size='lg'
          />
          <Select
            id="unit-heating-oil-select"
            defaultValue={rangeTextiles}
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

export default SecondaryTextiles;