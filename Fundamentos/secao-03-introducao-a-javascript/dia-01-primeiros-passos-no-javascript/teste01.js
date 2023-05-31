if (true) {
    // Início do escopo do if
    var userAge = '20';
    let userAge1 = '30';
    const userAge2 = '40';
    console.log(userAge); // 20
    console.log(userAge1); // 30
    console.log(userAge2); // 40
    // Fim do escopo do if
  }
  
  console.log(userAge); // 20
  console.log(userAge1); // nada
  console.log(userAge2); // nada