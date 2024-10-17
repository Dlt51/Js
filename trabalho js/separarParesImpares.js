function separarParesImpares(array) {
    const resultado = {
        pares: [],
        impares: []
    };

    array.forEach(numero => {
        if (numero % 2 == 0) {
            resultado.pares.push(numero);
        } else {
            resultado.impares.push(numero);
        }
    });

    return resultado;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultado = separarParesImpares(numeros);
console.log(resultado);