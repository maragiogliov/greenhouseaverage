import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNumPeople } from '../../redux/house';
import { TextInput} from '@carbon/react';

const HouseNumberOfPeople = () => {
  // Access the userElectricityFactor state from the store using useSelector
  const numPeople = useSelector(state => state.house.numPeople);

  // Dispatch the setUserElectricityFactor action using useDispatch
  const dispatch = useDispatch();

  const handleNumPeopleChange = (e) => {
    // Dispatch the setNumPeople action with the updated number of people
    dispatch(setNumPeople(e.target.value));
  }
  return <>
       
        <div className='house-header-container' >
        <p>House Energy Results</p>
      
        </div>
      
  </>;
};

export default HouseNumberOfPeople;
