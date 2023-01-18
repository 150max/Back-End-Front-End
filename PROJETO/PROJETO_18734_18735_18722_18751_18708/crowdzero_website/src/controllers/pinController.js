var pin = require('../model/pin');
var utilizador = require('../model/utilizador');
var sequelize = require('../model/database');
const controllers = {}
sequelize.sync()
controllers.list= async (req, res) => {
const data = await pin.findAll()
.then(function(data){
return data;
})
.catch(error => {
return error;
}); 
res.json({data});
}
/* Inserir Upvote e Downvote ---------------------- */
controllers.inserir_up_down = async (req,res) => {
    const { email,id,upvote,downvote} = req.params;
    sequelize.query("select pin_vote_update('"+email+"','"+id+"','"+ upvote + "','"+downvote+"');")
    .then(data => {
      res.status(200)
        .json(data);
    })
    .catch(error => {
        console.log(error);
        next();
    })
}
/* Inserir Pin ---------------------- */
controllers.inserir = async (req,res) => {
    const { nivel,latitude,longitude,email} = req.params;
    sequelize.query("select insere_verifica_pin('"+email+"','"+ nivel + "','"+latitude+"','"+longitude+"');")
    .then(data => {
      res.status(200)
        .json(data);
    })
    .catch(error => {
        console.log(error);
        next();
    })
}
/* REGISTAR ---------------------- */
controllers.create = async (req,res) => {
    // data
    const { nivel,upvote,downvote,latitude,longitude,datap,horap,utilizador
    } = req.body;
    // create
    const data = await pin.create({
    nivel:nivel,
    upvote:upvote,
    downvote:downvote,
    latitude:latitude,
    longitude:longitude,
    datap:datap,
    horap:horap,
    utilizadorid: utilizador
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
    const data = await pin.findAll({
    where: { id: id },
    include: [ utilizador ]
    })
    .then(function(data){
    return data;
    })
    .catch(error =>{
    return error;
    })
    res.json({ success: true, data: data });
    }
    /* EDITAR --------------------------------------------------- */
controllers.update = async (req,res) => {
    // parameter get id
    const { id } = req.params;
    // parameter POST
    const {nivel,upvote,downvote,latitude,longitude,datap,horap, utilizador } = req.body;
    // Update data
    const data = await pin.update({
        nivel:nivel,
        upvote:upvote,
        downvote:downvote,
        latitude:latitude,
        longitude:longitude,
        datap:datap,
        horap:horap,
        utilizadorid: utilizador
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
        const del = await pin.destroy({
        where: { id: id}
        })
        res.json({success:true,deleted:del,message:"Deleted successful"});
        }
module.exports= controllers;
