const rutas = require('express').Router();
const controladorEstudiante = require('../Controllers/estudiante.controllers');

rutas.get('/lista', controladorEstudiante.lista)

rutas.get('/filtro/:campo/:valor', controladorEstudiante.filtro)

rutas.post('/nuevo', controladorEstudiante.nuevoEstudiante)

rutas.put('/actualizar/:id', controladorEstudiante.act)

rutas.delete('/eliminar/:id', controladorEstudiante.eliminar) 

module.exports = rutas;
    
