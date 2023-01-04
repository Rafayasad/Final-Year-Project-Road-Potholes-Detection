import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Text from '../components/elements/Text';
import MapView, { enableLatestRenderer, PROVIDER_GOOGLE } from 'react-native-maps';
import { ScrollView } from 'react-native-gesture-handler';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

function Report() {
    const data = {
        labels: ["Swim", "Bike", "Run"], // optional
        data: [0.4, 0.6, 0.8]
    };
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
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
                            <Text size="lg" weight="heavy" title="Life Span" />
                            <View style={styles.graph_view}>
                                <ProgressChart
                                    data={data}
                                    width={200}
                                    height={220}
                                    strokeWidth={16}
                                    radius={32}
                                    chartConfig={chartConfig}
                                    hideLegend={false}
                                />
                            </View>
                            <Text size="lg" weight="heavy" title="Poth holes" />
                            <View style={styles.graph_view}>

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
                                }}
                            >
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
                    <View style={styles.footer}>

                    </View>
                </View>
            </ScrollView>
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
    report_view: {
        width: windowWidth * 0.8,
        height: windowHeight,
        backgroundColor: '#C0E6BA',
        borderRadius: 20,
        alignItems: 'center'
    },
    graphs_view: {
        width: '90%',
        height: '60%',
        // backgroundColor: 'red',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    graph_view: {
        width: '100%',
        height: '45%',
        // backgroundColor: 'blue'
    },
    map_view: {
        width: '90%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    date_view: {
        width: '90%',
        height: '3%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    download_view: {
        width: '90%',
        height: '7%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: {
        width: windowWidth,
        height: windowHeight * 0.1,
    },
    map: {
        width: '100%',
        height: '80%'
    }
});
