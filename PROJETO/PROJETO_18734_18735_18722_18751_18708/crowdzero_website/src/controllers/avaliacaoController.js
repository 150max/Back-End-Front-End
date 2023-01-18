var avaliacao = require('../model/avaliacao');
var sequelize = require('../model/database');
const controllers = {}
sequelize.sync()
controllers.list= async (req, res) => {
const data = await avaliacao.findAll()
.then(function(data){
return data;
})
.catch(error => {
return error;
}); 
res.json({data});
}

module.exports= controllers;