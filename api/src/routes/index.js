const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRouter = require("./countriesRouter");
const activityRouter = require("./activityRouter");
const router = Router();

router.use("/countries", countriesRouter);
router.use("/activities", activityRouter);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
