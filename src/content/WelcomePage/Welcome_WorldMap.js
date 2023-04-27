import React, { useState, useRef, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import mapData from "../../MapData.json";
import topCarbonEmittersPerCapita from "../../countryAverage";

function WorldMap() {
  const [tooltipContent, setTooltipContent] = useState("");
  console.log(topCarbonEmittersPerCapita);


  // Tooltip ref and positioning state
  const tooltipRef = useRef(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // Update tooltip position when the content changes
  useEffect(() => {
    if (tooltipRef.current) {
      const rect = tooltipRef.current.getBoundingClientRect();
      setTooltipPosition({
        x: rect.x + window.scrollX + rect.width / 2,
        y: rect.y + window.scrollY - rect.height - 10,
      });
    }
  }, [tooltipContent]);


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
