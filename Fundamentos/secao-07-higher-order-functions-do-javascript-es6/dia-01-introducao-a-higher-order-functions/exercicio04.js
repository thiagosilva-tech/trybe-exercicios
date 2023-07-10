const pessoas = [
    { nome: 'Joana', idade: 37 },
    { nome: 'Ana', idade: 25 },
    { nome: 'João', idade: 32 },
    { nome: 'Aline', idade: 28 },
  ];

//forEach
pessoas.forEach((pessoa) => console.log(`Nome: ${pessoa.nome}`));

//find
console.log(pessoas.find((pessoa) => pessoa.nome === "Aline"));

//some
console.log(pessoas.some((pessoa) => pessoa.idade > 30));

//every
console.log(pessoas.every((pessoa) => pessoa.idade > 30));