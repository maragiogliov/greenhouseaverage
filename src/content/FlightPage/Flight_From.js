import React, { useState } from 'react';
import './_flight-page.scss';
import { useDispatch } from 'react-redux';
import { setSelectedAirportFrom, setAirportFromLocation } from '../../redux/flights';
import { ComboBox } from 'carbon-components-react';
import airportsIATA from '../../airportsIATA';

const FlightFrom = () => {
    const [filteredAirportsFrom, setFilteredAirportsFrom] = useState(airportsIATA);
    const dispatch = useDispatch();

    const handleAirportSelectionFrom = (selectedItem) => {
      if (selectedItem && selectedItem.selectedItem) {
        const { lat, lon } = selectedItem.selectedItem;
        dispatch(setSelectedAirportFrom(selectedItem.selectedItem));
        dispatch(setAirportFromLocation({ lat, lon }));
        console.log('selected airport from:', selectedItem.selectedItem);
        console.log('latitude and longitude', lat, lon);
      }
    };

const handleInputChangeFrom = (inputValue) => {
    const filtered = airportsIATA.filter((airport) => {
        const airportString = `${airport?.name ?? ''} ${airport?.city ?? ''} ${airport?.country ?? ''}  ${airport?.code ?? ''}`;
        return airportString.toLowerCase().includes(inputValue.toLowerCase());
    });
    setFilteredAirportsFrom(filtered);
};

    return (
        <section className="flight-inputs-containers1">
            <h5 className="global-input-description">From:</h5>
            <ComboBox
                id="flight-from-select"
                items={filteredAirportsFrom}
                itemToString={(airport) => airport ? `${airport.name ?? ''} ${airport.city ?? ''} ${airport.country ?? ''}  ${airport.code ?? ''}` : ''}
                titleText=""
                placeholder='Choose an Airport'
                onChange={handleAirportSelectionFrom}
                onInputChange={handleInputChangeFrom}
                shouldFilterItem={() => true}
                className="flight-block-middle-form-combobox"
                size="lg"
                style={{ fontSize: '16px' }}
            />
        </section>
    );
};

export default FlightFrom;
