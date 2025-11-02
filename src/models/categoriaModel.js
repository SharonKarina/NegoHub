const mongoose = require("mongoose"); 

const categoriaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: ,
    }
});

module.exports = mongoose.model("categoria", categoriaSchema);