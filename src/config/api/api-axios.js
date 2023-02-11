import { BASE_URL } from "../axios";

export const IMAGE_DETECTION = 'image/';
export const VIDEO_DETECTION = 'image/video/';
export const LIVE_STATUS = 'image/status/';

export function getImageApi(image) {
    return BASE_URL.post(IMAGE_DETECTION);
}

export function getVideoApi(video) {
    return BASE_URL.post(VIDEO_DETECTION);
}

export function getLiveStatusApi(liveStatus) {
    return BASE_URL.post(LIVE_STATUS);
}