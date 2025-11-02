const mongoose = require("mongoose"); //importa librebía Mongoose para gestionar la base de datos MongoDB

//Esquema que define la estructura de doucumentos para la tabla 'usuario'
const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String, //Tipo de dato
        required: true, //Campo obligatorio
    },
    correo: {
        type: String, //Tipo de dato
        required: true,  //Campo obligatorio
    },
    contraseña: {
        type: String, //Tipo de dato
        required: true, //Campo obligatorio
    },
    rol: {
        type: ,
        required: ,
        unique: ,
    }
});

//Exporta el modelo para poder usarlo en rutas
module.exports = mongoose.model("Usuario", usuarioSchema);