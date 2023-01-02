import React from 'react';
import { Dimensions, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import styles from './Style';
// import MapView from 'react-native-maps';
// import { PROVIDER_GOOGLE} from 'react-native-maps';

function Report() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const data = {
        labels: ["Poth Holes"], // optional
        data: [0.4, 0.7]
    };

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        // color: 'white',
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
    };

    return (
        <View style={styles.main_view} >
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.header_text}>Report Details</Text>
                </View>
                <View style={styles.sub_header}>
                    <Text style={styles.sub_header_text}>Road Name</Text>
                </View>
                <View style={styles.graph_view}>
                    <View style={styles.graph_view_1}>
                    {/* <View style={styles.graph_view_2}></View> */}
                        <ProgressChart
                            data={data}
                            width={windowWidth * 0.7}
                            height={windowHeight * 0.3}
                            strokeWidth={20}
                            radius={50}
                            chartConfig={chartConfig}
                            hideLegend={true}
                        />
                        <Text style={styles.graph_view_1_text}>Poth Holes Detected : 70%</Text> 
                    </View>
                </View>
                <View style={styles.map_view} >
                    <Text>Map View</Text>
                  {/* <MapView
                  provider={PROVIDER_GOOGLE}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />  */}
                </View>
                <View style={styles.date_view}>
                    <Text>Date : 20 Dec 2000</Text>
                </View>
                <View style={styles.report_btn_view} >
                    <TouchableOpacity>
                        <Text>
                            PDF Report
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
// AIzaSyDuOuUTJcRYaiGsg8NoW02_l09sdnquYms

export default Report;
