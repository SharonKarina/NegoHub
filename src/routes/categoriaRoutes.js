const express = require("express");
const router = express.Router(); //Manejador de rutas de express
const negocioSchema = require("../models/categoriaModel");

router.post("/categoria", (req, res) => {
    const categoria = categoriaSchema(req.body);
    categoria
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get("/categoria", (req, res) => {
    categoriaSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.put("/categoria/:id", (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    categoriaSchema
        .updateOne({ _id: id }, {
            $set: { nombre }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.delete("/categoria/:id", (req, res) => {
    const { id } = req.params;
    categoriaSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});

module.exports = router;
