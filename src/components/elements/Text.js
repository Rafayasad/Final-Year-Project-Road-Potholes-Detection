import React from "react";
import { View, Text as Textt } from "react-native";

const Text = ({ size, weight, title, color }) => {
    return (
        <View style={{marginTop:3}}>
            <Textt
                style={{
                    fontSize: size === 'xl' ? 20 : size === 'lg' ? 18 : size === 'sm' ? 15 : 12,
                    fontWeight: weight === 'heavy' ? "700" : weight === 'lite' ? "500" : null,
                    fontFamily: 'Poppins',
                    color: color
                }}>
                {title}
            </Textt>
        </View>
    )
}

export default Text;