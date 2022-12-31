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
// import MapView from 'react-native-maps';

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
        backgroundGradientTo: "white",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
    };

    return (
        <View >
            <ScrollView>
                <View style={{ backgroundColor: 'red', height: windowHeight * 0.1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Report Details</Text>
                </View>
                <View style={{ backgroundColor: 'yellow', height: windowHeight * 0.05, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Road Name</Text>
                </View>
                <View style={{ height: windowHeight * 0.4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <ProgressChart
                        data={data}
                        width={windowWidth * 0.7}
                        height={windowHeight * 0.3}
                        strokeWidth={20}
                        radius={50}
                        chartConfig={chartConfig}
                        hideLegend={true}
                    />
                    <Text>Poth Holes Detected : 70%</Text>
                </View>
                <View style={{ backgroundColor: 'yellow', height: windowHeight * 0.3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Map View</Text>
                    {/* <MapView
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    /> */}
                </View>
                <View  style={{ backgroundColor: 'red', height: windowHeight * 0.05, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Text>Date : 20 Dec 2000</Text>
                </View>
                <View  style={{ backgroundColor: 'purple', height: windowHeight * 0.05, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
