import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

const styles = (props) => StyleSheet.create({
    main: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        height: 50,
        width: '100%',
        backgroundColor: props,
        marginTop: 5
    }
})

const FlatButton = ({ text, bgColor, textColor, margintop, onClick }) => {
    return (
        <TouchableOpacity onPress={() => onClick()}>
            <View style={styles(bgColor).main}>
                <Text style={{ color: textColor, fontSize: 16 }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default FlatButton;