const mongoose = require("mongoose");
const proveedorSchema = mongoose.Schema({
    tipo_organizacion: {
        //natural(1)-juridica(0)
        type: Boolean,
        required: false,
    },
    nombre: {
        //nombre del proveedor
        type: String,
        required: true,
    },
    nombre_comercial: {
        type: String,
        required: false,
    },
    numero_identificacion: {
        //CC del proveedor
        type: String,
        required: true,
    },
    telefono: {
        //codigo dado por el admin al proveedor
        type: String,
        required: false,
    },
    correo: {
        type: String,
        required: true,
    },
    pais: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model("proveedor", proveedorSchema);