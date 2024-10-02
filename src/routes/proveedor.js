const express = require("express");
const router = express.Router(); //manejador de rutas de express
const proveedorSchema = require("../models/proveedor");

//Nuevo proveedor
router.post("/proveedor", (req, res) => {
    const proveedor = proveedorSchema(req.body);
    proveedor.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({messahe:error}))
});
module.exports = router;