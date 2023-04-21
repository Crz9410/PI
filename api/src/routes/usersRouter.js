const { Router } = require("express");

const { getUsersHandler,
    getUserHandler,
    //createUserHandler
} = require("../handlers/usersHandlers");

const usersRouter = Router();

usersRouter.get("/search", getUsersHandler);

usersRouter.get("/", getUsersHandler);

usersRouter.get("/:id", getUserHandler);

// usersRouter.post("/", createUserHandler);

module.exports = usersRouter;