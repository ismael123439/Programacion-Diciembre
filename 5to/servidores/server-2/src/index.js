import express from "express";
import { dirname , join} from 'path'
import { fileURLToPath } from "url";
import mongoose from "mongoose";
// npx nodemon src/index.js
import path from "path";

const port = process.env.PORT || 3000

import indexRoutes from './routes/routes.js' //importa las rutas desde routes.js

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url)); // sirve para encontrar direcciones
console.log(join(__dirname,"/views"));// se testea

app.set('view engine', 'ejs'); // configuracion del motor
app.set("views", join(__dirname,'views')); //motor de vistas

app.use(indexRoutes);//rutas

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("connected to mongoDB atlas"))
    .catch((error) => console.error(error))

app.use(express.static(join(__dirname, 'public'))); // direccion de los archivos estaticos


app.listen(port)
console.log("el server esta corriendo en el puerto", port);