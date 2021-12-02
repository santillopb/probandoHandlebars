const db = require('../services/db.js');

exports.insertaUsuario = async(req, res) => {
    await db.query(`INSERT INTO user(name, firstSurname, secondSurname) VALUES ("${req.body.name}", "${req.body.firstSurname}", "${req.body.secondSurname}")`);
    res.redirect("/users");
}

exports.datosUsuarios = async (req, res)=>{
    let datos = await db.query('SELECT * FROM user');
    res.send(datos);
}