import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainNavigation from './src/navigation';
import Tabs from './src/navigation/bottom_tab.navigation';
import SplashScreen from './src/screens/SplashScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

function App() {
  const [splashOff, setSplashOff] = useState(false);
  setInterval(() => {
    setSplashOff(true)
  }, 2000)
  return (
    <>
      {splashOff ? <MainNavigation /> : <SplashScreen />}
      {/* <MainNavigation /> */}
    </>
  );

}

export default App;
