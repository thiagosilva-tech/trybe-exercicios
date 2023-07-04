function hydrate(string) {
  let drinks = string.replace(/,\s?/g, ' e ');
  drinks = drinks.split(' e ');
  let glassOfWater = 0;

  for (let index = 0; index < drinks.length; index += 1) {
    const drink = drinks[index].split(' ');
    const amount = parseInt(drink[0]);
    glassOfWater += amount;
  }

  if (glassOfWater === 1) {
    return `${glassOfWater} copo de água`;
  } else {
    return `${glassOfWater} copos de água`;
  }
}

module.exports = hydrate;
