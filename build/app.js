"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const expressHandlebars = require('express-handlebars');
const hbs = expressHandlebars.create({ defaultLayout: "main" });
const app = (0, express_1.default)();
//const expressHandlebars: ExpressHandlebars = create({defaultLayout: "main", extname: ".hbs"});
//console.log(expressHandlebars);
//app.engine('handlebars', require('express-handlebars').create({defaultLayout: "main"}).engine);
app.engine('handlebars', hbs.engine);
app.set('view cache', true);
app.set('view engine', 'handlebars');
app.get('/', (req, res) => {
    res.render("helloWorld.handlebars", { message: "Mundo!" });
});
app.get('/saluda', (req, res) => {
    res.render("saluda.handlebars", { datos: [{ nombre: "Jano", apellido: "Soler" }, { nombre: "Pilar", apellido: "Espinosa" }, { nombre: "Aarón", apellido: "Bellés" }] });
});
app.listen(3000, () => {
    console.log('App escuchando el puerto 3000...');
});
