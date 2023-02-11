import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, Button} from 'react-native';
import FlatButton from '../components/elements/FlatButton';
import {Color} from '../components/theme/colors';
import {Height, Width} from '../components/theme/dimensions';
import Text from '../components/elements/Text';
import DetectionCard from '../components/modules/card';
import ImagePicker from 'react-native-image-crop-picker';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.secondaryColor,
    height: Height,
  },
  subContainer: {
    height: Height,
    marginBottom: Height * 0.06,
    marginLeft: Width * 0.03,
    marginRight: Width * 0.03,
  },
});

export default function Home() {
  const [photosArray, setPhotosArray] = useState([]);
  const [video, setVideo] = useState();
  const callBack = type => {
    type === 'Detection via video'
      ? ImagePicker.openPicker({
          mediaType: 'video',
        }).then(video => {
          console.log(video);
        })
      : ImagePicker.openPicker({
          multiple: true,
        }).then(images => {
          console.log(images);
          setPhotosArray(images);
        });
  };

  {console.log("photos",photosArray)}

  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <View>
          <Text
            title={'Welcome,'}
            size={'xl'}
            weight={'lite'}
            color={Color.darkColor}
          />
        </View>
        <View style={{marginBottom: 10}}>
          <Text
            title={'Hamad melay'}
            size={'lg'}
            weight={'lite'}
            color={Color.darkColor}
          />
        </View>
        <DetectionCard
          source={'https://miro.medium.com/max/1200/0*MAFFN_XvQDlTyVUZ.jpg'}
          cardTitle={'Detection via photos'}
          cardContent={'card content'}
          callBack={callBack}
        />
        <DetectionCard
          cardTitle={'Detection via video'}
          cardContent={'card content'}
          sourceType={'video'}
          callBack={callBack}
        />
      </View>
    </ScrollView>
  );
}
