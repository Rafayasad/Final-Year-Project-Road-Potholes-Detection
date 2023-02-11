import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Color } from "../components/theme/colors";
import { Height, Width } from "../components/theme/dimensions";
import { fetchImageApi } from "../config/api/api-service";
import FlatButton from "../components/elements/FlatButton";
import Text from "../components/elements/Text";
import DetectionCard from "../components/modules/card";
import imagesOfPothole from "../../assets/images/imagePotholes.jpg";

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
    // const IMAGE_DETECTION = () => {
    //     fetchImageApi(imagesOfPothole)
    // }
    // useEffect(() => {
    //     IMAGE_DETECTION()
    // }, [])
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