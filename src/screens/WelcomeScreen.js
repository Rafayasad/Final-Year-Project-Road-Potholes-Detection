import React from 'react';
import {Image, Text, View} from 'react-native';
import FlatButton from '../components/elements/FlatButton';
import {Color} from '../components/theme/colors';
import logo from '../../assets/images/Logo.png';
const WelcomeScreen = ({setHomeScreen}) => {
  const callBack = () => {
    setHomeScreen(true);
  };
  return (
    <View flex={1} style={{justifyContent: 'center'}}>
      <View style={{margin: 10}}>
        {/* <Image
          source={logo}
          style={{alignSelf: 'center', height: 80, width: 80}}
        /> */}
        {/* <Text
          style={{
            fontSize: 16,
            alignSelf: 'center',
            color: Color.darkColor,
            fontWeight: '500',
          }}>
          Pothole Detection 
        </Text> */}
        <FlatButton
          text={'Get Started'}
          bgColor={Color.dangerColor}
          textColor={Color.lightColor}
          cardTitle="Get Started"
          callBack={callBack}
        />
      </View>
    </View>
  );
};
export default WelcomeScreen;
