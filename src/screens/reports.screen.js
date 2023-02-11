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
import IconHome from 'react-native-vector-icons/MaterialCommunityIcons';
import FlatButton from '../components/elements/FlatButton';
import {Avatar, Button, Card} from 'react-native-paper';
import {Color} from '../components/theme/colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Report() {
  const data = {
    labels: ['Swim'], // optional
    data: [0.4],
  };
  const data2 = {
    labels: ['0', '2', '4', '6', '8', '10'],
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
    backgroundGradientTo: 'white',
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
            <IconHome
              style={{marginRight: 5}}
              name="road-variant"
              color={'#013237'}
              size={26}
            />
            <Text
              size="xl"
              weight="heavy"
              title="Road Name"
              color={'#013237'}
            />
          </View>
          <View style={styles.report_view}>
            <View style={styles.graphs_view}>
              <Card style={styles.graph_view}>
                <ProgressChart
                  data={data}
                  width={windowWidth * 0.45}
                  height={windowHeight * 0.21}
                  strokeWidth={16}
                  radius={40}
                  chartConfig={chartConfig}
                  hideLegend={true}
                />
                <Text
                  size="sm"
                  weight="lite"
                  title="80% Poth holes"
                  color={'#013237'}
                />
              </Card>
              <Card style={styles.graph_view}>
                <LineChart
                  data={data2}
                  width={windowWidth * 0.45}
                  height={windowHeight * 0.21}
                  verticalLabelRotation={0}
                  chartConfig={chartConfig}
                  bezier
                />
                <Text
                  size="sm"
                  weight="lite"
                  title="20% Life Span"
                  color={'#013237'}
                />
              </Card>
            </View>
            <View style={styles.map_view}>
              <Text
                size="lg"
                weight="heavy"
                title="Map View"
                color={'#013237'}
              />
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
                  title={'North Karachi'}
                  description={'Potholes: 80%'}
                />
              </MapView>
            </View>
            <View style={styles.date_view}>
              <Text
                size="sm"
                weight="heavy"
                title="Dated :"
                color={'#013237'}
              />
              <Text
                size="sm"
                weight="lite"
                title="10-20-2018"
                color={'#013237'}
              />
            </View>
            {/* <View style={styles.download_view}> */}

            {/* </View> */}
          </View>
          {/* <View style={styles.footer}></View> */}
        </View>
        <View style={styles.download_view}>
          <FlatButton
            text={'Download PDF'}
            bgColor={Color.dangerColor}
            textColor={'#EAF9E7'}
            margintop={5}
          />
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    height: windowHeight * 0.05,
    // backgroundColor:'red'
  },
  report_view: {
    width: windowWidth,
    height: windowHeight * 0.65,
    alignItems: 'center',
    // backgroundColor:'red'
  },
  graphs_view: {
    width: '100%',
    height: windowHeight * 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifyContent: 'space-around',
  },
  graph_view: {
    width: '48%',
    height: '90%',
    justifyContent: 'space-between',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  map_view: {
    width: '95%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'space-between',
    // justifyContent: 'space-around',
  },
  date_view: {
    width: '95%',
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  download_view: {
    width: windowWidth,
    paddingHorizontal: 10,
  },
  footer: {
    width: windowWidth,
    height: windowHeight * 0.1,
  },
  map: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    marginTop: 10,
  },
});
