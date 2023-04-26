import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY"; 
export const FILTER_BY_STATUS = "FILTER_BY_STATUS";

export const getCountries = () => async (dispatch) => {
    try {
        const apiData = await axios.get('https://restcountries.com/v3/all');
        const countries = apiData.data;
        dispatch({ type: GET_COUNTRIES, payload: countries });
    } catch (error) {
        console.error(error);
    }
}
export const getCountry = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(`https://restcountries.com/v3.1/alpha/${id}`);
        const country = apiData.data;
        dispatch({ type: GET_COUNTRY, payload: country });
    }
}
export function filterCountriesByStatus(payload){
return{
    type: 'FILTER_BY_STATUS',
    payload
}
}
// export const filterBysource = () => {
//     dispatch({ type: "FILTER_BY_SOURCE"});
// }