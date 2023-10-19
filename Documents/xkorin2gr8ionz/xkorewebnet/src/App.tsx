import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import MainContainer from './components/MainContainer';
import InContentAd from './components/InContentAd';
import PopupAd from './components/PopupAd';
import Footer from './components/Footer';

const App: React.FC = () => {
  // State to control the display of the popup ad
  const [showPopupAd, setShowPopupAd] = useState(false);

  // Use useEffect to trigger the popup ad after a certain amount of time or user interaction
  useEffect(() => {
    // Define your logic for showing the popup ad here
  
  }, []);

  return (
    <div>
      <Navigation />
      <MainContainer/>
      <Footer />
    </div>
  );
};

export default App;
