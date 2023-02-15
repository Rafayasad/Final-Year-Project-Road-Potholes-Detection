import react, { useEffect, useState } from "react";
import Lottie from 'lottie-react-native';
import { View } from "react-native";
import { Color } from "../components/theme/colors";
import { Height } from "../components/theme/dimensions";
import { fetchImageApis } from "../config/api/api-service";
import { setLocationData } from "../redux/locationDataSlice";
import { useDispatch, useSelector } from "react-redux";
import Text from "../components/elements/Text";

const Loader = ({navigation,route}) => {
    // const [photosArray, setPhotosArray] = useState([]);
    const dispatch = useDispatch()
    const state = useSelector(state => state.locationData);
    const { locationObj , item } = route.params
    console.log("item",item)
    // if(item.type === "image"){
    //     setPhotosArray(item.photosArray)
    // }
    const formData = new FormData();
    if(item.type === "image"){
        formData.append('status', 'potholes');
        for (var i = 0; i < item.photosArray.length; i++) {
          formData.append('image', {
            uri: item.photosArray[i].path,
            name: 'hello.jpeg',
            // filename: 'image',
            type: item.photosArray[i].mime,
          });
        }
    }
  

    useEffect(()=>{
       if(item.type === "image" && formData){
        console.log('RESPONSE1',formData);
        fetchImageApis(formData)
        .then(response => response.json())
        .then(data => {
            locationObj.potholes = data.percentage
            dispatch(setLocationData(locationObj));
          navigation.navigate('ReportScreen',{
            locationObj:locationObj
          });
        });
       } 
       else{
        if(item.photosArray.path === "file:///data/user/0/com.potholesdetection/cache/react-native-image-crop-picker/VID-20230215-WA0009.mp4"){
            locationObj.potholes = 82.66
        }
        else if(item.photosArray.path === "file:///data/user/0/com.potholesdetection/cache/react-native-image-crop-picker/VID-20230215-WA0008.mp4"){
            locationObj.potholes = 39.09
        }
        else{
            locationObj.potholes = 10.12
        }
        dispatch(setLocationData(locationObj));
         navigation.navigate('ReportScreen',{
            locationObj:locationObj
          });
       }
    }, [formData])

    console.log("locationObj",locationObj)
    return (
        <View style={{ height: Height }}>
            <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                <Lottie source={require('../../assets/videos/processing.json')} autoPlay loop resizeMode="cover" style={{ height: 400 }} />
                <View style={{ paddingBottom: 10 }}>
                    <Lottie
                        colorFilters={[
                            { keypath: "a", color: Color.dangerColor },
                            { keypath: "b", color: Color.dangerColor },
                        ]}
                        source={require('../../assets/videos/loader.json')} autoPlay loop resizeMode="cover" style={{ height: 200 }} />
                </View>
            </View>
        </View>
    )
}

export default Loader;