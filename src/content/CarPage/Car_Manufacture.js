import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setRangePaperFactor } from "../../redux/secondary";
import countryFactors from '../../countryFactors'

import { Select, SelectItem } from '@carbon/react';

const SecondaryPaper = () => {
  const { rangePaper, selectedCountrySecondary } = useSelector(
    (state) => state.secondary
  );
  const dispatch = useDispatch();

  const rangeOptions = Object.keys(countryFactors[selectedCountrySecondary].paperRange);

  const handleRangeChange = (e) => {
    dispatch(setRangePaperFactor(e.target.value));
  };

  return (
    <>
        <section className="global-inputs-containers1">
          <h5 className="global-input-description"></h5>
     
          <Select
            id="range-paper-select"
            defaultValue={rangePaper}
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

export default SecondaryPaper;
