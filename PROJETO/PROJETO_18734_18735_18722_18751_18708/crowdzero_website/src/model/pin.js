var Sequelize = require('sequelize');
var sequelize = require('./database');

// importa o modelo – chave forasteira utilizadorId
var utilizador = require('./utilizador');
var pin = sequelize.define('pin', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nivel: Sequelize.INTEGER,
    upvote: Sequelize.INTEGER,
    downvote: Sequelize.INTEGER,
    latitude: Sequelize.FLOAT,
    longitude: Sequelize.FLOAT,
    datap: Sequelize.DATEONLY,
    horap: Sequelize.TIME,
    utilizadorId: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
            model: utilizador,
            key: 'id'
        }
    }
},{timestamps: false});

pin.belongsTo(utilizador)
module.exports = pin


