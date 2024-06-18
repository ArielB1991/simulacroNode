const {DataTypes}= require('sequelize');

module.exports= (sequelize)=> {
    const estudiante= sequelize.define('Estudiante',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nombre:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        apellido:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        edad:{
            type: DataTypes.INTEGER(20),
            allowNull: true,
        },
        email:{
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    });
return estudiante;
};