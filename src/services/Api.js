import axios from 'axios';

const API = axios.create({
    baseURL: 'http://dataservice.accuweather.com/'
});

const apikey = process.env.REACT_APP_API_KEY

export {
    API,
    apikey
}