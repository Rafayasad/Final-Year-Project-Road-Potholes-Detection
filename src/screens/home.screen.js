import React from "react";
import { View, Text, Dimensions } from "react-native";
import FlatButton from "../components/elements/FlatButton";
import { Color } from "../components/theme/colors";

export default function Home() {
    return (
        <View style={{ backgroundColor: Color.secondaryColor, flex: 1 }}>
            <View style={{ backgroundColor: "red", flex: 1, paddingLeft:}}>

            </View>
            {/* <FlatButton text={"Hello"} bgColor={Color.primaryColor} textColor={Color.darkColor} /> */}
        </View>
    )
}