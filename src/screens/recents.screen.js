import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "../components/elements/Text";
import { Color } from "../components/theme/colors";
import { Height, Width } from "../components/theme/dimensions";
import Lottie from 'lottie-react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.secondaryColor,
        height: Height,
    },
    subContainer: {
        height: Height,
        marginBottom: Height * 0.06,
        marginLeft: Width * 0.03,
        marginRight: Width * 0.03,
    },
});

export default function Recents(props) {

    const data = [
        {
            locationName: "Gulshan",
            date: "29/02/2023",
            raito: "50.01%"
        },
        {
            locationName: "Malir",
            date: "29/02/2023",
            raito: "90.44%"
        },
        {
            locationName: "Johar",
            date: "29/02/2023",
            raito: "84.33%"
        },
        {
            locationName: "Saddar",
            date: "29/02/2023",
            raito: "84.99%"
        }
    ]

    const { navigation } = props;

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                {data?.map((item, index) => {
                    return (
                        <View style={{
                            backgroundColor: "#f4c0f9",
                            // padding: 5,
                            margin: 10,
                            borderRadius: 25,
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                            <View style={{ marginBottom: 15, paddingHorizontal: 10 }}>
                                <Lottie source={require('../../assets/videos/map.json')} autoPlay loop resizeMode="cover" style={{ height: 100 }} />
                            </View>
                            <View style={{}}>
                                <View style={{ width: Width * .7 }}>
                                    <Text
                                        title={item.locationName}
                                        size={'xl'}
                                        weight={'heavy'}
                                        color={Color.darkColor}
                                    />
                                </View>
                                <View>
                                    <Text
                                        title={`${item.raito} Detecting Ratio`}
                                        size={"lg"}
                                        weight={"lite"}
                                        color={Color.darkColor}
                                    />
                                    <Text
                                        title={item.date}
                                        size={""}
                                        weight={"lite"}
                                        color={"grey"}
                                    />
                                </View>
                            </View>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}