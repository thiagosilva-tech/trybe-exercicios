let numeros = [2, 10, 4];
let numeroMaior = 0;

for (let index = 0; index < numeros.length; index++) {
    if(numeroMaior < numeros[index]){
        numeroMaior = numeros[index];
    }
}
console.log(numeroMaior);