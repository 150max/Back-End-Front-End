
var utilizador = require('../model/utilizador');
var sequelize = require('../model/database');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const config = require('../config');

const controllers = {}
sequelize.sync()

/* LIST View Leaderboard ---------------------- */
controllers.admin = async (req,res) => {
  const data= await sequelize.query("select * from utilizadors",{type: sequelize.QueryTypes.SELECT})
      res.json({data});
}
/* LIST View Leaderboard ---------------------- */
controllers.pinsdeumgajo = async (req,res) => {
  const { email,avatar} = req.params;
  sequelize.query("update utilizadors set avatar='"+ avatar + "' where email='"+ email + "'")
  const data= await sequelize.query("select nivel_pg, latitude_pg, longitude_pg, data_pg, hora_pg from pins_guardados where utilizadorid_pg = (select id from utilizadors where email = '"+ email + "') order by data_pg desc, hora_pg desc",{type: sequelize.QueryTypes.SELECT})
      res.json({data});
}
/* LIST View Leaderboard ---------------------- */
controllers.leaderboard = async (req,res) => {
    sequelize.query(`CREATE OR REPLACE VIEW leaderboard as leaderboard`);
    const data= await sequelize.query("SELECT*FROM leaderboard",{type: sequelize.QueryTypes.SELECT})
        res.json({data});
}
/* LIST ---------------------- */
controllers.list= async (req, res) => {
const data = await utilizador.findAll()
.then(function(data){
return data;
})
.catch(error => {
return error;
}); 
res.json({data});
}

/* LOGIN ---------------------- */
controllers.login = async (req,res) => {
    const { email, pass} = req.params;
    sequelize.query("select login('"+ email + "','"+pass+"');")
    .then(data => {
      res.status(200)
        .json(data);
    })
    .catch(error => {
        console.log(error);
        next();
    })
}
/* Register ---------------------- */
controllers.register = async (req,res) => {
    const { pnome,unome,avatar,email,pass} = req.params;
    sequelize.query("select insere_verifica('"+ pnome + "','"+unome+"','"+ avatar + "','"+email+"','"+pass+"');")
    .then(data => {
      res.status(200)
        .json(data);
    })
    .catch(error => {
        console.log(error);
        next();
    })
}
/* Create ---------------------- */
controllers.create = async (req,res) => {
    // data
    const { pnome,unome,avatar,email,pass
    } = req.body;
    // create
    const hash =await bcryptjs.hash(pass,10);
    const data = await utilizador.create({
    pnome:pnome,
    unome:unome,
    avatar:avatar,
    email:email,
    pass:hash,
    ponto:ponto
    })
    .then(function(data){
    return data;
    })
    .catch(error =>{
    console.log("Erro: "+error)
    return error;
    })
    // return res
    res.status(200).json({
    success: true,
    message:"Registado",
    data: data
    });
    }
    /* BUSCAR para EDITAR ----------------------------------------------- */
controllers.get = async (req,res) => {
    const { id } = req.params;
    const data = await utilizador.findAll({
    where: { id: id }
    })
    .then(function(data){
    return data;
    })
    .catch(error =>{
    return error;
    })
    res.json(data);
    }
    /* EDITAR --------------------------------------------------- */
controllers.update = async (req,res) => {
    // parameter get id
    const { id } = req.params;
    // parameter POST
    const {pnome,unome,avatar,email,pass } = req.body;
    // Update data
    const data = await utilizador.update({
        pnome:pnome,
        unome:unome,
        avatar:avatar,
        email:email,
        pass:pass,
        ponto:ponto
    },
    {
    where: { id: id}
    })
    .then( function(data){
    return data;
    })
    .catch(error => {
    return error;
    }) 
    res.json({success:true, data:data, message:"Updated successful"});
    }
    controllers.delete = async (req, res) => {
        // parâmetros por post
        const { id } = req.body;
        // delete por sequelize
        const del = await utilizador.destroy({
        where: { id: id}
        })
        res.json({success:true,deleted:del,message:"Deleted successful"});
        }
module.exports= controllers;
