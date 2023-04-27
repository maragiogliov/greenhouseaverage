import React, { useState, useEffect, useRef } from 'react';
import './_landing-page.scss';

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

};
const LandingGreatings = () => {
  return <>
        <LanguageChanger />
    </>
};

export default LandingGreatings;
