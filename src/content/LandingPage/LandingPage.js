import React from 'react';
import './_landing-page.scss'
import { Link } from "react-router-dom";
import Button from '@carbon/react/lib/components/Button/Button';
import { NextOutline } from '@carbon/react/icons';
import { Tabs, TabList, Tab, TabPanels, TabPanel, Tile} from '@carbon/react';

import Waves from '../Waves'


const LandingPage = () => {
  return <>
    <section className='main-container'>
      <Tabs>
      <header className='landing-header'>
        <a href="/" className='landing-little-title'>Getting Started</a>
        
        <h1 className='landing-title'>B2C Carbon Footprint Calculator</h1>
      </header>
        <TabList className={'landing-tablist'} aria-label="List of tabs">
          <Tab className={'landing-tab'}>About</Tab>
          <Tab className={'landing-tab'}>Design</Tab>
          <Tab className={'landing-tab'}>Develop</Tab>
        </TabList>
        <Link className='global-buttons-link-back-and-forth' to="/welcome">
              <Button 
              className="global-re-styled-button-back-and-forth"
              renderIcon={NextOutline}
              kind='tertiary'
              >Get Started
              </Button>
            </Link>
        <TabPanels>
          <TabPanel className={'landing-tabpanel'}>Tab Panel 1</TabPanel>
          <TabPanel className={'landing-tabpanel'}>Tab Panel 2</TabPanel>
          <TabPanel className={'landing-tabpanel'}>Tab Panel 3</TabPanel>
        </TabPanels>
      </Tabs>   
      <section className='landing-footer-tiles'>

      <Tile light={false} id="tile-1" className={'landing-tile'}>
              <h6>The Principles</h6>
      </Tile>
      <Tile light={false} id="tile-1" className={'landing-tile'}>
              <h4>GC is Awareness: </h4>
              <br />
              <p> Calculating your carbon footprint can increase your awareness of the impact your lifestyle choices have on the environment. This awareness can motivate you to make more sustainable choices in your day-to-day life.</p>
      </Tile>
      <Tile light={false} id="tile-1" className={'landing-tile'}>
              <h4>GC is Personal Responsibility: </h4>
              <br />
              <p> Calculating your carbon footprint can help you take personal responsibility for your carbon emissions. It can be easy to overlook the impact of our daily actions, but by quantifying our carbon footprint, we can take action to reduce it.</p>
      </Tile>
      <Tile light={false} id="tile-1" className={'landing-tile'}>
              <h4>GC is Environmental Impact: </h4>
              <br />
              <p>Knowing your carbon footprint can help you understand how your actions contribute to climate change. By reducing your carbon footprint, you can make a positive impact on the environment and help mitigate the effects of climate change.</p>
      </Tile>
      </section>
        
       <Waves />
   

   
    </section>
          </>
};

export default LandingPage;

