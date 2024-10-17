function somaMatriz(matriz) {
    var soma = 0;

    for (var i = 0; i < matriz.length; i++) {
        for (var j = 0; j < matriz[i].length; j++) {
            soma = soma + matriz[i][j]; 
        }
    }

    return soma;
}

var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

var resultado = somaMatriz(matriz);
console.log(resultado);
