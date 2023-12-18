const express = require('express')
const path = require('path');
const app = express()
const port = 3000

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://d47303819:784TftJ4RZIBild0@cluster0.7fzsg37.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run(res) {
  try {
    await client.connect();

    await client.db("admin").command({ ping: 1 });

    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const database = client.db('Database_test_users');
    const collection = database.collection('River');
    const datos = await collection.find({}).toArray();
   
    const newUsers = [
      {
        name: "el pepe",
        email: "pepe@momero.com",
        age: 38,
        hobbies: ["databases", "ver momos", "hornear momasos"]
      }
    ];
    const result = await collection.insertMany(newUsers);
    console.log(`Inserted ${result.insertedCount} documents`);
   res.json(datos);

  } finally {

    await client.close();
  }
}

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('insertar_datos')
})

app.post('/insertar-datos', async (req, res) => {
  await insertData(req.body).catch(console.dir);
  res.send('Datos insertados correctamente');
});

app.get('/obtener-datos', async (req, res) => {
  await run(res).catch(console.dir);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})