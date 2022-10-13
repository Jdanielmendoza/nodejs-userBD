//import  Express  from 'express';
//import path, { dirname } from 'path';
//import bodyParser from 'body-parser';

const express = require('express');
const path = require('path'); // trabaja con las rutas del sistema operativo
const bodyParser = require('body-parser'); 

const app = express(); 


//setting 

app.set('port', process.env.PORT || 3000);   //configuramos el puerto
app.set('view engine','ejs');  // motor de plantilla que vamos a utilizar
app.set('views', path.join(__dirname,'../app/views'));   /* indica donde estan todas
 mis vistas (html,css,ejs...etc   ) , le estoy diciendo en donde estan las carpetas de 
 las vistas para que luego el servidor las encuentre y las pueda renderizar al navegador*/

//middleware

// resive los datos del form por sus atributos name 
app.use(bodyParser.urlencoded({extended:false})); /* extended : false , indica que 
no le vamos a pasar imagenes..etc   si no solo texto*/

module.exports = app; 
//export default app; 
/* exportamos app ya que solo es un archivo de configuracion*/