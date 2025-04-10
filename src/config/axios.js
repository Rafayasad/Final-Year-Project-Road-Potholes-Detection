import axios from "axios"

export const BASE_URL = axios.create({
  baseURL: "http://192.168.0.138:8000/",
})