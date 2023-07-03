function verificaDados(name, age) {
    if (!name || !age) {
        throw new Error('Todas as informações são necessárias');
    } else if(age < 18){
        throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
    } else if(age >= 18) {
        console.log(`${name}, seja bem-vindo(a) à AuTrybe!`);
    }
}

const studentRegister = (name, age) => {
    try {
        verificaDados(name, age);
    } catch (error) {
        console.log(error.message);
    }    
  }

  studentRegister('', 18);