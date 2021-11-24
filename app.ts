import express from 'express';

const expressHandlebars = require('express-handlebars');
const hbs = expressHandlebars.create({defaultLayout: "main"});

const path = require('path');

const router = require("../routes/routes.js");

const app:express.Application = express();

app.engine('handlebars', hbs.engine);
app.set('view cache', true);
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join( __dirname, '..', 'public')));

app.use("/", router);

app.listen(3000, ():void=>{
    console.log('App escuchando el puerto 3000...')
})
