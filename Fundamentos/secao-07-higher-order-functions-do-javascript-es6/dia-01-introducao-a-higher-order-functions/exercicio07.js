const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

const verificaRespostas = (respostasCorretas, respostasAluno) => {
  if (respostasCorretas === respostasAluno) {
    return 1;
  }
  if (respostasAluno === "N.A") {
    return 0;
  }
  return -0.5;
};

const corretorAutomaticoDeProva = (respostasCorretas, respostasAluno, callback) => {
  let nota = 0;
  for (let index = 0; index < respostasCorretas.length; index += 1) {
    nota += callback(respostasCorretas[index], respostasAluno[index]);    
  }
    return `A nota é: ${nota}`;
};

console.log(corretorAutomaticoDeProva(RIGHT_ANSWERS, STUDENT_ANSWERS, verificaRespostas));
