import React from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Text from '../components/elements/Text';
import MapView, {
  enableLatestRenderer,
  PROVIDER_GOOGLE,
  Marker,
} from 'react-native-maps';
import {ScrollView} from 'react-native-gesture-handler';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Report() {
  const data = {
    labels: ['Swim'], // optional
    data: [0.4],
  };
  const data2 = {
    labels: ['0', '20', '40', '60', '80', '100'],
    datasets: [
      {
        data: [0, 80],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#EAF9E7',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(1, 50, 55, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <View style={styles.main_view}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.road_name_view}>
            <Text size="xl" weight="heavy" title="Road Name" />
          </View>
          <View style={styles.report_view}>
            <View style={styles.graphs_view}>
              <View style={styles.graph_view}>
                <ProgressChart
                  data={data}
                  width={windowWidth * 0.45}
                  height={windowHeight * 0.21}
                  strokeWidth={16}
                  radius={40}
                  chartConfig={chartConfig}
                  hideLegend={true}
                />
                <Text size="sm" weight="lite" title="80% Poth holes" />
              </View>
              <View style={styles.graph_view}>
                <LineChart
                  data={data2}
                  width={windowWidth * 0.45}
                  height={windowHeight * 0.21}
                  verticalLabelRotation={0}
                  chartConfig={chartConfig}
                  bezier
                />
                <Text size="sm" weight="lite" title="80% Life Span" />
              </View>
            </View>
            <View style={styles.map_view}>
              <Text size="lg" weight="heavy" title="Map View" />
              <MapView
                style={styles.map}
                region={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}>
                <Marker
                  // key={index}
                  coordinate={{latitude: 37.78825, longitude: -122.4324}}
                  title={'asd'}
                  description={'asnl'}
                />
              </MapView>
            </View>
            <View style={styles.date_view}>
              <Text size="sm" weight="heavy" title="Dated :" />
              <Text size="sm" weight="lite" title="10-20-2018" />
            </View>
            <View style={styles.download_view}>
              <TouchableOpacity>
                <Text size="lg" weight="lite" title="Download Button" />
              </TouchableOpacity>
            </View>
          </View>
          {/* <View style={styles.footer}></View> */}
        </View>
      </ScrollView>
    </View>
  );
}

export default Report;

const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    backgroundColor: '#C0E6BA',
  },
  header: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 0.8,
    alignItems: 'center',
  },
  road_name_view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    height: windowHeight * 0.05,
  },
  report_view: {
    width: windowWidth,
    height: windowHeight * 0.9,
    alignItems: 'center',
  },
  graphs_view: {
    width: '100%',
    height: windowHeight * 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  graph_view: {
    width: '48%',
    height: '90%',
    justifyContent: 'space-between',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#EAF9E7',
    borderRadius: 10,
  },
  map_view: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  date_view: {
    width: '90%',
    height: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  download_view: {
    width: '90%',
    height: '7%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    width: windowWidth,
    height: windowHeight * 0.1,
  },
  map: {
    width: '100%',
    height: '80%',
    borderRadius: 10,
  },
});
