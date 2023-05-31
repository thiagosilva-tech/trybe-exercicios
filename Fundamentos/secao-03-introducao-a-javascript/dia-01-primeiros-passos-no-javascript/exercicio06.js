let numeros = [2, 5, 10];
let numerosPares = false;

for (let index = 0; index < numeros.length; index++) {
    if(numeros[0] % 2 === 0){
        numerosPares = true;
    } else {
        numerosPares = false;
    }
}

console.log(numerosPares);