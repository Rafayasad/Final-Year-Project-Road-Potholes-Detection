import axios from 'axios';
import * as requestFromServer from './api-axios';

export const fetchImageApi = async data => {
  console.log('hello==>', data);

  return fetch('http://127.0.0.1:8000/image/', {
    method: 'POST',
    headers: {
      'Content-Type': 'multiple/form-data',
      Accept: 'application/json',
    },
    body: data,
  })
  // return await axios.post(
  //   'http://127.0.0.1:8000/image/',
  //   data,
  //   {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //       accept: 'application/json',
  //     },
  //   },
  // );
  // return requestFromServer.getImageApi(img)
  //     .then((res) => {
  //         console.log("image response", res);
  //     })
  //     .catch((err) => console.log("image response error", err.message))
};
