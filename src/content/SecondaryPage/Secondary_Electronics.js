import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setElectronics, setRangeElectronicsFactor } from "../../redux/secondary";
import countryFactors from '../../countryFactors'

import { TextInput, Select, SelectItem } from '@carbon/react';

const SecondaryElectronics = () => {
const { electronics, rangeElectronics, selectedCountrySecondary } = useSelector(
(state) => state.secondary
);
const dispatch = useDispatch();

const rangeOptions = Object.keys(countryFactors[selectedCountrySecondary].electronicsRange);

const handleElectronicsChange = (e) => {
dispatch(setElectronics(parseFloat(e.target.value)));
};

const handleRangeChange = (e) => {
dispatch(setRangeElectronicsFactor(e.target.value));
};

return (
<>
<section className="global-inputs-containers">
<h5 className="global-input-description">Computers and IT equipment:</h5>
<TextInput
id="electronics-amount"
value={electronics || ""}
onChange={handleElectronicsChange}
labelText=""
className="house-block-middle-form"
size='lg'
/>
<Select
id="range-Electronics-select"
defaultValue={rangeElectronics}
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

export default SecondaryElectronics;