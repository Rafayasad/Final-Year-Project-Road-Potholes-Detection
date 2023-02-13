import React from 'react';
import {Text, View} from 'react-native';
import FlatButton from '../components/elements/FlatButton';
import {Color} from '../components/theme/colors';

const WelcomeScreen = ({setHomeScreen}) => {
  const callBack = () => {
    setHomeScreen(true);
  };
  return (
    <View flex={1}>
      <View style={{margin:10}}>

        <FlatButton
          text={'GET STARTED'}
          bgColor={Color.dangerColor}
          textColor={Color.darkColor}
          cardTitle="Get Started"
          callBack={callBack}
        />
      </View>
    </View>
  );
};
export default WelcomeScreen;
