const express = require('express');
const { convertirMonedaController } = require('../controllers/monedaController');

const router = express.Router();

// Ruta para convertir moneda
router.post('/convertir', convertirMonedaController);

module.exports = router;