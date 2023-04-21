const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('activity', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        dificultad: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        duracion: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        temporada: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
        },
        body: {
            type:DataTypes.STRING,
            allowNull: false,
        }
    },

    {timestamps: false},
    );
};