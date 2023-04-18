import axios from "axios";

const newRequest = axios.create({
    baseURL: "http://localhost:5001/api/emp",
    withCredentials: true
});

export default newRequest;
