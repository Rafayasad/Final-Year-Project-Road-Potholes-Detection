import * as React from 'react';
import { Avatar, Button, Card, View } from 'react-native-paper';
import FlatButton from '../elements/FlatButton';
import Text from '../elements/Text';
import { Color } from '../theme/colors';
import VideoPlayer from './videoPlayer';

const DetectionCard = ({ cardTitle, cardContent, source, sourceType }) => {
    return (
        <Card style={{ padding: 5, marginBottom: 10, backgroundColor: Color.primaryColor }}>
            {sourceType == "video" ?
                <>
                    <VideoPlayer />
                </>
                // <Card.Cover style={{}} source={{ uri: source }} />
                :
                <Card.Cover style={{}} source={{ uri: source }} />
            }
            <Text title={cardTitle} size={"lg"} weight={"heavy"} color={Color.darkColor} />
            <Text title={cardContent} size={"sm"} weight={"lite"} color={Color.darkColor} />
            <FlatButton text={"DETECT"} bgColor={Color.dangerColor} textColor={Color.darkColor} />
        </Card>
    )
}

export default DetectionCard;