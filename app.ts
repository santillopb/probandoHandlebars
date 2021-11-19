import express from 'express';

const expressHandlebars = require('express-handlebars');

const hbs = expressHandlebars.create({defaultLayout: "main"});

const app:express.Application = express();


app.engine('handlebars', hbs.engine);
app.set('view cache', true);
app.set('view engine', 'handlebars');

app.get('/', (req:express.Request, res:express.Response):void=>{
    res.render("helloWorld.handlebars", {message: "Mundo!"});
});

app.get('/saluda', (req:express.Request, res:express.Response):void=>{
    res.render("saluda.handlebars",{datos: [{nombre: "Jano", apellido: "Soler"},{nombre: "Pilar", apellido: "Espinosa"}, {nombre: "Aarón", apellido: "Bellés"}]});
});

app.listen(3000, ():void=>{
    console.log('App escuchando el puerto 3000...')
})
