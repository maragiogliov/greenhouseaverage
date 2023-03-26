import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setRangeElectronicsFactor } from "../../redux/secondary";

import { Select, SelectItem } from '@carbon/react';

const SecondaryElectronics = () => {
const { rangeElectronics } = useSelector(
(state) => state.secondary
);
const dispatch = useDispatch();

const handleRangeChange = (e) => {
dispatch(setRangeElectronicsFactor(e.target.value));
};

return (
<>
<section className="global-inputs-containers1">
<h5 className="global-input-description">Trips:</h5>

<Select
id="range-Electronics-select"
defaultValue={rangeElectronics}
onChange={handleRangeChange}
labelText=""
className="flight-block-middle-form"
size='lg'
disabled={true}
> 
    <SelectItem value="one" text="1" />
    <SelectItem value="two" text="2" />
    <SelectItem value="three" text="3" />

</Select>
    </section>
</>
);
};

export default SecondaryElectronics;