import React from 'react';
import { useSelector } from "react-redux";
import countryFactors from '../../countryFactors'
import { Tabs, Tab, TabList } from '@carbon/react';

const SecondaryPharmaceuticals = () => {
  const { selectedCountrySecondary } = useSelector(
    (state) => state.secondary
  );

  const waterFactor = countryFactors[selectedCountrySecondary].waterRange.year.water_factor;
  const flagIcon = countryFactors[selectedCountrySecondary].flag_icon;

  return (
    <>
      <section className="global-inputs-containers">
        <h5 className="secondary-input-description">Water:</h5>
        <Tabs >
          <TabList aria-label="List of tabs"  style={{width: '100%'}}>
            <Tab  className='secondary-tab-water'>{waterFactor} kg of CO2/inh {flagIcon}</Tab>
          </TabList>
        </Tabs>
      </section>
    </>
  );
};
export default SecondaryPharmaceuticals;
