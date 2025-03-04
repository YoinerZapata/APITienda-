const router = require('express').Router();

const controladorProductos = require('../src/controller/producto.controller')

router.get('/productos', controladorProductos.consultar)

module.exports= router