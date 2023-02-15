import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {
  enableLatestRenderer,
  PROVIDER_GOOGLE,
  Marker
} from 'react-native-maps';
import {useSelector} from 'react-redux';

export default function Map() {
  const state = useSelector(state => state.locationData);
  console.warn(state)
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

  const data = [
    {
      latitude: 24.9180,
      longitude: 67.0971,
      name:"Gulshan",
      potholes: "50.01%"
    },
    {
      latitude: 24.8937,
      longitude: 67.2163,
      name:"Malir",
      potholes: "90.44%"
    },
    {
      latitude: 24.9204,
      longitude: 67.1344,
      name:"Johar",
      potholes: "80.33%"
    },
    {
      latitude: 24.8532,
      longitude: 67.0167,
      name:"Saddar",
      potholes: "84.99%"
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 24.8607,
          longitude: 67.0011,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
          {
            data.map((item)=>{
              return(
                <Marker
                draggable
                // key={index}
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude,
                }}
                title={item.name}
                description={`Potholes: ${item.potholes}`}
              />
              )
            })
          }
           {
          state.data &&  
                <Marker
                draggable
                // key={index}
                coordinate={{
                  latitude: state.data.latitude,
                  longitude: state.data.longitude,
                }}
                title={state.data.location}
                description={`Potholes: ${(state.data.potholes).toFixed(2)}`}
              />
          }
      </MapView>
    </View>
  );
}
