import * as React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';
import FlatButton from '../elements/FlatButton';
import Text from '../elements/Text';
import { Color } from '../theme/colors';
import VideoPlayer from './videoPlayer';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Lottie from 'lottie-react-native';
import { Height, Width } from '../../components/theme/dimensions';

const DetectionCard = ({ cardTitle, cardContent, source, sourceType, callBack, type, lottie }) => {
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
        <View style={{ height: Height * .25, justifyContent: "center", alignItems: "center" }}>
          <Lottie source={require('../../../assets/videos/road.json')} autoPlay loop resizeMode="cover" style={{ height: 300 }} />
        </View>
      ) : (
        <View style={{ height: Height * .25, justifyContent: "center", alignItems: "center" }}>
          <Lottie source={require('../../../assets/videos/photo.json')} autoPlay loop resizeMode="cover" style={{ height: 300 }} />
        </View>
        // <Card.Cover style={{}} source={{ uri: source }} />
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
        text={'DETECT'}
        bgColor={Color.dangerColor}
        textColor={Color.darkColor}
        cardTitle={cardTitle}
        callBack={callBack}
      />
    </Card>
  );
};

export default DetectionCard;
