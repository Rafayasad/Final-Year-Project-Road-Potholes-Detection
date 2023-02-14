import axios from 'axios';
import * as requestFromServer from './api-axios';

export const fetchImageApis = async (data) => {
    return fetch(`http://192.168.0.138:8000/image/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
            Accept: 'application/json',
        },
        body: data
    });
}

export const fetchVideoApis = async (data) => {
    return fetch(`http://192.168.0.138:8000/image/video/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
            Accept: 'application/json',
        },
        body: data
    });
}
