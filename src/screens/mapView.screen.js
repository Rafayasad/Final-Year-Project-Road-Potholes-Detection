import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {
  enableLatestRenderer,
  PROVIDER_GOOGLE,
  Marker
} from 'react-native-maps';

export default function Map() {
  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      // height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });

  return (
    <View style={styles.container}>
      <MapView
        // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          draggable
          // key={index}
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title={'North Karachi'}
          description={'Potholes: 80%'}
        />
      </MapView>
    </View>
  );
}
