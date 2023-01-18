var Sequelize = require('sequelize');
var sequelize = require('./database');
var pins_guardados = sequelize.define('pins_guardados', {
id_pg: {
type: Sequelize.INTEGER,
primaryKey: true,
autoIncrement: true,
},
nivel_pg: Sequelize.INTEGER,
latitude_pg: Sequelize.FLOAT,
longitude_pg: Sequelize.FLOAT,
data_pg: Sequelize.DATEONLY,
hora_pg: Sequelize.TIME,
utilizadorid_pg: Sequelize.INTEGER
},
{
timestamps: false,
});
module.exports = pins_guardados