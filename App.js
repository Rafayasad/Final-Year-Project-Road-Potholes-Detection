import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainNavigation from './src/navigation';
import Tabs from './src/navigation/bottom_tab.navigation';

const styles = StyleSheet.create({
  hello:{

  }
});

function App() {
  return (
    <>
    <Tabs />
        {/* <MainNavigation />     */}
    </>
  )
}

export default App;
