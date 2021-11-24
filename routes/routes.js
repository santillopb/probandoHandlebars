const express = require('express');

const router = express.Router();


router.post("/alta", (req, res)=>{
    res.render("saluda.handlebars", {datos:{nombre: req.body.nombre, apellido: req.body.apellido}})
})

module.exports = router;
