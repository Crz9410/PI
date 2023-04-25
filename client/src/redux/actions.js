import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";

export const getCountries = () => async (dispatch) => {
    try {
        const apiData = await axios.get('https://restcountries.com/v3/all');
        const countries = apiData.data;
        // console.log(countries[0],"lll")
        dispatch({ type: GET_COUNTRIES, payload: countries });
    } catch (error) {
        console.error(error);
    }
}