

import { CityService } from '../../../services';
export const SEARCH_CITY = "[CITY] SEARCH";
export const SET_CITIES = "[CITY] SEARCH";


export function searchCity(name) {
    return async dispatch => {
        dispatch({
            type: SEARCH_CITY
        })
        return dispatch => {
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
}