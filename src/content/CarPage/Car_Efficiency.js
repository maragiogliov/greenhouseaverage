import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setHotels, setRangeHotelsFactor } from "../../redux/secondary";
import countryFactors from '../../countryFactors'
import { TextInput, Select, SelectItem } from '@carbon/react';

const SecondaryHotels = () => {
  const { hotels, rangeHotels, selectedCountrySecondary } = useSelector(
    (state) => state.secondary
  );
  const dispatch = useDispatch();

  const rangeOptions = Object.keys(countryFactors[selectedCountrySecondary].hotelsRange);

  const handleHotelsChange = (e) => {
    dispatch(setHotels(parseFloat(e.target.value)));
  };

  const handleRangeChange = (e) => {
    dispatch(setRangeHotelsFactor(e.target.value));
  };

  return (
    <>
        <section className="global-inputs-containers">
          <h5 className="global-input-description">Or, enter efficiency</h5>
          <TextInput
            id="hotels-amount"
            value={hotels || ""}
            onChange={handleHotelsChange}
            labelText=""
            className="car-block-middle-form-efficiency-1"
            size='lg'
          />
          <Select
            id="hotels-select"
            defaultValue={rangeHotels}
            onChange={handleRangeChange}
            labelText=""
            className="car-block-middle-form-efficiency"
            size='lg'
          >
            {rangeOptions.map((range) => (
              <SelectItem key={range} value={range} text={range} />
            ))}
          </Select>
          <Select
            id="hotels-select"
            defaultValue={rangeHotels}
            onChange={handleRangeChange}
            labelText=""
            className="car-block-middle-form-efficiency"
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

export default SecondaryHotels;
