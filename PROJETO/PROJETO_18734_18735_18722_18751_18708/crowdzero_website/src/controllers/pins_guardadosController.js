var pins_guardados = require('../model/pins_guardados');
var sequelize = require('../model/database');
const controllers = {}
sequelize.sync()
controllers.list= async (req, res) => {
const data = await pins_guardados.findAll()
.then(function(data){
return data;
})
.catch(error => {
return error;
}); 
res.json({data});
}
controllers.get = async (req,res) => {
    const { id } = req.params;
    const data = await pins_guardados.findAll({
    where: { id_pg: id }
    })
    .then(function(data){
    return data;
    })
    .catch(error =>{
    return error;
    })
    res.json({ success: true, data: data });
    }
    /* LIST View Leaderboard ---------------------- */
controllers.todospg = async (req,res) => {
    const data= await sequelize.query("select * from pins_guardados",{type: sequelize.QueryTypes.SELECT})
        res.json({data});
  }
module.exports= controllers;