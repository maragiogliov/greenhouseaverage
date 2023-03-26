import React from 'react';
import {  useSelector } from "react-redux";

const BusRailTotalResult = () => {
  const { foodDrinksFootprint, pharmaceuticalsFootprint,textilesFootprint, paperFootprint,electronicsFootprint, furnitureFootprint, hotelsFootprint } = useSelector(
    (state) => state.secondary
  );
  const totalSecondaryFootprint = (parseFloat(foodDrinksFootprint) + parseFloat(pharmaceuticalsFootprint)+ parseFloat(textilesFootprint)+ parseFloat(paperFootprint)+ parseFloat(electronicsFootprint)+ parseFloat(furnitureFootprint)+ parseFloat(hotelsFootprint) ||  0);

  return <>
          <div className='car-results'>Calculated Car Footprint = <span style={{ marginLeft: '5px', marginRight: '5px' }}>{(totalSecondaryFootprint.toFixed(2))}</span> metric tons of CO2e</div>
  </>;
};

export default BusRailTotalResult;