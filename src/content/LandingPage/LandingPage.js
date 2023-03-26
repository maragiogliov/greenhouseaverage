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
        <h1 className='landing-title'>Design & Build with Carbon</h1>
      </header>
        <TabList className={'landing-tablist'} aria-label="List of tabs">
          <Tab className={'landing-tab'}>About</Tab>
          <Tab className={'landing-tab'}>Design</Tab>
          <Tab className={'landing-tab'}>Develop</Tab>
        </TabList>
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
              <h4>Carbon is Open </h4>
              <br />
              <p>It's a distributed effort, guided by the principles of the open-source movement. Carbon's users are also it's makers, and everyone is encouraged to contribute.</p>
      </Tile>
      <Tile light={false} id="tile-1" className={'landing-tile'}>
              <h4>Carbon is Modular </h4>
              <br />
              <p>Carbon's modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly with each other, in whichever combination suits the needs of the user.</p>
      </Tile>
      <Tile light={false} id="tile-1" className={'landing-tile'}>
              <h4>Carbon is Consistent </h4>
              <br />
              <p>Based on the comprehensive IBM Design Language, every element and component of Carbon was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences.</p>
      </Tile>
      </section>
        
       <Waves />
   

      <div className='global-block-bottom'>
            <Link className='global-buttons-link-back-and-forth' to="/welcome">
              <Button 
              className="global-re-styled-button-back-and-forth"
              renderIcon={NextOutline}
              kind='tertiary'
              >Get Started
              </Button>
            </Link>
      </div>
    </section>
          </>
};

export default LandingPage;

