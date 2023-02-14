import * as React from 'react';
import {Avatar, Button, Card, View} from 'react-native-paper';
import FlatButton from '../elements/FlatButton';
import Text from '../elements/Text';
import {Color} from '../theme/colors';
import VideoPlayer from './videoPlayer';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const DetectionCard = ({
  cardTitle,
  cardContent,
  source,
  sourceType,
  callBack,
}) => {
  //   React.useEffect(() => {
  //     launchImageLibrary();
  //   }, []);
  return (
    <Card
      style={{
        padding: 5,
        marginBottom: 10,
        backgroundColor: Color.primaryColor,
      }}>
      {sourceType == 'video' ? (
        <>
          <VideoPlayer />
        </>
      ) : (
        // <Card.Cover style={{}} source={{ uri: source }} />
        <Card.Cover style={{}} source={{uri: source}} />
      )}
      <Text
        title={cardTitle}
        size={'lg'}
        weight={'heavy'}
        color={Color.darkColor}
      />
      <Text
        title={cardContent}
        size={'sm'}
        weight={'lite'}
        color={Color.darkColor}
      />
      <FlatButton
        text={'Detect'}
        bgColor={Color.btnBg}
        textColor={Color.lightColor}
        cardTitle={cardTitle}
        callBack={callBack}
      />
    </Card>
  );
};

export default DetectionCard;
