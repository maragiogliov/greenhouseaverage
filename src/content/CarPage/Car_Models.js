import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setRangeElectronicsFactor } from "../../redux/secondary";
import countryFactors from '../../countryFactors'

import {  Select, SelectItem } from '@carbon/react';

const SecondaryElectronics = () => {
    const { rangeElectronics, selectedCountrySecondary } = useSelector(
    (state) => state.secondary
    );
    const dispatch = useDispatch();

    const rangeOptions = Object.keys(countryFactors[selectedCountrySecondary].electronicsRange);

    const handleRangeChange = (e) => {
    dispatch(setRangeElectronicsFactor(e.target.value));
    };
    return (
        <>
            <section className="global-inputs-containers1">
                <h5 className="global-input-description"></h5>

                <Select
                    id="range-Electronics-select"
                    defaultValue={rangeElectronics}
                    onChange={handleRangeChange}
                    labelText=""
                    className="car-block-middle-form"
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