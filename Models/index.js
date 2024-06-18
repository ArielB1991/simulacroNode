const Sequelize= require('sequelize');

const config= require('../Config/db.config');

const sequelize= new Sequelize(
    config.db,
    config.user,
    config.password,
    {
        port: config.port,
        host: config.host,
        dialect: config.dialect
    }
);

const db= {};

//db(Sequelize, sequelize);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.estudiante = require('./Estudiante.Model')(sequelize)

module.exports = db