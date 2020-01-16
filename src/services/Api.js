import axios from 'axios';

const API = axios.create({
    baseURL: 'http://dataservice.accuweather.com/'
});

const apikey = 'RspEJLaIX59qdAx34Z2Gsc85GAh2UiEu';

export {
    API,
    apikey
}