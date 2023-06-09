import React from 'react';
import './_icons-navigation.scss';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

import { Home } from '@carbon/react/icons';
import { PlanePrivate } from '@carbon/react/icons';
import { Car } from '@carbon/react/icons';
import { Scooter } from '@carbon/react/icons';
import { Bus } from '@carbon/react/icons';
import { Add } from '@carbon/react/icons';
import { ChartLineData } from '@carbon/react/icons';
import { Earth } from '@carbon/react/icons';

    /* -------------------------------
  Imported the withRouter Higher-Order Component (HOC) from the react-router-dom library to get access to the current location object.

  Wrapped the IconsNavigation component with the withRouter HOC to gain access to the location prop.

  Added a class of 'active' to the Link element surrounding each icon when the current pathname matches the route of the icon.

  Used the class of 'active' to change the color of the icon to blue when the icon's corresponding route is active.

  Overall, these changes allow the icons to visually indicate which route the user is currently on and provides a clear way to navigate between different routes using icons.
  
  ------------------------------------ */

const IconsNavigation = ({location}) => {
  return <>
    {/* ------------------------------------------------------------------- */}
    <div className='progress-bar-container fixed-navigation'>
          <Link to="/welcome" className={location.pathname === '/welcome' ? 'active' : ''}>
              <Earth
                className={location.pathname === '/welcome' ? 'iconClass active' : 'iconClass'}
                size='32px'
              />
            </Link>
            <Link to="/house" className={location.pathname === '/house' ? 'active' : ''}>
              <Home
                className={location.pathname === '/house' ? 'iconClass active' : 'iconClass'}
                size='32px'
              />
            </Link>
            <Link to="/flight" className={location.pathname === '/flight' ? 'active' : ''}>
              <PlanePrivate
                className={location.pathname === '/flight' ? 'iconClass active' : 'iconClass'}
                size='32px'
              />
            </Link>
            <Link to="/car" className={location.pathname === '/car' ? 'active' : ''}>
              <Car
                className={location.pathname === '/car' ? 'iconClass active' : 'iconClass'}
                size='32px'
              />
            </Link>
              <Link to="/motorbike" className={location.pathname === '/motorbike' ? 'active' : ''}>
              <Scooter
                className={location.pathname === '/motorbike' ? 'iconClass active' : 'iconClass'}
                size='32px'
              />
            </Link>
              <Link to="/bus-rail" className={location.pathname === '/bus-rail' ? 'active' : ''}>
              <Bus
                className={location.pathname === '/bus-rail' ? 'iconClass active' : 'iconClass'}
                size='32px'
              />
            </Link>
              <Link to="/secondary" className={location.pathname === '/secondary' ? 'active' : ''}>
              <Add
                className={location.pathname === '/secondary' ? 'iconClass active' : 'iconClass'}
                size='32px'
              />
            </Link>
            <Link to="/results" className={location.pathname === '/results' ? 'active' : ''}>
              <ChartLineData
                className={location.pathname === '/results' ? 'iconClass active' : 'iconClass'}
                size='32px'
              />
            </Link>
        </div>
  </>;

};

export default withRouter(IconsNavigation);
