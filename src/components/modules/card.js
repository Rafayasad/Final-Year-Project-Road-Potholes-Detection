import * as React from 'react';
import { Avatar, Button, Card, View } from 'react-native-paper';
import FlatButton from '../elements/FlatButton';
import Text from '../elements/Text';
import { Color } from '../theme/colors';

const DetectionCard = ({ cardTitle, cardContent, source, }) => {
    return (
        <Card style={{ padding: 10,marginBottom:10,backgroundColor:Color.primaryColor }}>
            <Card.Cover source={{ uri: source }} />
            <Text title={cardTitle} size={"lg"} weight={"heavy"} color={Color.darkColor} />
            <Text title={cardContent} size={"sm"} weight={"lite"} color={Color.darkColor} />
            <FlatButton text={"DETECT"} bgColor={Color.dangerColor} textColor={Color.darkColor} />
        </Card>
    )
}

export default DetectionCard;