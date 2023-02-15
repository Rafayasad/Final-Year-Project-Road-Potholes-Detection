import React from 'react';
import {View, Image} from 'react-native';
import Text from '../components/elements/Text';
import Logo from '../../assets/images/Logo.png';
import {Color} from '../components/theme/colors';
// import FlatButton from '../components/elements/FlatButton';

const SplashScreen = () => {
  return (
    <View
      flex={1}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.secondaryColor,
      }}>
      <Image source={Logo} />
      <View style={{marginTop: 20}}>
        <Text weight="heavy" title="Pot Holes Detection" size="xl" />
      </View>
    </View>
  );
};
export default SplashScreen;
