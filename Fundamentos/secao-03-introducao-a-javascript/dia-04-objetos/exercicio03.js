const school = {
    lessons: [
      {
        course: 'Python',
        students: 20,
        professor: 'Carlos Patrício',
        shift: 'Manhã',
      },
      {
        course: 'Kotlin',
        students: 10,
        professor: 'Gabriel Oliva',
        shift: 'Noite',
      },
      {
        course: 'JavaScript',
        students: 738,
        professor: 'Gustavo Caetano',
        shift: 'Tarde',
      },
      {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
      },
    ]
  };

  // 1. Crie uma função que obtenha o valor da chave de acordo com sua posição no array. 
  function getValueByIndex(object, index){
    return object.lessons[index];
  }

  console.log(getValueByIndex(school, 1));

  // 2. Crie uma função que retorne a soma do número total de estudantes em todos os cursos. 

  function getSomaTotalEstudantes(object){
    let soma = 0;
   
    for (let index = 0; index < object.lessons.length; index += 1) {
        soma = soma + object.lessons[index].students;
    }
    return `A escola tem o total de ${soma} estudantes`;
  }

  console.log(getSomaTotalEstudantes(school));

// 3. Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave.
// 1º criar função que recebe objeto e chave
// 2º criar um for que passa por todos os cursos
// 3º criar um for que passa por cada chave que tem dentro de cada curso
// 4º comparar se todos os cursos tem a chave que foi informada

function verificaChave(object, chave){
    let count = 0;
    for (let i = 0; i < object.lessons.length; i += 1) {        
        for (let j = 0; j < Object.keys(object.lessons[i]).length; j += 1) {
            let chaves = Object.keys(object.lessons[i])
            if (chave === chaves[j]) {
                count += 1;
            }            
        }       
    }
    if (count === object.lessons.length) {
        return true;
    } else{
        return false;
    }
}
console.log(verificaChave(school, 'shift'));

// 4. Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave. 
// 1º Criar função que recebe base de dados a ser modificada, o nome do curso e o novo valor da chave
// 2º Criar for para achar o nome do curso informado
// 3º Se encontrar trocar o shift para o novo valor
// 4º retornar mensagem

function modifierShift(object, course, newValue) {
    let courseModifier = false;
    for (let i = 0; i < object.length; i += 1) {
        if (object[i].course === course) {
                object[i].shift = newValue;
                courseModifier = true;
        } 
    }  
    if (courseModifier === true) {
        return 'Curso alterado';
    } else{
        return 'Curso não encontrado'  
    }    
}

console.log(modifierShift(school.lessons, 'Python', 'Noite'));