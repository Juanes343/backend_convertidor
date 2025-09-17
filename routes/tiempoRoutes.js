const express = require('express');
const { convertirTiempoController } = require('../controllers/tiempoController');

const router = express.Router();

// Ruta para convertir tiempo
router.post('/convertir', convertirTiempoController);

module.exports = router;