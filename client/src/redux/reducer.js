import { GET_COUNTRIES, GET_COUNTRY, FILTER_BY_STATUS } from "./actions";

const initialState= {
    countries: [],
    allCountries: []
};

function rootReducer(state = initialState,action){
    switch(action.type){
        case GET_COUNTRIES:
            return{
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
            case FILTER_BY_STATUS:
                const allCountries = state.allCountries;
                // console.log(allCountries[0],"ggg")
                const statusFiltered = action.payload === 'All' ? allCountries : allCountries.filter(el => el.continents[0] === action.payload)
                return{
                    ...state,
                    countries: statusFiltered

                }
                default:
                    return state;
    }
}

export default rootReducer;