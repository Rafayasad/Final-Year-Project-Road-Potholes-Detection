import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import FlatButton from "../components/elements/FlatButton";
import { Color } from "../components/theme/colors";
import { Height, Width } from "../components/theme/dimensions";
import Text from "../components/elements/Text";
import DetectionCard from "../components/modules/card";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.secondaryColor,
        height: Height
    },
    subContainer: {
        height: Height,
        marginBottom: Height * .06,
        marginLeft: Width * .03,
        marginRight: Width * .03
    }
})

export default function Home() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.subContainer}>
                <View>
                    <Text title={"Welcome,"} size={"xl"} weight={"lite"} color={Color.darkColor} />
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text title={"Hamad melay"} size={"lg"} weight={"lite"} color={Color.darkColor} />
                </View>
                <DetectionCard
                    source={'https://miro.medium.com/max/1200/0*MAFFN_XvQDlTyVUZ.jpg'}
                    cardTitle={"Detection via photos"}
                    cardContent={"card content"}
                />
                <DetectionCard
                    cardTitle={"Detection via video"}
                    cardContent={"card content"}
                    sourceType={"video"}
                />
            </View>
            {/* <FlatButton text={"Hello"} bgColor={Color.primaryColor} textColor={Color.darkColor} /> */}
        </ScrollView>
    )
}