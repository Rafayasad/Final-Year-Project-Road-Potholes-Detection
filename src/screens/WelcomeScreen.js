import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FlatButton from '../components/elements/FlatButton';
import { Color } from '../components/theme/colors';
import { Height, Width } from '../components/theme/dimensions';
import Lottie from 'lottie-react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.secondaryColor,
    height: Height,
  },
  subContainer: {
    height: Height,
    marginBottom: Height * 0.06,
    marginLeft: Width * 0.03,
    marginRight: Width * 0.03,
    justifyContent: "center"
    // alignItems:"flex-end"/
  },
});

const WelcomeScreen = (props) => {

  const { navigation } = props;

  const callBack = () => {
    // alert('d')
    // console.log("sss");
    // setHomeScreen(true);
    navigation.navigate("Homes");
  };
  return (
    <View flex={1} style={styles.container}>
      <View style={styles.subContainer}>
        <View style={{ height: Height * .5, justifyContent: "center", alignItems: "center" }}>
          <Lottie source={require('../../assets/videos/welcome.json')} autoPlay loop resizeMode="cover" style={{ height: 300 }} />
        </View>
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
