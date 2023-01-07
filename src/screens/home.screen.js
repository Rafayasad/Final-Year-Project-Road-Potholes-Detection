import React from "react";
import { View, StyleSheet } from "react-native";
import FlatButton from "../components/elements/FlatButton";
import { Color } from "../components/theme/colors";
import { Width } from "../components/theme/dimensions";
import Text from "../components/elements/Text";
import DetectionCard from "../components/modules/card";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.secondaryColor,
        flex: 1
    },
    subContainer: {
        flex: 1,
        marginLeft: Width * .03,
        marginRight: Width * .03
    }
})

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text title={"hello"} size={"sm"} />
            <DetectionCard />
            </View>
            {/* <FlatButton text={"Hello"} bgColor={Color.primaryColor} textColor={Color.darkColor} /> */}
        </View>
    )
}