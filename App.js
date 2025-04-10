import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainNavigation from './src/navigation';
import Loader from './src/screens/loader.screen';
import SplashScreen from './src/screens/SplashScreen';
import store from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';

function App() {
  
  let persistor = persistStore(store);
  const [splashOff, setSplashOff] = useState(false);
  
  setInterval(() => {
    setSplashOff(true)
  }, 2000)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {splashOff ? <MainNavigation /> : <SplashScreen />}
      </PersistGate>
    </Provider>
  );

}

export default App;
