import React from 'react';
import './_house-page.scss'
import { useDispatch, useSelector } from "react-redux";
import { setElectricity, setUserElectricityFactor } from "../../redux/house";

import { TextInput } from '@carbon/react';
import countryFactors from '../../countryFactors'

const HouseElectricity = () => {
  const { selectedCountry, electricity, userElectricityFactor } = useSelector(
    (state) => state.house
  );
  const dispatch = useDispatch();

  const handleUserElectricityChange = (e) => {
    const factor = parseFloat(e.target.value);
    dispatch(setUserElectricityFactor(factor));
  };

  // function to handle input changes

  const handleElectricityChange = (e) => {
    dispatch(setElectricity(parseFloat(e.target.value)));
  };
 
  return <>  
        <section className='house-electricity-container'>
          <h5 className='global-input-description'>Electricity:</h5>
          <TextInput
              id="electricity-input"
              value={electricity || ""}
              onChange={handleElectricityChange}    
              labelText="Electricity in kWh"
              className='house-block-middle-form'
              size='lg'
          />
          <TextInput
            id="electricity-factor"
            labelText="at a factor of:"
            type="number"
            value={userElectricityFactor !== null 
            ? userElectricityFactor 
            : countryFactors[selectedCountry].electricity_factor || ""}
            onChange={handleUserElectricityChange}
            className='house-block-middle-form'
            size='lg'
          />
        </section>
  </>
};

export default HouseElectricity;