var Sequelize = require('sequelize');
var sequelize = require('./database');
var utilizador = sequelize.define('utilizador', {
pnome: Sequelize.STRING,
unome: Sequelize.STRING,
avatar: Sequelize.INTEGER,
email: Sequelize.STRING,
pass: Sequelize.STRING,
ponto: Sequelize.INTEGER
},
{
timestamps: false,
});
    
module.exports = utilizador
