import react, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import FlatButton from '../components/elements/FlatButton';
import Text from '../components/elements/Text';
import { Color } from '../components/theme/colors';
import { Height, Width } from '../components/theme/dimensions';
import ImagePicker from 'react-native-image-crop-picker';
import Lottie from 'lottie-react-native';
import { fetchImageApi, fetchImageApis, fetchVideoApis } from "../config/api/api-service";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.primaryColor,
        height: Height,
    },
    subContainer: {
        height: Height,
        // marginBottom: Height * 0.06,
        marginLeft: Width * 0.03,
        marginRight: Width * 0.03,
    },
});

export default function UploadScreen(props) {
    const { navigation, route } = props;
    const { type } = route.params;
    console.log(type);
    const [photosArray, setPhotosArray] = useState([]);
    const [video, setVideo] = useState();

    const callBackUploads = () => {
        ImagePicker.openPicker({
            multiple: true,
        }).then(images => {
            console.log(images);
            setPhotosArray(images);
        });
    };

    const callBackCameraUpload = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
        });
    }

    const callBackUploadVideo = () => {
        ImagePicker.openPicker({
            mediaType: "video",
        }).then((video) => {
            console.log(video);
            setVideo(video);
        });
    }

    const callBackUploadVideoCamera = () => {
        ImagePicker.openCamera({
            mediaType: 'video',
        }).then(image => {
            console.log(image);
        });
    }

    const callBackSubmitPhoto = async () => {
        console.log("ss");
        const formData = new FormData()
        formData.append("status", "potholes")
        for (var i = 0; i < photosArray.length; i++) {
            formData.append("image", {
                uri: photosArray[i].path,
                name: "hello.jpeg",
                // filename: 'image',
                type: photosArray[i].mime,
            })
        }
        await fetchImageApis(formData)
            .then(response => response.json())
            .then(data => {
                navigation.navigate("Homes");
                console.log('RESPONSE', data)
            })
    }

    const callBackSubmitVideo = async () => {
        const formData = new FormData()
        formData.append("lable_status", "videos")
        formData.append("filefiled", {
            uri: video.path,
            name: "hello.jpeg",
            // filename: 'image',
            type: video.mime,
        })
        await fetchVideoApis(formData)
            .then(response => response.json())
            .then(data => {
                navigation.navigate("Homes");
                console.log('RESPONSE VIDEO', data);
            })
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <View style={{ height: Height * .5, justifyContent: "center", alignItems: "center" }}>
                        {photosArray.length > 0 ?
                            <Lottie source={require('../../assets/videos/processing.json')} autoPlay loop resizeMode="cover" style={{ height: 250 }} />
                            :
                            <Lottie source={require('../../assets/videos/detection.json')} autoPlay loop resizeMode="cover" style={{ height: 250 }} />
                        }
                    </View>
                    <View style={{ height: Height * .4, justifyContent: "space-between" }}>
                        <View>
                            <Text
                                title={photosArray.length > 0 ? `Great..! Now Submit your selected photos for detection stage...` :
                                    type == "Detection via photos" ?
                                        `Disclaimer: You can be select single photo or mulitple for detecting better result, lets go upload pothole photos...`
                                        : `Disclaimer: You can be select single video for detecting better result, lets go upload pothole video...`
                                }
                                size={'lg'}
                                weight={'heavy'}
                                color={Color.darkColor}
                            />
                        </View>
                        <View>
                            {photosArray.length > 0 || video ?
                                type == "Detection via photos" ?
                                    <FlatButton
                                        text={'SUBMIT'}
                                        bgColor={Color.dangerColor}
                                        textColor={Color.darkColor}
                                        callBack={callBackSubmitPhoto}
                                    />
                                    :
                                    <FlatButton
                                        text={'SUBMIT'}
                                        bgColor={Color.dangerColor}
                                        textColor={Color.darkColor}
                                        callBack={callBackSubmitVideo}
                                    />
                                :
                                type == "Detection via photos" ?
                                    <FlatButton
                                        text={'UPLOAD PHOTOS'}
                                        bgColor={Color.dangerColor}
                                        textColor={Color.darkColor}
                                        callBack={callBackUploads}
                                    />
                                    :
                                    <FlatButton
                                        text={'UPLOAD VIDEO'}
                                        bgColor={Color.dangerColor}
                                        textColor={Color.darkColor}
                                        callBack={callBackUploadVideo}
                                    />
                            }
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ height: Height * 0.4, justifyContent: 'space-between' }}>
                <View>
                    <Text
                        title={
                            photosArray.length > 0
                                ? `Great! Now Submit your selected photos for detection stage.`
                                : `Disclaimer: You can be select single photo or mulitple for detecting better result, lets go upload pothole photos.`
                        }
                        size={'sm'}
                        weight={'heavy'}
                        color={Color.darkColor}
                    />
                </View>
            </View>
        </>
    );
}
