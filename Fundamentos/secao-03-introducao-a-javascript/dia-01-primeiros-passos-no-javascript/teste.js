var palavra = 'arara';
palavra = palavra.toLowerCase();
var palavraInvertida = palavra.split('').reverse().join('');

if(palavra == palavraInvertida){
    console.log('As palavras são iguais!');
} else {
    console.log('As palavras não são iguais!');
}

