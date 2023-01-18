var Sequelize = require('sequelize');
var sequelize = require('./database');
var avaliacao = sequelize.define('avaliacao', {
utilizadorid_av: {
type: Sequelize.INTEGER,
primaryKey: true,
},
pinid_av: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    }
},
{
timestamps: false,
});
module.exports = avaliacao