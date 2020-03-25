

import { CityService } from '../../../services';

export const SEARCH_CITY = "[CITY] SEARCH ACTION";
export const SET_CITIES = "[CITY] SET SEARCH";


export function searchCity(name) {
    return async dispatch => {
        dispatch({
            type: SEARCH_CITY
        })
        CityService.searchCity(name).then(cities => {
            dispatch({
                type: SET_CITIES,
                payload: cities
            })
        }).catch(err => {
            console.error(err);
        })
    }
}