const pessoas = [
    { nome: 'Joana', idade: 37 },
    { nome: 'Ana', idade: 25 },
    { nome: 'João', idade: 32 },
    { nome: 'Aline', idade: 28 },
  ];

// forEach
pessoas.forEach((pessoa) => console.log(`Nome: ${pessoa.nome}`));

//find
const findAline = pessoas.find((pessoa) => pessoa.nome === 'Aline');
console.log(findAline);

//some
const verificaSeAlgumaPessoaTemMais30 = pessoas.some((pessoa) => pessoa.idade > 30);
console.log(verificaSeAlgumaPessoaTemMais30);

//evey
const verificaSeTodasPessoasTemMais30 = pessoas.every((pessoa) => pessoa.idade > 30);
console.log(verificaSeTodasPessoasTemMais30);

//sort
const ordenaArrayPelaIdadeMaisNovaParaMaisVelha = pessoas.sort((a, b) => a.idade - b.idade);
console.log(ordenaArrayPelaIdadeMaisNovaParaMaisVelha);

//map
const arrayComApenasOsNomes = pessoas.map((pessoa) => pessoa.nome);
console.log(arrayComApenasOsNomes);