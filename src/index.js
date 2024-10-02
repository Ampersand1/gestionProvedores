const parser = require("body-parser");
const express = require('express');
const app = express();
const proveedorRoutes = require("./routes/proveedor");
const mongoose = require("mongoose");
require('dotenv').config();
app.use(parser.urlencoded({ extended: false })); //permite leer los datos que vienen en la petición
app.use(parser.json()); // transforma los datos a formato JSON
const port = 3000;


//Gestion de rutas usando el middleware
app.use("/api", proveedorRoutes);

//Conexion a la base de datos
mongoose
.connect(process.env.MONGO_URI)
.then(()=> console.log("Conexión exitosa"))
.catch((error) => console.log(error));

//conexxion al puerto 
app.listen(port, () => {
    console.log(`La app se escucha desde el puerto ${port}`)
});
