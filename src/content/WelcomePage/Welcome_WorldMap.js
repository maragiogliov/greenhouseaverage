import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import mapData from "../../MapData.json";
import topCarbonEmittersPerCapita from "../../countryAverage";

function WorldMap() {
  const [tooltipContent, setTooltipContent] = useState("");
  console.log(topCarbonEmittersPerCapita);

  return (
    <ComposableMap projection="geoMercator" projectionConfig={{ scale: 140 }}>
      <Geographies geography={mapData}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const { NAME } = geo.properties;
            const emissions = topCarbonEmittersPerCapita[NAME];
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  setTooltipContent(`${NAME}: ${emissions}`);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                style={{
                  default: {
                    fill: emissions ? `rgba(255, 0, 0, ${emissions / 40})` : "#D6D6DA",
                    outline: "none",
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                  },
                }}
              />
            )
          })
        }
      </Geographies>
    </ComposableMap>
  );
}

export default WorldMap;
