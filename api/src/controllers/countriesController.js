const { Country } = require("../db");
const axios = require("axios");
const { Op } = require('sequelize');


const cleanArray = (arr) =>

    arr.map((elem) => {
        return {
            id: elem.cca3,
            nombre: elem.name.common,
            imagen: elem.flags[0],
            continente: elem.continents[0],
            capital: elem.capital,
            subregion: elem.subregion,
            area: elem.area,
            poblacion: elem.population,
        };
    });
const getCountryById = async (id, source) => {
    const countries = source === "api" ?
        (await axios.get(`https://restcountries.com/v3.1/alpha/${id}`)).data
        : await Country.findByPk(id);
    return cleanArray(countries);
};
const searchCountryByName = async (name) => {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    return cleanArray(response.data);
};

const getAllCountries = async () => {
    // buscar en la bdd
    const databaseCountries = await Country.findAll();

    // buscar en la api
    const apiCountryRaw = (
        await axios.get("https://restcountries.com/v3/all")
    ).data
    const apiCountries = cleanArray(apiCountryRaw);

    // unificar 
    return [...databaseCountries, ...apiCountries];
};



module.exports = { getAllCountries, getCountryById, searchCountryByName }; 