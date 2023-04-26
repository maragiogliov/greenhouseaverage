import React from 'react';
import { DonutChart } from '@carbon/charts-react';
import topCarbonEmittersPerCapita from '../../countryAverage';

const WorldAverage = () => {

  // Define the data for the donut chart
  const data = Object.entries(topCarbonEmittersPerCapita).map(([country, emissions]) => ({
    group: country,
    value: emissions,
  }));

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
      <div>
        <DonutChart data={data} options={options} />
      </div>
    </>
  );
};

export default WorldAverage;
