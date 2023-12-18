const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config();
const UseRoutes = require("./routes/user")

const app = express();
const port = process.env.PORT || 3000;

//middleware

app.get("/",(req,res) => {
    res.send("hello word")
})

app.use(express.json());
app.use("/",UseRoutes);

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("connected to mongoDB atlas"))
    .catch((error) => console.error(error))

app.listen(port, () => console.log("el proyecto esta corriendo en el puerto",port));



