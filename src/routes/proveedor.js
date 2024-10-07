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
//obtener los proveedores
router.get("/proveedores", (req, res) => {
    proveedorSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
});
//obtener un proveedor por código
router.get("/proveedor/:id", (req, res) => {
    const {id} = req.params;
    proveedorSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
});
//modificar un proveedor por código
router.put("/proveedor/:id", (req, res) => {
    const {id} = req.params;
    const { tipo_organizacion, nombre, nombre_comercial, numero_identificacion, telefono, correo, pais } = req.body;
    proveedorSchema
    .updateOne({_id:id}, {
        $set: {tipo_organizacion, nombre, nombre_comercial, numero_identificacion, telefono, correo, pais}
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});
//eliminar un proveedor por código
router.delete("/proveedor/:id", (req, res) => {
    const {id} = req.params;
    proveedorSchema
    .findByIdAndDelete(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
});
module.exports = router;