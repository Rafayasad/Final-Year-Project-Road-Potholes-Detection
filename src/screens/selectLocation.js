import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import FlatButton from '../components/elements/FlatButton';
import {Color} from '../components/theme/colors';
import MapView, {
  enableLatestRenderer,
  PROVIDER_GOOGLE,
  Marker,
} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';

const SelectScreen = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

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


  useEffect(()=>{
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyD7IfqCPAHjizbBiyG2X2hOc8mUdfuN4hA`)
    .then(response => {
      console.log("responsee",response.data.results[0].formatted_address);
      // Do something with the location name here
    })
    .catch(error => {
      console.log("error",error);
    });
  }, [latitude , longitude])


  return (
    <View flex={1}>
      <View>
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
      </View>
    </View>
  );
};
export default SelectScreen;
