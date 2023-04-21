const { createUser, getAllCountries, getCountryById, searchCountryByName } = require("../controllers/usersController");
const axios = require ("axios");

const getUsersHandler = async (req, res) => {
    try {
        // Obtener el nombre del país de los parámetros de la URL
        const { name } = req.query;
    
        // Hacer una petición GET al endpoint con el nombre del país
        const response = name?await searchCountryByName(name):await getAllCountries();
        // Devolver la respuesta en formato JSON
         res.json(response);
      } catch (error) {
        // Manejar el error si la petición falla
        res.status(400).json({message:"No se encuentra el pais buscado"})
      }
   
};

    const getUserHandler = async (req, res) => {
        const { id } = req.params;
        const source = isNaN(id) ? "api" : "bdd";
    
        try {
            const user = await getCountryById(id, source);
            res.status(200).json(user)
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    
    };
    


// const createUserHandler = async (req, res) => {
//     const { nombre, id, imagen, continente, capital, subregion, area, poblacion} = req.body
//     try{
//     const newUser = await createUser (nombre, id, imagen, continente, capital, subregion, area, poblacion);
//     res.status(201).json(newUser)
//     } catch (error){
//         res.status(400).json({error: error.message});
//     };
//};


module.exports ={
    getUsersHandler,
    getUserHandler,
    //createUserHandler
};