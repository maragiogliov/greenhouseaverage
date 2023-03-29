import React from 'react';
import { RadioButtonGroup, RadioButton } from 'carbon-components-react';

const SecondaryFoodDrinks = () => {

  return (
    <>
        <section className="flight-electricity-container2">
          <h5 className="global-input-description3"></h5>
          <RadioButtonGroup
            legendText=""
            name="radio-button-group"
            defaultSelected="radio-1"
            className="flight-block-middle-form-options"
            disabled={true}
            >
            <RadioButton
              labelText="Return trip"
              value="radio-1"
              id="radio-1"
            />
            <RadioButton
              labelText="One way flight"
              value="radio-2"
              id="radio-2"
            />
          </RadioButtonGroup>
        </section>
    </>
  );
};

export default SecondaryFoodDrinks;
