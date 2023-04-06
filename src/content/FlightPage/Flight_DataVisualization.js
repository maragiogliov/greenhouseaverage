import React from 'react';
import { useSelector } from 'react-redux';
import { DonutChart } from '@carbon/charts-react';

const HouseElectricity = () => {
  const {
    flightFootprint,
  
  } = useSelector((state) => state.flights);

  const totalFlightFootprint = (parseFloat( flightFootprint) || 0);


  // Define the data for the donut chart
  const data = [
    {
      group: 'Flight',
      value: totalFlightFootprint,
    },
  ];

  // Define the options for the donut chart
  const options = {
    "title": "",
    "resizable": true,
    "legend": {
      "alignment": "center"
    },
    "donut": {
      "center": {
        "label": "Kg of CO2e"
      },
      "precision": 2,
      "alignment": "center"
    },
    "height": "360px",
  }

  return (
    <>
      <DonutChart data={data} options={options} />
     
    </>
  );
};

export default HouseElectricity;

