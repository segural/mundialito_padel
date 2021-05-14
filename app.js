const express = require ('express');
const app = express ();
const path = require ('path');
const mainRoutes = require ('./src/routes/main.js')
const equiposRoutes = require ('./src/routes/equipos.js')
const publicPath = path.resolve ('public');

app.use(express.static (publicPath));

app.listen (process.env.PORT || 3000, function () {
    console.log ('Servidor corriendo en puerto 3000');
});

// Establezco Engine de Vistas
app.set('view engine', 'ejs');
app.set('views' , './src/views/')

//Rutas Estáticas
app.use ('/', mainRoutes);
app.use ('/index', mainRoutes);
app.use ('/equipos', mainRoutes);
app.use ('/torneo', mainRoutes);
app.use ('/cuartos', mainRoutes);
app.use ('/semis', mainRoutes);
app.use ('/final', mainRoutes);
app.use ('/super', mainRoutes);
app.use ('/equipo', equiposRoutes);