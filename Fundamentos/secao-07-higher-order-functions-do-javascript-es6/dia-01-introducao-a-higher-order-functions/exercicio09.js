const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const dragonAttack = (dragon) => {
    return Math.floor((Math.random() * ((dragon.strength + 1) - 15)) + 15);
  }

  const warriorAttack = (warrior) => {
    return Math.floor((Math.random() * ((warrior.strength + 1) - warrior.strength * warrior.weaponDmg)) + warrior.strength * warrior.weaponDmg);
  }

  const mageAttack = (mage) => {
    const mageDamage = {};
    if (mage.mana < 15) {
        mageDamage.damage = 'Não possui mana suficiente';
        mageDamage.mana = 0
    }
    mageDamage.damage = Math.floor((Math.random() * ((mage.intelligence + 1) - mage.intelligence * 2)) + mage.intelligence * 2);
    mageDamage.mana = 15;
    return mageDamage;
  }

  const gameActions = {
    // Crie as HOFs neste objeto.
    warriorTurn: (warriorAttack) => {
      const warriorDamage = warriorAttack(warrior);
      dragon.healthPoints -= warriorDamage;
      warrior.damage = warriorDamage;
    },
    mageTurn: (mageAttack) => {
      const mageDamage = mageAttack(mage);
      dragon.healthPoints -= mageDamage.damage;
      mage.damage = mageDamage.damage;
      mage.mana -= mageDamage.mana;
    },
    dragonTurn: (dragonAttack) => {
      const dragonDamage = dragonAttack(dragon);
      mage.healthPoints -= dragonDamage;
      warrior.healthPoints -= dragonDamage;
      dragon.damage = dragonDamage;
    },
    turnResults: () => battleMembers,
  };

  gameActions.warriorTurn(warriorAttack);
  gameActions.mageTurn(mageAttack);
  gameActions.dragonTurn(dragonAttack);
  console.log(gameActions.turnResults()); 