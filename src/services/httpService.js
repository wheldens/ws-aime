import axios from 'axios';
import {toast} from "react-toastify";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status > 400 && error.response.status < 500;

    if (!expectedError) {
        console.log('An unexpected is accured: ', error);
        toast('An unexpected is accured');
    }
    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete

}
