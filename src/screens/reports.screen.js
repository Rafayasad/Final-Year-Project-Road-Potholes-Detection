import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Text from '../components/elements/Text';
import MapView, { enableLatestRenderer, PROVIDER_GOOGLE } from 'react-native-maps';

function Report() {
    return (
        <View style={styles.main_view}>
            <View style={styles.header}>
                <Text size="xl" weight="heavy" title="Report" />
            </View>
            <View style={styles.container}>
                <View style={styles.road_name_view}>
                    <Text size="lg" weight="lite" title="Road Name" />
                </View>
                <View style={styles.graphs_view}>
                </View>
            </View>
            {/* <MapView
        // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
      </MapView> */}
        </View>
    )
}

export default Report;


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    main_view: {
        flex: 1,
        backgroundColor: '#EAF9E7'
    },
    header: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 0.8,
        alignItems: 'center'
    },
    road_name_view: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    graphs_view: {
        width: windowWidth * 0.8,
        height: windowHeight * 0.6,
        backgroundColor: '#C0E6BA',
        borderRadius: 20
    }
    // container: {
    //     ...StyleSheet.absoluteFillObject,
    //     // height: 400,
    //     width: 400,
    //     justifyContent: 'flex-end',
    //     alignItems: 'center',
    // },
    // map: {
    //     ...StyleSheet.absoluteFillObject,
    // },
});
