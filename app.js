const express = require ('express');
const app = express ();
const path = require ('path');
const mainRoutes = require ('./src/routes/main.js')
const equiposRoutes = require ('./src/routes/equipos.js')
const publicPath = path.resolve ('public');

app.use(express.static (publicPath));

app.listen (3000, () => {
    console.log ('Servidor funcionando');
});

// Establezco Engine de Vistas
app.set('view engine', 'ejs');
app.set('views' , './src/views/')

//Rutas Estáticas
app.use ('/', mainRoutes);
app.use ('/index', mainRoutes);
app.use ('/equipos', mainRoutes);
app.use ('/torneo', mainRoutes);
app.use ('/equipo', equiposRoutes);