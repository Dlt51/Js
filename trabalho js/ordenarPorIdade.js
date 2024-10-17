function ordenarPorIdade(pessoas) {
    return pessoas.sort((a, b) => a.idade - b.idade);
}

const pessoas = [
    { nome: 'Dalton', idade: 19 },
    { nome: 'Slash', idade: 59 },
    { nome: 'Axl Rose', idade: 62 }
];

const pessoasOrdenadas = ordenarPorIdade(pessoas);

pessoasOrdenadas.forEach(pessoa => {
    console.log(`${pessoa.nome} ${pessoa.idade}`);
});