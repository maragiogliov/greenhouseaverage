import React, { useEffect } from 'react';
import {  useSelector, useDispatch } from "react-redux";
import { setSecondaryFootprint } from "../../redux/secondary";

const SecondaryTotalResult = () => {
  const dispatch = useDispatch();

  const { foodDrinksFootprint, pharmaceuticalsFootprint,textilesFootprint, paperFootprint,electronicsFootprint, furnitureFootprint, hotelsFootprint } = useSelector(
    (state) => state.secondary
  );
  const totalSecondaryFootprint = (parseFloat(foodDrinksFootprint) + parseFloat(pharmaceuticalsFootprint)+ parseFloat(textilesFootprint)+ parseFloat(paperFootprint)+ parseFloat(electronicsFootprint)+ parseFloat(furnitureFootprint)+ parseFloat(hotelsFootprint) ||  0);

  useEffect(() => {
    dispatch(setSecondaryFootprint(totalSecondaryFootprint));
  }, [totalSecondaryFootprint,  dispatch]);

  return <>
          <div className='secondary-results'> Consumption Footprint = <span style={{ marginLeft: '5px', marginRight: '5px' }}>{(totalSecondaryFootprint.toFixed(2))}</span> Kg of CO2e</div>
  </>;
};

export default SecondaryTotalResult;