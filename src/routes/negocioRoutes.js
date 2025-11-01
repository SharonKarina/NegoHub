const express = require("express");
const router = express.Router(); //Manejador de rutas de express
const negocioSchema = require("../models/negocioModel");

//Nuevo negocio
router.post("/negocio", (req, res) => {
    const negocio = negocioSchema(req.body);
    negocio
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
