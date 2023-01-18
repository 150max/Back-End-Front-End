const express = require('express');
const router = express.Router();
//importar os controladores
const avaliacaoController = 
require('../controllers/avaliacaoController')
router.get('/list',avaliacaoController.list);
module.exports = router;