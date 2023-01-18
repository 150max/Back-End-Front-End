const express = require('express');
const app = express();
const middleware = require('./middleware');
const utilizadorRouters = require('./routes/utilizadorRoute.js')
const pinRouters = require('./routes/pinRoute.js')
const pins_guardadosRouters = require('./routes/pins_guardadosRoute.js')
const avaliacaoRouters = require('./routes/avaliacaoRoute.js')

app.set('port', process.env.PORT|| 3000);

app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
    }); 
app.use('/utilizador',utilizadorRouters)
app.use('/pin',pinRouters)
app.use('/pins_guardados',pins_guardadosRouters)
app.use('/avaliacao',avaliacaoRouters)

app.listen(app.get('port'),()=>{
console.log("Start server on port "+app.get('port'))
})

//Rota
