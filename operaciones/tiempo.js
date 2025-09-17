// Operaciones de conversión de tiempo

const convertirTiempo = (valor, unidadOrigen, unidadDestino) => {
    // Convertir todo a segundos primero
    let valorEnSegundos;
    switch (unidadOrigen) {
        case 'segundos':
            valorEnSegundos = valor;
            break;
        case 'minutos':
            valorEnSegundos = valor * 60;
            break;
        case 'horas':
            valorEnSegundos = valor * 3600;
            break;
        case 'dias':
            valorEnSegundos = valor * 86400;
            break;
        default:
            throw new Error('Unidad de origen no válida');
    }
    
    // Convertir de segundos a la unidad destino
    let resultado;
    switch (unidadDestino) {
        case 'segundos':
            resultado = valorEnSegundos;
            break;
        case 'minutos':
            resultado = valorEnSegundos / 60;
            break;
        case 'horas':
            resultado = valorEnSegundos / 3600;
            break;
        case 'dias':
            resultado = valorEnSegundos / 86400;
            break;
        default:
            throw new Error('Unidad de destino no válida');
    }
    
    return resultado;
};

module.exports = {
    convertirTiempo
};