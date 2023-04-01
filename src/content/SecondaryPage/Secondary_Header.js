import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNumPeople } from '../../redux/house';
import { TextInput} from '@carbon/react';

const SecondaryNumberOfPeople = () => {
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

           <div className='secondary-header-container' >
           <p>Choose Your Currency </p>
            <TextInput
                id="people-select"
                labelText=""
                value={numPeople}
                onChange={handleNumPeopleChange}
                className='secondary-number-people'
                size='lg'
              />
           </div>
      
  </>;
};

export default SecondaryNumberOfPeople;
