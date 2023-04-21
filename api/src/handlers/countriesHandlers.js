const {  getAllCountries, getCountryById, searchCountryByName } = require("../controllers/countriesController");


const getCountriesHandler = async (req, res) => {
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

    const getCountryHandler = async (req, res) => {
        const { id } = req.params;
        const source = isNaN(id) ? "api" : "bdd";
    
        try {
            const country = await getCountryById(id, source);
            res.status(200).json(country)
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    
    };
    





module.exports ={
    getCountryHandler,
    getCountriesHandler,
    
};