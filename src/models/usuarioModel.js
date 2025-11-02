const mongoose = require("mongoose"); 

const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    },
    contraseña: {
        type: String,
        required: true,
    },
    rol: {
        type: ,
        required: ,
        unique: ,
    }
});

module.exports = mongoose.model("Usuario", usuarioSchema);