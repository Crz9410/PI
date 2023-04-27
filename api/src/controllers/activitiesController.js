const { Activity } = require("../db");

const getAllActivities = async() => await Activity.findAll();
 const createActivity = async (name, dificultad, duracion, temporada, id, body) => 
 
 {if(name && dificultad && duracion && temporada && id){

   await Activity.create({name, dificultad, duracion, temporada, id, body});
 }; 
 }
module.exports ={getAllActivities, createActivity};
