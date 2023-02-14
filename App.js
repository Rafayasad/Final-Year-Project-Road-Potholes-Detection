import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainNavigation from './src/navigation';
import Tabs from './src/navigation/bottom_tab.navigation';
import SplashScreen from './src/screens/splashScreen';
import SelectScreen from './src/screens/selectLocation';

function App() {
  const [splashOff, setSplashOff] = useState(false);
  setInterval(() => {
    setSplashOff(true)
  }, 2000)
  return (
    <>
      {splashOff ? <MainNavigation /> : <SplashScreen />}
      {/* <SelectScreen /> */}
    </>
  );

}

export default App;
