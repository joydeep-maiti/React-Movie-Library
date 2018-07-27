import axios from 'axios';

const instance = axios.create({
    baseURL: "https://movie-libary.firebaseio.com/"
});

export default instance;