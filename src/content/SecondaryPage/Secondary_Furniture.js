import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setFurniture, setRangeFurnitureFactor } from "../../redux/secondary";
import countryFactors from '../../countryFactors'
import { TextInput, Select, SelectItem } from '@carbon/react';

const SecondaryFurniture = () => {
  const { furniture, rangeFurniture, selectedCountrySecondary } = useSelector(
    (state) => state.secondary
  );
  const dispatch = useDispatch();

  const rangeOptions = Object.keys(countryFactors[selectedCountrySecondary].furnitureRange);

  const handleFurnitureChange = (e) => {
    dispatch(setFurniture(parseFloat(e.target.value)));
  };

  const handleRangeChange = (e) => {
    dispatch(setRangeFurnitureFactor(e.target.value));
  };

  return (
    <>
        <section className="global-inputs-containers">
          <h5 className="global-input-description">Furniture, manufactured goods:</h5>
          <TextInput
            id="furniture-amount"
            value={furniture || ""}
            onChange={handleFurnitureChange}
            labelText=""
            className="house-block-middle-form"
            size='lg'
          />
          <Select
            id="range-furniture-select"
            defaultValue={rangeFurniture}
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

export default SecondaryFurniture;
