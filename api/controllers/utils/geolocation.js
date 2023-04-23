import axios from "axios";

const newRequest = axios.create({
    baseURL: `https://nominatim.openstreetmap.org`,
    withCredentials: true
});

export default newRequest;