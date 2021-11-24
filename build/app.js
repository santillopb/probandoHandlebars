"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const expressHandlebars = require('express-handlebars');
const hbs = expressHandlebars.create({ defaultLayout: "main" });
const path = require('path');
const router = require("../routes/routes.js");
const app = (0, express_1.default)();
app.engine('handlebars', hbs.engine);
app.set('view cache', true);
app.set('view engine', 'handlebars');
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path.join(__dirname, '..', 'public')));
app.use("/", router);
app.listen(3000, () => {
    console.log('App escuchando el puerto 3000...');
});
