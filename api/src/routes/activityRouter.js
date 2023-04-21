const { Router } = require('express');
const { getActivitiesHandler, createActivityHandler } = require('../handlers/activitiesHandler');
const activityRouter = Router();

activityRouter.post("/",createActivityHandler )
activityRouter.get("/", getActivitiesHandler);
module.exports = activityRouter;