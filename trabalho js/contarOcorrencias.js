function contarOcorrencias(array) {
    const frequencias = {};

    array.forEach(numero => {
        if (frequencias[numero]) {
            frequencias[numero]++;
        } else {
            frequencias[numero] = 1;
        }
    });

    return frequencias;
}

const numeros = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const resultado = contarOcorrencias(numeros);
console.log(resultado);
