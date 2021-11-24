const express = require('express');
const path = require('path');

const router = express.Router();
const controlador = require("../build/controlador.js");

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'public', 'indice.html'));
})

router.get("/usuarios", controlador.datosUsuarios);

router.post("/alta", controlador.insertaUsuario);

module.exports = router;
