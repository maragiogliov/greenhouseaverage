import React from 'react';
import { TreemapChart } from '@carbon/charts-react';

import topCarbonEmittersPerCapita from '../../countryAverage';

const WorldAverage = () => {

  // Define the data for the treemap chart
  const treemapChartData = Object.entries(topCarbonEmittersPerCapita).map(([country, emissions]) => ({
    name: country,
    children: [
      {
        name: 'Emissions',
        value: emissions,
      },
    ],
  }));

  const treemapOptions = {
    title: 'Countries with the top 30 carbon emissions per capita',
    height: '400px',
  };

  return (
    <>
   
      <TreemapChart data={treemapChartData} options={treemapOptions} />
    </>
  );
};

export default WorldAverage;
