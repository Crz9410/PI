const { Country } = require("../db");
const axios = require ("axios");
const { Op } = require('sequelize');
// const createUser = async (nombre, id, imagen, continente, capital, subregion, area, poblacion) => 
//  await Country.create({nombre, id, imagen, continente, capital, subregion, area, poblacion});
 
const cleanArray = (arr) =>
arr.map((elem)=>{
    return {
        id: elem.cca3,
        nombre: elem.name.common,
        imagen: elem.flags[0],
        continente: elem.continents[0],
        capital: elem.capital,
        subregion:elem.subregion,
        area: elem.area,
        poblacion : elem.population,
    };
});
const getCountryById = async (id, source) => {
    const countries = source === "api" ?
    (await axios.get(`https://restcountries.com/v3.1/alpha/${id}`)).data 
    : await Country.findByPk(id);
    console.log(id,source, "*");
    return cleanArray(countries);
};
const searchCountryByName = async (name) => {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    console.log(response, typeof response, "ZZZZ+**")
    return cleanArray(response.data);
};

 const getAllCountries = async () =>{
    // buscar en la bdd
    const databaseUsers = await Country.findAll();

    // buscar en la api
    const apiUserRaw = (
        await axios.get("https://restcountries.com/v3/all")
    ).data
    const apiUsers = cleanArray(apiUserRaw);
    // unificar 
    return [...databaseUsers, ...apiUsers];
};



module.exports = { getAllCountries, getCountryById, searchCountryByName}; //createUser