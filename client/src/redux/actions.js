import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";
export const FILTER_BY_STATUS = "FILTER_BY_STATUS";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
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

export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}


export function filterCountriesByStatus(payload) {
    return {
        type: 'FILTER_BY_STATUS',
        payload
    }
}
export function filterCreated(payload) {
    return {
        tyoe: 'FILTER_CREATED',
        payload
    }
}