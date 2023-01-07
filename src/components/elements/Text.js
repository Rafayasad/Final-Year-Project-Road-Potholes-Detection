import React from "react";
import { View, Text as Textt } from "react-native";

const Text = ({ size, weight, title, color }) => {
    return (
        <View>
            <Textt
                style={{
                    fontSize: size === 'xl' ? 30 : size === 'lg' ? 20 : size === 'sm' ? 15 : 5,
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