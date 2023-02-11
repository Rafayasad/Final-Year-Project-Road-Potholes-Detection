import axios from "axios";
import * as requestFromServer from "./api-axios";
import PothImage from '../../../assets/images/imagePotholes.jpg';

export const fetchImageApi = async (image) => {
    // console.log("hello==>",PothImage);
    const bodyFormData = new FormData()
    bodyFormData.append('image', PothImage);
    bodyFormData.append('status', 'potholes');
    await axios({
        method: "post",
        url: "http://127.0.0.1:8000/image/",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log("success resp",response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });

    // return requestFromServer.getImageApi(img)
    //     .then((res) => {
    //         console.log("image response", res);
    //     })
    //     .catch((err) => console.log("image response error", err.message))
}