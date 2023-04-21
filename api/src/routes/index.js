const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const usersRouter = require("./usersRouter");
const postsRouter = require("./postsRouter");
const router = Router();

router.use("/users", usersRouter);
router.use("/posts", postsRouter);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
