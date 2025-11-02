const express = require("express");
const router = express.Router(); 
const usuarioSchema = require("../models/usuarioModel");

router.post("/usuario", (req, res) => {
    const usuario = usuarioSchema(req.body);
    usuario
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get("/usuario", (req, res) => {
    usuarioSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.put("/usuario/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, correo, rol } = req.body;
    usuarioSchema
        .updateOne({ _id: id }, {
            $set: { nombre, correo, rol }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.delete("/usuario/:id", (req, res) => {
    const { id } = req.params;
    usuarioSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});

module.exports = router;
