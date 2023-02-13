import react, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import FlatButton from "../components/elements/FlatButton";
import Text from "../components/elements/Text";
import { Color } from "../components/theme/colors";
import { Height, Width } from '../components/theme/dimensions';
import ImagePicker from 'react-native-image-crop-picker';
import Lottie from 'lottie-react-native';
import { fetchImageApi, fetchImageApis } from "../config/api/api-service";

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
    const { navigation } = props;
    const [photosArray, setPhotosArray] = useState([]);
    const [video, setVideo] = useState();

    const callBackUploads = () => {
        ImagePicker.openPicker({
            multiple: true
        }).then(images => {
            console.log(images);
            setPhotosArray(images);
        });
    }

    const callBackSubmit = async () => {

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
                console.log('RESPONSE', data)
            });

    }

    return (
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
                            title={photosArray.length > 0 ? `Great..! Now Submit your selected photos for detection stage...` : `Disclaimer: You can be select single photo or mulitple for detecting better result, lets go upload pothole photos...`}
                            size={'lg'}
                            weight={'heavy'}
                            color={Color.darkColor}
                        />
                    </View>
                    <View>
                        {photosArray.length > 0 ?
                            <FlatButton
                                text={'SUBMIT'}
                                bgColor={Color.dangerColor}
                                textColor={Color.darkColor}
                                callBack={callBackSubmit}
                            />
                            :
                            <FlatButton
                                text={'UPLOAD PHOTOS'}
                                bgColor={Color.dangerColor}
                                textColor={Color.darkColor}
                                callBack={callBackUploads}
                            />
                        }
                    </View>
                </View>
            </View>
        </View>
    )
}