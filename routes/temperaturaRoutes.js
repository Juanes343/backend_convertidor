const express = require('express');
const { convertirTemperaturaController } = require('../controllers/temperaturaController');

const router = express.Router();

// Ruta para convertir temperatura
router.post('/convertir', convertirTemperaturaController);

module.exports = router;