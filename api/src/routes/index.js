const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const usersRouter = require("./usersRouter");
const activityRouter = require("./activityRouter");
const router = Router();

router.use("/users", usersRouter);
router.use("/activities", activityRouter);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
