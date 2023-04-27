import React, { useState, useEffect, useRef } from 'react';
import './_landing-page.scss';
import { Link } from "react-router-dom";
import Button from '@carbon/react/lib/components/Button/Button';
import { NextOutline } from '@carbon/react/icons';
import { Tabs, TabList, Tab, TabPanels, TabPanel, Tile} from '@carbon/react';
import Waves from '../Waves';
import { SkeletonText } from '@carbon/react';
import { SkeletonPlaceholder } from '@carbon/react';



// Define an array of 12 different languages
const languages = [  
  "Hello",
  "Hola",
  "Bonjour",
  "Hallo",
  "Ciao",
  "こんにちは",
  "안녕하세요",
  "你好",
  "Olá",
  "Привет",
  "Hej",
  "Merhaba"
];

// Language changer component
const LanguageChanger = () => {
  console.log ()
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const helloHeadingRef = useRef(null);

  // Define a function to change the hello text with a 1 second transition
  function changeHelloText(text) {
    helloHeadingRef.current.style.transition = '1s';
    helloHeadingRef.current.textContent = text;
  }

  // Use the useEffect hook to update the hello text every second
  useEffect(() => {
    const interval = setInterval(() => {
      changeHelloText(` ${languages[currentLanguageIndex]}!`);
      setCurrentLanguageIndex((currentLanguageIndex + 1) % languages.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentLanguageIndex]);

  return <div ref={helloHeadingRef} style={{ fontSize: '26px' }}>

</div>

;
};
const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  
  return <>
    <section className='landing-main-container'>
      <Tabs>
      <header className='landing-header'>
      {isLoading ? (
                    <SkeletonText
                      style={{
                        width: '100px',
                        height: '20px',
                        borderRadius: '2px',
                        marginLeft: '28px'
                      }}
                    />
                  ) : (
        <a href="/" className='landing-little-title'>Getting Started</a>
        )}
        <h1 className='landing-title'>B2C Greenhouse Calculator</h1>
      </header>
     
        <TabList className={'landing-tablist'} aria-label="List of tabs">
          <Tab className={'landing-tab'}>About</Tab>
          <Tab className={'landing-tab'}>Design</Tab>
          <Tab className={'landing-tab'}>Tools</Tab>
        </TabList>
         
      
        <TabPanels>
        <TabPanel>
          
            <section className='landing-container'>

            <div className='landing-tabpanel-left'>
              <h5 className='landing-title-question'>What is Greenhouse?</h5>
              <p className='landing-paragraph-question'>
             Greenhouse the ultimate B2C solution for measuring carbon footprints. Our passionate team of researchers, developers, and designers from around the world have come together to develop a user-friendly carbon footprint measurement tool. Join us in our mission to create a more sustainable future for all.
              </p>
              <Link
                  className="global-buttons-link-back-and-forth"
                  to="/welcome"
                >
                  {isLoading ? (
                    <SkeletonPlaceholder
                      style={{
                        width: '160px',
                        height: '40px',
                        borderRadius: '2px',
                        marginLeft: '28px'
                      }}
                    />
                  ) : (
                    <Button
                      className="landing-button"
                      renderIcon={NextOutline}
                      kind="tertiary"
                    >
                      Get Started
                    </Button>
                  )}
                </Link>
            </div>

            <div className='landing-tabpanel-right'>
            <LanguageChanger />
            </div>
            </section>
            
      
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>   
    <section className='landing-footer-tiles'>

      <Tile light={false} id="tile-1" className={'landing-tile1'}>
              <h6 className="landing-tite-title" >The Principles</h6>
      </Tile>
      <Tile light={false} id="tile-1" className={'landing-tile1'}>
              <h4 className='landing-tiles-questions'>Greenhouse is Awareness: </h4>
              <br />
              <p> Calculating your carbon footprint can increase your awareness of the impact your lifestyle choices have on the environment. This awareness can motivate you to make more sustainable choices in your day-to-day life.</p>
      </Tile>
      <Tile light={false} id="tile-1" className={'landing-tile1'}>
              <h4 className='landing-tiles-questions'>Greenhouse is Personal Responsibility: </h4>
              <br />
              <p> Calculating your carbon footprint can help you take personal responsibility for your carbon emissions. It can be easy to overlook the impact of our daily actions, but by quantifying our carbon footprint, we can take action to reduce it.</p>
      </Tile>
      <Tile light={false} id="tile-1" className={'landing-tile1'}>
              <h4 className='landing-tiles-questions'>Greenhouse is Environmental Impact: </h4>
              <br />
              <p>Knowing your carbon footprint can help you understand how your actions contribute to climate change. By reducing your carbon footprint, you can make a positive impact on the environment and help mitigate the effects of climate change.</p>
      </Tile>
      </section>
        
       <Waves />
   

   
    </section>
          </>
};

export default LandingPage;

