// Operaciones de conversión de moneda

const convertirMoneda = (valor, unidadOrigen, unidadDestino) => {
    // Tasas de cambio fijas (en la vida real se obtendrían de una API externa)
    const tasasCambio = {
        'USD': 1,
        'EUR': 0.85,
        'COP': 4000,
        'GBP': 0.73
    };
    
    if (!tasasCambio[unidadOrigen] || !tasasCambio[unidadDestino]) {
        throw new Error('Moneda no soportada');
    }
    
    // Convertir a USD primero, luego a la moneda destino
    const valorEnUSD = valor / tasasCambio[unidadOrigen];
    const resultado = valorEnUSD * tasasCambio[unidadDestino];
    
    return resultado;
};

module.exports = {
    convertirMoneda
};