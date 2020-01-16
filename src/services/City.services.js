import { API, apiKey } from "./Api";



class CityService {

  searchCity(name) {
    return new Promise((resolve, reject) => {
        const params = { apiKey, q: name, language: 'es-ES'}
      API.get(`/locations/v1/cities/search`,params).then(response => {
        if (response.data.user) {
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