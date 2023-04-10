import React from 'react';
import { useSelector } from "react-redux";
import countryFactors from '../../countryFactors'
import { Tabs, Tab, TabList } from '@carbon/react';

const SecondaryPharmaceuticals = () => {
  const { selectedCountrySecondary } = useSelector(
    (state) => state.secondary
  );

  const waterFactor = countryFactors[selectedCountrySecondary].waterRange.year.water_factor;

  return (
    <>
      <section className="global-inputs-containers">
  <h5 className="secondary-input-description">Water:</h5>
  <Tabs className="secondary-block-middle-form">
    <TabList aria-label="List of tabs" className="secondary-block-middle-form-water">
    <Tab  className='secondary-tab-water'>{waterFactor} kg of CO2/inh</Tab>
    </TabList>
  </Tabs>
</section>







    </>
  );
};
export default SecondaryPharmaceuticals;
