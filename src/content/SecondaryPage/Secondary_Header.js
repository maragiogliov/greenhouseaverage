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
        <section >
       
          </section>

          <section className='secondary-header-container'>
           <div className='secondary-header-container-left' >
           <p>Choose Your Currency </p>
            <TextInput
                id="people-select"
                labelText=""
                value={numPeople}
                onChange={handleNumPeopleChange}
                className='house-number-people'
                size='lg'
              />
           </div>
           <div className='secondary-header-container-center' >
            Secondary Results
           </div>
           <div className='secondary-header-container-right' >
            Secondary Data Visualization
           </div>
          </section>
      
  </>;
};

export default HouseNumberOfPeople;
