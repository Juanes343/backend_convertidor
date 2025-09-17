const { convertirPeso } = require('../operaciones/peso');

const convertirPesoController = (req, res) => {
    try {
        const { valor, unidadOrigen, unidadDestino } = req.body;
        
        if (!valor || !unidadOrigen || !unidadDestino) {
            return res.status(400).json({ 
                error: 'Faltan parámetros requeridos: valor, unidadOrigen, unidadDestino' 
            });
        }
        
        const resultado = convertirPeso(valor, unidadOrigen, unidadDestino);
        
        res.json({ 
            valorOriginal: valor,
            unidadOrigen,
            valorConvertido: resultado,
            unidadDestino
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    convertirPesoController
};