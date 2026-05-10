const { Router } = require('express');
const { getServicios, getServicioById } = require('../controllers/ruta1Controller');

const rutas = Router();

rutas.get('/', getServicios);
rutas.get('/:id', getServicioById);

module.exports = rutas;