import react from "react";
import Lottie from 'lottie-react-native';
import { View } from "react-native";
import { Color } from "../components/theme/colors";
import { Height } from "../components/theme/dimensions";
import Text from "../components/elements/Text";

const Loader = () => {
    return (
        <View style={{ height: Height }}>
            <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                <Lottie source={require('../../assets/videos/processing.json')} autoPlay loop resizeMode="cover" style={{ height: 400 }} />
                <View style={{ paddingBottom: 10 }}>
                    <Lottie
                        colorFilters={[
                            { keypath: "a", color: Color.dangerColor },
                            { keypath: "b", color: Color.dangerColor },
                        ]}
                        source={require('../../assets/videos/loader.json')} autoPlay loop resizeMode="cover" style={{ height: 200 }} />
                </View>
            </View>
        </View>
    )
}

export default Loader;