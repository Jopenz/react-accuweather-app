import { API, apikey } from "./Api";



class CityService {

  searchCity(name) {
    return new Promise((resolve, reject) => {
        const params = { apikey, q: name, language: 'es-ES'}
      API.get(`/locations/v1/cities/search`,{params,crossDomain: true}).then(response => {
        if (response.data) {
          resolve(response.data);
        } else {
          reject();
        }
      });
    });
  }
}
const cityService = new CityService();

export default cityService;