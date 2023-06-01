const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;
let maiorValor = 0;
let qtdDeNumerosImpares = 0;
for (let index = 0; index < numbers.length; index += 1) {
    console.log(`O numero no index ${index} é ${numbers[index]}`);
    soma = soma + numbers[index];
    if (numbers[index] > maiorValor) {
        maiorValor = numbers[index];
    }

    if (numbers[index] % 2 !== 0){
        qtdDeNumerosImpares += 1;
    }
}

console.log(`A soma de todos os valores da array numbers é ${soma}`);

media = soma / numbers.length;
console.log(`A media de todos os valores da array numbers é ${media}`);

if (media > 20) {
    console.log('O valor da média aritmética é maior que 20');
} else {
    console.log('O valor da média aritmética é menor ou igual a 20');
}

console.log(`O maior de todos os valores da array numbers é ${maiorValor}`);

if (qtdDeNumerosImpares > 0) {
    console.log(`Tem ${qtdDeNumerosImpares} numeros impares na array numbers`);
} else {
    console.log('Nenhum valor ímpar encontrado');
}