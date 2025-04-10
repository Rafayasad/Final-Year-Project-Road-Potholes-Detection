import React, {memo, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Modal} from 'react-native-paper';
import FlatButton from '../elements/FlatButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, {Marker} from 'react-native-maps';

const Modale = memo(props => {
  const {showModal, setShowModal, type} = props;
  const containerStyle = {
    backgroundColor: 'white',
    height: '60%',
    justifyContent: 'flex-start',
    padding: 20,
  };

  const [photosArray, setPhotosArray] = useState([]);
  const [video, setVideo] = useState();

  const callBack = text => {
    text === 'videos'
      ? ImagePicker.openPicker({
          mediaType: 'video',
        }).then(video => {
          setVideo(video);
        })
      : text === 'photos'
      ? ImagePicker.openPicker({
          multiple: true,
        }).then(images => {
          // console.log(images);
          setPhotosArray(images);
          //   const bodyFormData = new FormData();
          //   bodyFormData.append('image', {
          //     uri: images[0].path,
          //     name: images[0].path.split('/').pop(),
          //     type: images[0].mime,
          //   });
          //   bodyFormData.append('status', 'pothole');
          //   fetchImageApi(bodyFormData)
          //     .then(response => response.json())
          //     .then(ress => {
          //       console.log('agaya', ress);
          //     })
          //     .catch(error => {
          //       console.log('nahi aya', error);
          //     });
        })
      : text === 'Submit'
      ? (setVideo(), setPhotosArray([]), setShowModal(false))
      : mull;
  };

  const styles = StyleSheet.create({
    map_view: {
      width: '100%',
      height: '50%',
      alignItems: 'center',
      //   justifyContent: 'space-between',
      // justifyContent: 'space-around',
    },
    map: {
      width: '100%',
      height: '50%',
      //   ...StyleSheet.absoluteFillObject
      // borderRadius: 10,
      // marginTop: 10,
    },
  });
  return (
    <Modal
      visible={showModal}
      //   onDismiss={() => setShowModal(false)}
      contentContainerStyle={containerStyle}>
      {/* <View style={styles.map_view}> */}
      {/* <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        /> */}
      <MapView
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          // key={index}
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          title={'North Karachi'}
          description={'Potholes: 80%'}
        />
      </MapView>
      {/* </View> */}
      <View style={{margin: 20, alignItems: 'center'}}>
        {video || photosArray.length > 0 ? (
          <Icon name="file" size={30} color="black" />
        ) : (
          <FlatButton
            margintop={'20'}
            callBack={callBack}
            bgColor="black"
            cardTitle={type}
            text={`Add ${type}`}
          />
        )}
      </View>
      <View style={{margin: 20}}>
        <FlatButton
          callBack={callBack}
          bgColor="black"
          cardTitle="Submit"
          text="Submit"
        />
      </View>
    </Modal>
  );
});

export default Modale;
