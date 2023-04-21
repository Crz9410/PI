const { Router } = require("express");

const { getCountriesHandler,
    getCountryHandler,
} = require("../handlers/countriesHandlers");

const countriesRouter = Router();

countriesRouter.get("/search", getCountriesHandler);

countriesRouter.get("/", getCountriesHandler);

countriesRouter.get("/:id", getCountryHandler);


module.exports = countriesRouter;