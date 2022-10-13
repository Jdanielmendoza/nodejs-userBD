
//import app from './config/server.js';
//almacena toda la configuracion de express o el servidor
const app = require('./config/server.js');

// estructura de todas las rutas del servidor
require('./app/routes/news.js')(app);

//starting the server 
 
app.listen(app.get('port'),() =>{
    console.log("server on port " ,app.get('port'));
});






