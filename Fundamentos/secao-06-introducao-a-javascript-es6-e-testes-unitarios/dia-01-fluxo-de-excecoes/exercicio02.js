const checkNumber = (number) => {
  if (typeof number !== 'number') {
    throw new Error("É necessário digitar um número");
  }
};

function mediaAluno(nota1, nota2, nota3, nota4) {
  try {
    checkNumber(nota1);
    checkNumber(nota2);
    checkNumber(nota3);
    checkNumber(nota4);
    const somaNotas = nota1 + nota2 + nota3 + nota4;
    const mediaNotas = somaNotas / 4;
    if (mediaNotas > 7) {
      console.log("Você foi aprovado");
    } else {
      console.log("Você foi reprovado");
    }
  } catch (error) {
    console.log(error.message);
  }
}

mediaAluno('1', '2', 3, 4);
