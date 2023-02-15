import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import FlatButton from '../components/elements/FlatButton';
import {Color} from '../components/theme/colors';
import MapView, {
  enableLatestRenderer,
  PROVIDER_GOOGLE,
  Marker,
} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {setLocationData} from '../redux/locationDataSlice';

const SelectScreen = ({navigation, route}) => {

  const { item } = route.params
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [location, setLocation] = useState('');
  const date = new Date();
  const [currentDate, setCurrentDate] = useState(date.getDate());
  console.log("currentDate",date.getDate() + date.getMonth()+1 + date.getFullYear())

  const dispatch = useDispatch();

  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      // height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      height: 400,
      width: 400,
    },
  });

  async function requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted');
        // Call getCurrentPosition here
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  requestLocationPermission();

  if (latitude === 0 || longitude === 0) {
    Geolocation.getCurrentPosition(
      position => {
        setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
        // Do something with the position here
      },
      error => {
        console.log(error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyD7IfqCPAHjizbBiyG2X2hOc8mUdfuN4hA`,
  //     )
  //     .then(response => {
  //       console.log('responsee', response.data.results[0].formatted_address);
  //       // Do something with the location name here
  //     })
  //     .catch(error => {
  //       console.log('error', error);
  //     });
  // }, [latitude, longitude]);

  const handleSubmit = () => {
    let locationObj = {
      latitude,
      longitude,
      location,
      date : `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
    };
    // setLocationData(locationObj);
    setLocation('');
    navigation.navigate("Loader",{
      locationObj:locationObj,
      item:item
    })
  };

  return (
    <ScrollView>
      <View flex={1}>
        <View>
          {/* <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        > */}
          <MapView
            // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 1,
              longitudeDelta: 0.0121,
            }}>
            <Marker
              draggable
              // key={index}
              coordinate={{
                latitude: latitude,
                longitude: longitude,
              }}
              title={'North Karachi'}
              description={'Potholes: 80%'}
              onDragEnd={e => {
                setLongitude(e.nativeEvent.coordinate.longitude),
                  setLatitude(e.nativeEvent.coordinate.latitude);
              }}
            />
          </MapView>
          <View style={{marginTop: Dimensions.get('window').height * 0.02}}>
            <TextInput
              placeholder="Enter Location"
              value={location}
              onChangeText={text => setLocation(text)}
              style={{
                backgroundColor: Color.lightColor,
                width: Dimensions.get('window').width * 0.95,
                borderRadius: Dimensions.get('window').width * 0.02,
                alignSelf: 'center',
              }}
            />
          </View>
          <View
            style={{
              alignSelf: 'center',
              marginTop: Dimensions.get('window').height * 0.10,
            }}>
            <TouchableOpacity
              onPress={handleSubmit}
              style={{
                backgroundColor: Color.dangerColor,
                padding: Dimensions.get('window').width * 0.04,
                borderRadius: Dimensions.get('window').width * 0.02,
                width: Dimensions.get('window').width * 0.95,
                alignItems: 'center',
              }}>
              <Text style={{color: Color.darkColor, fontSize: 16}}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
          {/* </KeyboardAvoidingView> */}
        </View>
      </View>
    </ScrollView>
  );
};
export default SelectScreen;
