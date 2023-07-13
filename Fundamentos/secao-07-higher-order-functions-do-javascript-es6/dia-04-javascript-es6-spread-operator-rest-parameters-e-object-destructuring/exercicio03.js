// Requisito 1
const rectangleArea = (width, height) => width * height;
const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];
rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle)); // Altere o parâmetro recebido por rectangleArea()
});

// Requisito 2
// escreva sum abaixo
const sum = (...numbers) => numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum(4,5,6));

// Requisito 3
// name: nome da pessoa, age: idade, likes: gosta de, nationality: nacionalidade
const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
  };
  
  const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
  };
  
  // complete a assinatura da função abaixo
  const personLikes = (object) => {
    const {name, age, likes} = object;    
    return `${name} is ${age} years old and likes ${likes.join(', ')}.`
};
  // <nome> tem <anos de idade> e gosta de <gostos da pessoa>
  // Retornos esperados:
  console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
  console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

  // Requisito 4
  const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
    // bornIn: nascido em
  ];
  
  // escreva filterPeople abaixo
  function filterPeople() {
    return people
      .filter((person) => person.bornIn >= 1901 && person.bornIn <= 2000 && person.nationality === 'Australian');
  }

  console.log(filterPeople());

  //Requisito 5
  const ships = [
    {
      name: 'Titanic',
      length: 269.1,
      measurementUnit: 'meters',
    },
    {
      name: 'Queen Mary 2',
      length: 1132,
      measurementUnit: 'feet',
    },
    {
      name: 'Yamato',
      length: 256,
      measurementUnit: 'meters',
    },
    // measurementUnit: unidade de medida
  ];
  
  // escreva shipLength abaixo
  function shipLength(ship) {
    const {name, length, measurementUnit} = ship;
    return `${name} is ${length} ${measurementUnit} long'`
  }
  
  // retorno esperado
  console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
  console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
  console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'

  //Requisito 6

const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };
  // yearSeasons: estações do ano.
  const {spring, summer, autumn, winter} = yearSeasons;
  const monthYear = [...spring, ...summer, ...autumn, ...winter];
  console.log(monthYear);