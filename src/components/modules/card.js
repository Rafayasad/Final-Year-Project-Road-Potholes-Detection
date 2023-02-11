import * as React from 'react';
import { Avatar, Button, Card, View } from 'react-native-paper';
import { fetchImageApi } from '../../config/api/api-service';
import FlatButton from '../elements/FlatButton';
import Text from '../elements/Text';
import { Color } from '../theme/colors';
import VideoPlayer from './videoPlayer';
import PothImage from "../../../assets/images/imagePotholes.jpg";

const DetectionCard = ({ cardTitle, cardContent, source, sourceType }) => {

    const ImageHandler = (data) => {
        //image picker 
        fetchImageApi("http://127.0.0.1:8000/media/my_picture/download_4_PE7tBvr.jpg");
    }
    
    React.useEffect(() => {
        ImageHandler()
    }, [])

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
            <FlatButton text={"DETECT"} bgColor={Color.dangerColor} textColor={Color.darkColor} onClick={ImageHandler} />
        </Card>
    )
}

export default DetectionCard;