const db = require('../services/db.js');

exports.insertaUsuario = async(req, res) => {
    await db.query(`INSERT INTO usuario(nombre, primer_apellido, segundo apellido) VALUES ("${req.body.nombre}", "${req.body.primer_apellido}", "${req.body.segundo_apellido}")`);
    res.redirect("/usuarios");
}

exports.datosUsuarios = async (req, res)=>{
    let datos = await db.query('SELECT * FROM usuario');
    res.send(datos);
}