import React from 'react';
import { DonutChart } from '@carbon/charts-react';
import topCarbonEmittersPerCapita from '../../countryAverage';

const WorldAverage = () => {
  const theme = {
    background: '#FFFFFF',
    colors: {
      interactive01: '#003B5C',
      interactive02: '#054ADA',
      text01: '#003B5C',
    },
  };
  // Define the data for the donut chart
  const data = Object.entries(topCarbonEmittersPerCapita).map(([country, emissions]) => ({
    group: country,
    value: emissions,
  }));

  // Define the options for the donut chart
  const options = {
    "title": "Carbon Emissions per Capita by Country",
    "resizable": true,
    "legend": {
      "alignment": "center"
    },
    "donut": {
      "center": {
        "label": "Tonnes of CO2e per year"
      },
      "precision": 2,
      "alignment": "center"
    },
    "height": "600px",
    
  }

  return (
    <>
      <div>
        <DonutChart data={data} options={options}  />
      </div>
    </>
  );
};

export default WorldAverage;
