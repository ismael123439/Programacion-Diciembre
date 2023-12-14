import express from "express";
import { dirname , join} from 'path'
import { fileURLToPath } from "url";
// npx nodemon src/index.js
import path from "path";

import { MongoClient, ServerApiVersion } from "mongodb"
const uri = "mongodb+srv://ismaelmed500:<ismaelmed500>@cluster0.xz7sze9.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

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