import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {  setRangeHotelsFactor } from "../../redux/secondary";
import { Select, SelectItem } from '@carbon/react';

const SecondaryHotels = () => {
  const {  rangeHotels } = useSelector(
    (state) => state.secondary
  );
  const dispatch = useDispatch();

  const handleRangeChange = (e) => {
    dispatch(setRangeHotelsFactor(e.target.value));
  };

  return (
    <>
        <section className="flight-inputs-containers1">
          <h5 className="global-input-description">Luggage</h5>
        
          <Select
            id="hotels-select"
            defaultValue={rangeHotels}
            onChange={handleRangeChange}
            labelText=""
            className="flight-block-middle-form"
            size='lg'
            disabled={true}
          >
            <SelectItem value="small" text="Small" />
            <SelectItem value="medium" text="Medium" />
            <SelectItem value="large" text="Large" />

          </Select>

        </section>
    </>
  );
};

export default SecondaryHotels;
