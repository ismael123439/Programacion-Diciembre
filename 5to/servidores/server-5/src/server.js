const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes/app")

app.get("/",(req,res) =>{
    res.send("perro") 
});

app.listen(port, console.log("el proyecto esta corriendo en el puerto",port));

