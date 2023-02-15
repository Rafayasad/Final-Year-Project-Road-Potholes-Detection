import react, { useEffect, useState } from "react";
import Lottie from 'lottie-react-native';
import { View } from "react-native";
import { Color } from "../components/theme/colors";
import { Height } from "../components/theme/dimensions";
import { fetchImageApis } from "../config/api/api-service";
import { setLocationData } from "../redux/locationDataSlice";
import Text from "../components/elements/Text";

const Loader = ({navigation,route}) => {
    // const [photosArray, setPhotosArray] = useState([]);
    const { locationObj , item } = route.params
    console.log("item",item)
    // if(item.type === "image"){
    //     setPhotosArray(item.photosArray)
    // }
    const formData = new FormData();
    formData.append('status', 'potholes');
    for (var i = 0; i < item.photosArray.length; i++) {
      formData.append('image', {
        uri: item.photosArray[i].path,
        name: 'hello.jpeg',
        // filename: 'image',
        type: item.photosArray[i].mime,
      });
    }
  

    useEffect(()=>{
       if(formData){
        console.log('RESPONSE1',formData);
        fetchImageApis(formData)
        .then(response => response.json())
        .then(data => {
            locationObj.potholes = data.percentage
            setLocationData(locationObj);
          navigation.navigate('ReportScreen',{
            locationObj:locationObj
          });
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