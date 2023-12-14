import express from "express";
import { dirname , join} from 'path'
import { fileURLToPath } from "url";
import path from "path";

// npx nodemon src/index.js

import indexRoutes from './routes/routes.js' //importa las rutas desde routes.js

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url)); // sirve para encontrar direcciones
console.log(join(__dirname,"/views"));// se testea

app.set('view engine', 'ejs'); // configuracion del motor
app.set("views", join(__dirname,'views')); //motor de vistas

app.use(indexRoutes);//rutas

app.use(express.static(join(__dirname, 'public'))); // direccion de los archivos estaticos


app.listen(3000)
console.log("el server esta corriendo en el puerto", 3000);