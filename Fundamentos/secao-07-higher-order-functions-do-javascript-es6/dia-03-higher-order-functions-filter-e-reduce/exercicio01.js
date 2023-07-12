const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumNumParesFilterReduce = numbers
  .filter((elemento) => elemento % 2 === 0)
  .reduce((acc, curr) => acc + curr, 0);
const sumNumParesReduce = numbers.reduce(
  (acc, curr) => (curr % 2 === 0 ? acc + curr : acc),
  0
);
console.log(sumNumParesFilterReduce);
console.log(sumNumParesReduce);

const estudantes = [
  {
    nome: "Jorge",
    sobrenome: "Silva",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 67 },
      { name: "Português", nota: 79 },
      { name: "Química", nota: 70 },
      { name: "Biologia", nota: 65 },
    ],
  },
  {
    nome: "Mario",
    sobrenome: "Ferreira",
    idade: 15,
    turno: "Tarde",
    materias: [
      { name: "Matemática", nota: 59 },
      { name: "Português", nota: 80 },
      { name: "Química", nota: 78 },
      { name: "Biologia", nota: 92 },
    ],
  },
  {
    nome: "Jorge",
    sobrenome: "Santos",
    idade: 15,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 76 },
      { name: "Português", nota: 90 },
      { name: "Química", nota: 70 },
      { name: "Biologia", nota: 80 },
    ],
  },
  {
    nome: "Maria",
    sobrenome: "Silveira",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 91 },
      { name: "Português", nota: 85 },
      { name: "Química", nota: 92 },
      { name: "Biologia", nota: 90 },
    ],
  },
  {
    nome: "Natalia",
    sobrenome: "Castro",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 70 },
      { name: "Português", nota: 70 },
      { name: "Química", nota: 60 },
      { name: "Biologia", nota: 50 },
    ],
  },
  {
    nome: "Wilson",
    sobrenome: "Martins",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 80 },
      { name: "Português", nota: 82 },
      { name: "Química", nota: 79 },
      { name: "Biologia", nota: 75 },
    ],
  },
];

const relatorio = estudantes.map((elemento) => {
  return {
    name: elemento.nome,
    materia: elemento.materias
    .reduce((acc, materia) => acc.nota > materia.nota ? acc : materia).name,
  };
});

console.log(relatorio);

const pessoas = [
    { nome: 'Joana', idade: 37 },
    { nome: 'Ana', idade: 25 },
    { nome: 'João', idade: 32 },
    { nome: 'Aline', idade: 28 },
  ];

  pessoas.forEach((pessoa) => console.log(`Nome: ${pessoa.nome}`));
  console.log(pessoas.find((pessoa) => pessoa.nome === "Aline"));
  console.log(pessoas.some((pessoa) => pessoa.idade > 30));
  console.log(pessoas.every((pessoa) => pessoa.idade > 30));
  console.log(pessoas.sort((a, b) => a.idade - b.idade));
  console.log(pessoas.map((pessoa) => pessoa.nome));
  console.log(pessoas.filter((pessoa) => pessoa.idade > 30));
  console.log(pessoas.reduce((acc, pessoa) => acc + pessoa.idade, 0));