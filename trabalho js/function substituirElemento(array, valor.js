function substituirElemento(array, valorAntigo, novoValor) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === valorAntigo) {
            array[i] = novoValor; 
        }
    }
    return array;
}

var array = [1, 2, 3, 1, 4, 1];
var resultado = substituirElemento(array, 1, 5);
console.log(resultado);
