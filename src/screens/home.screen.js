import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, Button} from 'react-native';
import {Color} from '../components/theme/colors';
import {Height, Width} from '../components/theme/dimensions';
import Text from '../components/elements/Text';
import DetectionCard from '../components/modules/card';
import Modal from '../components/modules/modal';

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

export default function Home(props) {
  const {navigation} = props;
  const [photosArray, setPhotosArray] = useState([]);
  const [video, setVideo] = useState();
  const [type, setType] = useState();
  const [showModal, setShowModal] = useState(false);

  const callBack = type => {
    navigation.navigate('UploadScreen');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        {/* <View>
          <Text
            title={'Welcome,'}
            size={'xl'}
            weight={'lite'}
            color={Color.darkColor}
          />
        </View> */}
        {/* <View style={{ marginBottom: 10 }}>
          <Text
            title={'Hamad melay'}
            size={'lg'}
            weight={'lite'}
            color={Color.darkColor}
          />
        </View> */}
        <DetectionCard
          source={'https://miro.medium.com/max/1200/0*MAFFN_XvQDlTyVUZ.jpg'}
          cardTitle={'Detection via photos'}
          cardContent={'Card content'}
          callBack={callBack}
        />
        <DetectionCard
          cardTitle={'Detection via video'}
          cardContent={'Card content'}
          sourceType={'video'}
          callBack={callBack}
        />
      </View>
    </ScrollView>
  );
}
