import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://wz-test-app-api.herokuapp.com/'
});

export default axiosClient;