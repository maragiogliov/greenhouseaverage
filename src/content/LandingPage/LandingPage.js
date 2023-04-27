import React, { useState, useEffect, useRef } from 'react';
import './_landing-page.scss';
import { Link } from "react-router-dom";
import Button from '@carbon/react/lib/components/Button/Button';
import { NextOutline } from '@carbon/react/icons';
import { Tabs, TabList, Tab, TabPanels, TabPanel, Tile} from '@carbon/react';
import Waves from '../Waves';
import { SkeletonText } from '@carbon/react';
import { SkeletonPlaceholder } from '@carbon/react';
import LandingGreatings from './Landing_Greatings';

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowContent(true);

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
                height: '12px',
                borderRadius: '2px',
                marginLeft: '28px'
              }}
            />
          ) : (
            <a href="/" className='landing-little-title'>Getting Started</a>
          )}
          <h1 className='landing-title'>B2C Greenhouse Calculator</h1>
        </header>
     
        {isLoading ? (
        <SkeletonText
          style={{
            width: '300px',
            height: '16px',
            borderRadius: '2px',
            marginLeft: 'auto',
            marginRight: '16px',
            marginTop: '-2.5rem'
          }}
        />
        ) : (
          <TabList className={'landing-tablist'} aria-label="List of tabs">
            <Tab className={'landing-tab'}>About</Tab>
            <Tab className={'landing-tab'}>Design</Tab>
            <Tab className={'landing-tab'}>Tools</Tab>
          </TabList>
         )}

        <TabPanels>
          <TabPanel>
            <section className='landing-container'>
              <div className='landing-tabpanel-left'>
                {isLoading ? (
                        <SkeletonText
                          style={{
                            width: '150px',
                            height: '24px',
                            borderRadius: '2px',
                            marginLeft: '28px',
                            marginTop:'64px',
                          }}
                        />
                      ) : (
                  <h5 className='landing-title-question'>What is Greenhouse?</h5>
                  )}
                {isLoading ? (
                      <SkeletonText
                        style={{
                          width: '80%',
                          height: '124px',
                          borderRadius: '2px',
                          marginLeft: '28px',
                          marginTop:'24px',
                        }}
                      />
                    ) : (
                  <p className='landing-paragraph-question'>
                    Greenhouse the ultimate B2C solution for measuring carbon footprints. Our passionate team of researchers, developers, and designers from around the world have come together to develop a user-friendly carbon footprint measurement tool. Join us in our mission to create a more sustainable future for all.
                  </p>
                )}
                <Link
                    className="global-buttons-link-back-and-forth"
                    to="/welcome"
                  >
                {isLoading ? (
                      <SkeletonPlaceholder
                        style={{
                          width: '160px',
                          height: '49px',
                          borderRadius: '2px',
                          marginLeft: '28px',
                          marginTop:'40px',

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
                <LandingGreatings />
              </div>
            </section>
          </TabPanel>
        </TabPanels>
      </Tabs>   
    <section className='landing-footer-tiles'>
      
    {isLoading ? (
        <SkeletonPlaceholder
          style={{
            width: '25%',
            height: '500px',
            borderRadius: '2px',
          }}
        />
      ) : (
      <Tile light={false} id="tile-1" className={'landing-tile1'}>
              <h6 className="landing-tite-title" >The Principles</h6>
      </Tile>
    )}
         {isLoading ? (
                    <SkeletonPlaceholder
                    className={'landing-blocks-footer'}
                      style={{
                        width: '25%',
                        height: '500px',
                        borderRadius: '2px',
                      }}
                    />
                  ) : (
      <Tile light={false} id="tile-1" className={'landing-tile1'}>
              <h4 className='landing-tiles-questions'>Greenhouse is Awareness: </h4>
              <br />
              <p> Calculating your carbon footprint can increase your awareness of the impact your lifestyle choices have on the environment. This awareness can motivate you to make more sustainable choices in your day-to-day life.</p>
      </Tile>
       )}
             {isLoading ? (
                    <SkeletonPlaceholder
                    className={'landing-blocks-footer'}
                      style={{
                        width: '25%',
                        height: '500px',
                        borderRadius: '2px',
                      }}
                    />
                  ) : (
      <Tile light={false} id="tile-1" className={'landing-tile1'}>
              <h4 className='landing-tiles-questions'>Greenhouse is Personal Responsibility: </h4>
              <br />
              <p> Calculating your carbon footprint can help you take personal responsibility for your carbon emissions. It can be easy to overlook the impact of our daily actions, but by quantifying our carbon footprint, we can take action to reduce it.</p>
      </Tile>
         )}
           {isLoading ? (
                    <SkeletonPlaceholder
                    className={'landing-blocks-footer'}
                      style={{
                        width: '25%',
                        height: '500px',
                        borderRadius: '2px',
                      }}
                    />
                  ) : (
      <Tile light={false} id="tile-1" className={'landing-tile1'}>
              <h4 className='landing-tiles-questions'>Greenhouse is Environmental Impact: </h4>
              <br />
              <p>Knowing your carbon footprint can help you understand how your actions contribute to climate change. By reducing your carbon footprint, you can make a positive impact on the environment and help mitigate the effects of climate change.</p>
      </Tile>
        )}
      </section>
        
       <Waves />
    </section>
  </>
};

export default LandingPage;

