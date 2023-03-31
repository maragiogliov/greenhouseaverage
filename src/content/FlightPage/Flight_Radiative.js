import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setRangeFurnitureFactor } from "../../redux/secondary";
import {  Select, SelectItem } from '@carbon/react';

const SecondaryFurniture = () => {
  const { rangeFurniture } = useSelector(
    (state) => state.secondary
  );
  const dispatch = useDispatch();


  const handleRangeChange = (e) => {
    dispatch(setRangeFurnitureFactor(e.target.value));
  };

  return (
    <>
        <section className="flight-inputs-containers1">
          <h5 className="global-input-description"> Radiative forcing ?</h5>
         
          <Select
            id="range-furniture-select"
            defaultValue={rangeFurniture}
            onChange={handleRangeChange}
            labelText=""
            className="flight-block-middle-form"
            size='lg'
            disabled={true}
          >
              <SelectItem value="no" text="No" />
              <SelectItem value="yes" text="Yes" />
      
          </Select>
        </section>
    </>
  );
};

export default SecondaryFurniture;
