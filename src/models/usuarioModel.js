const mongoose = require("mongoose"); 

const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: ,
    },
    correo: {
        type: String,
        required: ,
    },
    contraseña: {
        type: String,
        required: ,
    },
    rol: {
        type: ,
        required: ,
        unique: ,
    }
});

module.exports = mongoose.model("Usuario", usuarioSchema);