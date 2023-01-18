const express = require('express');
const router = express.Router();
//importar os controladores
const pins_guardadosController = 
require('../controllers/pins_guardadosController')
router.get('/list',pins_guardadosController.list);
router.get('/get/:id',pins_guardadosController.get);
router.get('/todospg',pins_guardadosController.todospg);
module.exports = router;