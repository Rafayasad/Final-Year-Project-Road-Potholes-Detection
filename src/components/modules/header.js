import react from "react";
import { View, StyleSheet } from "react-native";
import { Width } from "../theme/dimensions";
import IconBack from "react-native-vector-icons/MaterialIcons";
import { Color } from "../theme/colors";
import Text from "../elements/Text";

const styles = StyleSheet.create({
    container: {
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Color.dangerColor
    },
    backContainer: {
        height: 50,
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        paddingLeft: Width * .02,
        paddingRight: Width * .02
    }
})

export const Header = ({ title, icon, isBack }) => {
    return (
        <>
            {isBack == true ?
                <View style={styles.backContainer}>
                    <IconBack name="keyboard-arrow-left" size={25} color={Color.darkColor} />
                    <Text title={"back"} size={"sm"} weight={"lite"} color={Color.darkColor} />
                </View>
                :
                <View style={styles.container}>
                    <Text title={title} size={"lg"} weight={"heavy"} color={Color.darkColor} />
                </View>
            }
        </>
    )
}