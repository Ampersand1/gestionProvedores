const mongoose = require("mongoose");
const proveedorSchema = mongoose.Schema({
    Tipo_Organizacion: {
        //natural(1)-juridica(0)
        type: Boolean,
        required: false,
    },
    Nombre: {
        //nombre del proveedor
        type: String,
        required: true,
    },
    Nombre_Comercial: {
        type: String,
        required: false,
    },
    Codigo: {
        //codigo dado por el admin al proveedor
        type: String,
        required: false,
    },
    Numero_Identificacion: {
        //CC del proveedor
        type: String,
        required: true,
    },
    Correo: {
        type: String,
        required: true,
    },
    Pais: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model("Proveedor", proveedorSchema);