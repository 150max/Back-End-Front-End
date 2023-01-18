const express = require('express');
const router = express.Router();
const middleware = require('../middleware');
//importar os controladores
const utilizadorController = 
require('../controllers/utilizadorController')
/*router.post('/register',utilizadorController.register);
router.get('/login',utilizadorController.login);*/
router.get('/list',utilizadorController.list);
router.get('/admin',utilizadorController.admin);
router.get('/leaderboard',utilizadorController.leaderboard);
router.get('/pinsdeumgajo/:email/:avatar',utilizadorController.pinsdeumgajo);
router.get('/get/:id',utilizadorController.get);
router.post('/create',utilizadorController.create);
router.post('/update/:id', utilizadorController.update);
router.post('/delete', utilizadorController.delete);
router.get('/login/:email/:pass', utilizadorController.login);
router.get('/register/:pnome/:unome/:avatar/:email/:pass', utilizadorController.register);
module.exports = router;