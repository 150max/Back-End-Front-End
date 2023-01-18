const express = require('express');
const router = express.Router();
//importar os controladores
const pinController = 
require('../controllers/pinController')
router.get('/list',pinController.list);
router.get('/get/:id',pinController.get);
router.post('/create',pinController.create);
router.post('/update/:id', pinController.update);
router.post('/delete', pinController.delete);
router.get('/inserir/:email/:nivel/:latitude/:longitude', pinController.inserir);
router.get('/inserir_up_down/:email/:id/:upvote/:downvote', pinController.inserir_up_down);
module.exports = router;