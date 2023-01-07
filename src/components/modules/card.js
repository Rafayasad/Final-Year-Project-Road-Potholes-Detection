import * as React from 'react';
import { Avatar, Button, Card, View } from 'react-native-paper';
import FlatButton from '../elements/FlatButton';
import Text from '../elements/Text';
import { Color } from '../theme/colors';

const DetectionCard = ({ cardTitle, cardContent, source, }) => {
    return (
        <Card style={{ padding: 10 }}>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Text title={"card title"} size={"lg"} />
            <Text title={"card content"} size={"sm"} />
            {/* <View> */}
            <FlatButton text={"Detect"} bgColor={Color.dangerColor} textColor={Color.darkColor} margintop={5} />
            {/* </View> */}
        </Card>
    )
}

export default DetectionCard;