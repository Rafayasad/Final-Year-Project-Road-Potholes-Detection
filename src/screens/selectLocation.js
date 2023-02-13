import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import FlatButton from '../components/elements/FlatButton';
import {Color} from '../components/theme/colors';
import MapView, {
  enableLatestRenderer,
  PROVIDER_GOOGLE,
  Marker,
} from 'react-native-maps';
import Geocoder from 'react-native-geocoding';

const SelectScreen = () => {
  const [latitude, setLatitude] = useState();
  const [longitude, setlongitude] = useState();

  Geocoder.init('AIzaSyD7IfqCPAHjizbBiyG2X2hOc8mUdfuN4hA');

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

  Geocoder.from(37.78825,-122.4324)
  .then(json => {
    var addressComponent = json.results[0].address_components[0];
    console.log(addressComponent.long_name);
  })
  .catch(error => console.warn(error));

//   useEffect(() => {
//     if (latitude) {
//       Geocoder.from(latitude, longitude)
//         .then(json => {
//           //   var addressComponent = json.results[0].address_components[0];
//         })
//         .catch(error => console.warn(error));
//     }
//   }, [latitude, longitude]);

  return (
    <View flex={1}>
      <View>
        <MapView
          // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 24.860966,
            longitude: 66.990501,
            latitudeDelta: 1,
            longitudeDelta: 0.0121,
          }}
          onClick={e => {
            alert('ee', e);
          }}>
          <Marker
            draggable
            // key={index}
            coordinate={{latitude: 24.860966, longitude: 66.990501}}
            title={'North Karachi'}
            description={'Potholes: 80%'}
            onDragEnd={e => {
              setlongitude(e.nativeEvent.coordinate.longitude),
                setLatitude(e.nativeEvent.coordinate.latitude);
            }}
          />
        </MapView>
      </View>
    </View>
  );
};
export default SelectScreen;
