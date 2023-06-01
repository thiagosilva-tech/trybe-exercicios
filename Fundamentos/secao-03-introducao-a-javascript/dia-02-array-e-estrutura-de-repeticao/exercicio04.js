let numero = 10;
let fatorial = 1;

if (numero >= 0) {
    for (let index = 1; index <= numero; index++) {
        fatorial = index * fatorial;        
    }
}

console.log(`O fatorial de ${numero} é: ${fatorial}`);