// Operaciones de conversión de temperatura

const convertirTemperatura = (valor, unidadOrigen, unidadDestino) => {
    let valorEnCelsius;
    
    // Convertir a Celsius primero
    switch (unidadOrigen) {
        case 'celsius':
            valorEnCelsius = valor;
            break;
        case 'fahrenheit':
            valorEnCelsius = (valor - 32) * 5/9;
            break;
        case 'kelvin':
            valorEnCelsius = valor - 273.15;
            break;
        default:
            throw new Error('Unidad de origen no válida');
    }
    
    // Convertir de Celsius a la unidad destino
    let resultado;
    switch (unidadDestino) {
        case 'celsius':
            resultado = valorEnCelsius;
            break;
        case 'fahrenheit':
            resultado = (valorEnCelsius * 9/5) + 32;
            break;
        case 'kelvin':
            resultado = valorEnCelsius + 273.15;
            break;
        default:
            throw new Error('Unidad de destino no válida');
    }
    
    return resultado;
};

module.exports = {
    convertirTemperatura
};