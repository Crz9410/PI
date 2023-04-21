const { getAllActivities, createActivity } = require("../controllers/activitiesController");

const getActivitiesHandler = async (req, res) => {
    try {
        const allActivities = await getAllActivities();
        res.json(allActivities);
    } catch (error) {
        res.status(400).json({error: error.message});
    }

    
};
const createActivityHandler = async (req, res) => {
    const { name, dificultad, duracion, temporada, id, body} = req.body
    try{
    const newActivity = await createActivity(name, dificultad, duracion, temporada, id, body);
    res.status(201).json(newActivity)
    } catch (error){
        res.status(400).json({error: error.message});
    };
};
module.exports = {getActivitiesHandler, createActivityHandler};