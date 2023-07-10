const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  // Adicione seu código aqui
//   const peopleCrescente =  people.sort((a, b) => a.age - b.age);
  const peopleDescrecente =  people.sort((a, b) => b.age - a.age);

//   console.log(peopleCrescente);
  console.log(peopleDescrecente);