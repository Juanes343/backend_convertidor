const express = require('express');
const { convertirPesoController } = require('../controllers/pesoController');

const router = express.Router();

// Ruta para convertir peso
router.post('/convertir', convertirPesoController);

module.exports = router;