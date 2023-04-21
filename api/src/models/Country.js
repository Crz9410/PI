const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true,
     defaultValue: DataTypes.UUIDV4
    },
    imagen: {
      type: DataTypes.STRING,
      // //
    },
    continente: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    poblacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    // created: {
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: true,
    // },
  },
  {timestamps: false},
  );
};
