// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Melão', 'Mamão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Açucar', 'Gelo', 'Canela'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));