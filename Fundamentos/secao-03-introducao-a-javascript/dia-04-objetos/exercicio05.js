const menu = {
    sandwiches: [
      {
        name: 'Big Mac',
        price: 26.90,
        ingredients: ['2 hambúrgueres', 'alface americana', 'queijo cheddar', 'molho especial', 'cebola', 'picles', 'pão com gergelim'],
        calories: 503,
      },
      {
        name: 'Duplo Quarterão',
        price: 39.90,
        ingredients: ['2 hambúrgueres', 'mostarda', 'ketchup', 'cebola', 'queijo cheddar', 'pão com gergelim'],
        calories: 762,
      },
      {
        name: 'Big Tasty',
        price: 39.90,
        ingredients: ['1 hambúrguer', 'queijo emental', 'tomate', 'alface americana', 'cebola', 'molho tasty', 'pão com gergelim'],
        calories: 944,
      },
    ],
    sideDishes: [
      {
        name: 'Chicken McNuggets - 10 unidades',
        price: 16.90,
        ingredients: ['frango empanado'],
        calories: 414,
      },
      {
        name: 'McFritas Kids',
        price: 8.90,
        ingredients: ['batata', 'sal'],
        calories: 90,
      },
      {
        name: 'McFritas Pequena',
        price: 11.90,
        ingredients: ['batata', 'sal'],
        calories: 211,
      },
      {
        name: 'McFritas Média',
        price: 13.90,
        ingredients: ['batata', 'sal'],
        calories: 295,
      },
      {
        name: 'McFritas Grande',
        price: 15.90,
        ingredients: ['batata', 'sal'],
        calories: 422,
      },
    ],
    desserts: [
      {
        name: 'McFlurry Ovomaltine Caramelo',
        price: 13.90,
        ingredients: ['bebida láctea sabor baunilha', 'flocos de ovomaltine', 'cobertura de caramelo'],
        calories: 462,
      },
      {
        name: 'Top Sundae Chocolate',
        price: 11.90,
        ingredients: ['bebida láctea sabor baunilha', 'cobertura de chocolate', 'farofa de paçoca', 'canudo'],
        calories: 377,
      },
      {
        name: 'Torta de Banana',
        price: 6.90,
        ingredients: ['banana', 'massa crocante'],
        calories: 222,
      },
    ],
    drinks: [
      {
        name: 'Coca-Cola 300ml',
        price: 13.90,
        calories: 129,
      },
      {
        name: 'Del Valle Uva 500ml',
        price: 11.90,
        calories: 200,
      }
    ],
  };

// 1. Crie uma função que imprima o nome e o valor de todos os lanches disponíveis;
// for para passar por todos 

// function getAllSnackAvailable(objeto) {
//   let chavesMenu = Object.keys(objeto);
//   for (let categoriasMenu = 0; categoriasMenu < chavesMenu.length; categoriasMenu += 1) {
//     if (chavesMenu[categoriasMenu] != "drinks") {
//       let itensMenu = Object.values(objeto[chavesMenu[categoriasMenu]]);
//       for (let itensPorCategoria = 0; itensPorCategoria < itensMenu.length; itensPorCategoria += 1) {
//         let nomeItem = itensMenu[itensPorCategoria].name;
//         let priceItem = itensMenu[itensPorCategoria].price;
//         console.log(`Nome: ${nomeItem} ---- Preço: ${priceItem}
//             `);
//       }
//     }
//   }
// };

// getAllSnackAvailable(menu);

// 2. Crie uma função que ao passar o nome de um lanche, retorna o objeto completo dele.
// function getSnack(objeto, nomeLanche) {
//     let chavesMenu = Object.keys(objeto);
//       for (let categoriasMenu = 0; categoriasMenu < chavesMenu.length; categoriasMenu += 1) {
//         if (chavesMenu[categoriasMenu] != "drinks") {
//           let itensMenu = Object.values(objeto[chavesMenu[categoriasMenu]]);
//           for (let itensPorCategoria = 0; itensPorCategoria < itensMenu.length; itensPorCategoria += 1) {
//             let nomeItem = itensMenu[itensPorCategoria].name;
//             if(nomeItem === nomeLanche){
//                 console.log(itensMenu[itensPorCategoria]);
//             }
//           }
//         }
//       }
// }
// getSnack(menu, 'Big Mac');

// 3. Crie uma função que ao passar o valor que eu tenho na carteira, retorna um array com o nome dos lanches que posso comprar. Exemplo de retorno: [ 'Big Mac', 'Duplo Quarterão', 'Big Tasty' ]

// function carteira(valor) {
//     const canBuy = [];
//     let chavesMenu = Object.keys(menu);
//       for (let categoriasMenu = 0; categoriasMenu < chavesMenu.length; categoriasMenu += 1) {
//         if (chavesMenu[categoriasMenu] != "drinks") {
//           let itensMenu = Object.values(menu[chavesMenu[categoriasMenu]]);
//           for (let itensPorCategoria = 0; itensPorCategoria < itensMenu.length; itensPorCategoria += 1) {
//             let precoItem = itensMenu[itensPorCategoria].price;
//             if(precoItem <= valor){
//                 canBuy.push(itensMenu[itensPorCategoria].name);
//             }
//           }
//         }
//       }
//       console.log(canBuy); 
// }

// carteira(30);


// 4. Crie uma função que ao passar um nome de ingrediente, retorna um array com quais lanches tem aquele ingrediente
// Exemplo: ao colocar queijo cheddar, retorna:
// [
//   {
//     name: 'Big Mac',
//     price: 26.9,
//     ingredients: [
//       '2 hambúrgueres',
//       'alface americana',
//       'queijo cheddar',
//       'molho especial',
//       'cebola',
//       'picles',
//       'pão com gergelim'
//     ],
//     calories: 503
//   },
//   {
//     name: 'Duplo Quarterão',
//     price: 39.9,
//     ingredients: [
//       '2 hambúrgueres',
//       'mostarda',
//       'ketchup',
//       'cebola',
//       'queijo cheddar',
//       'pão com gergelim'
//     ],
//     calories: 762
//   }
// ]

// function getSnackByingredient(ingredient) {
//   let categoriaMenu = Object.keys(menu);
//   for (let indexCategoria = 0; indexCategoria < categoriaMenu.length; indexCategoria += 1) {
//     if (categoriaMenu[indexCategoria] != "drinks") {
//       let itensPorCategoria = Object.values(menu[categoriaMenu[indexCategoria]]);
//       for (let indexItem = 0; indexItem < itensPorCategoria.length; indexItem += 1) {
//         let ingredientePorItem = itensPorCategoria[indexItem].ingredients;
//         for (let indexIngrediente = 0; indexIngrediente < ingredientePorItem.length; indexIngrediente += 1) {
//           if (ingredientePorItem[indexIngrediente] === ingredient) {
//             console.log(itensPorCategoria[indexItem]);
//           }
//         }
//       }
//     }
//   }
// }

// getSnackByingredient('queijo cheddar');

