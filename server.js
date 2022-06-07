
//creando un servidor

//Cualquiera de los módulos que se intente incluir mediante require debe instalarse de forma local.
//Se importan todos los paquetes necesarios, en este caso los que instalamos anteriormente
const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');

//se almacena la ruta de su carpeta public dentro de una variable

andromeda
let initial_path =  path.join(__dirname, "");

//se crea un express servidor y se estable la ruta de su carpeta public en una ruta estatica
// se utiliza tambien app.use(fileupload())para permitir la carga de archivos

const app = express();
app.use(express.static(initial_path));
app.use(fileupload());


app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "home.html"));
} )

app.listen("3000", () => {
    console.log('listening.....');
})