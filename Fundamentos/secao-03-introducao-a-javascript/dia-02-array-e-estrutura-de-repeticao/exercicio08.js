let numero = 5;
let linhaAsteriscos = '';

if (numero > 1) {
    //Quantas linhas ele vai imprimir
    for (let linha = 1; linha <= numero; linha += 1) {
        linhaAsteriscos = '';
        //Quantos empaços ele vai adicionar na linha
        for (let espaco = 1; espaco <= numero - linha; espaco += 1) {
            linhaAsteriscos += ' ';
        }
        //Quantos asterisco ele vai adicionar na linha
        for (let asterisco = 1; asterisco <= linha; asterisco += 1) {
            linhaAsteriscos += '*';
        }
        console.log(linhaAsteriscos);
    }    
}