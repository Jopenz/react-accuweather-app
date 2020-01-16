import * as Actions from "../actions";

const initialState = {
    cities: []
};

const homeReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.SET_CITIES: {
            return {
                ...state,
                cities: action.payload
            };
        }
        case Actions.SEARCH_CITY:
        default: {
            return state;
        }
    }
};
export default homeReducer;