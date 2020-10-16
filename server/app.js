// para crear sistema de rutas 
const experss = require("express");
// para trabajar con peticiones http
const bodyParser = require("body-parser");

// generamos la aplicacion 
const app = experss();

// traemos la version de la aplicacion 
const {API_VERSION} = require("./config");

//load Routing
//...................


// generamos configuracion del body-parser 
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

// Configure Header Http
//................... 


// Router Basic 
//............................

// exportacion del objeto express 

module.exports = app ; 
 







