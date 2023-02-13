import axios from "axios";
import { BASE_URL } from "../axios";

export const IMAGE_DETECTION = 'image/';
export const VIDEO_DETECTION = 'image/video/';
export const LIVE_STATUS = 'image/status/';

export function getImageApi(image) {
    return axios.post("http://192.168.0.138:8000/image/", image
        , {
            headers: {
                'Content-Type': 'multipart/form-data',
                Accept: 'application/json',
            }
        }
    );
}

export function getVideoApi(video) {
    return BASE_URL.post(VIDEO_DETECTION);
}

export function getLiveStatusApi(liveStatus) {
    return BASE_URL.post(LIVE_STATUS);
}