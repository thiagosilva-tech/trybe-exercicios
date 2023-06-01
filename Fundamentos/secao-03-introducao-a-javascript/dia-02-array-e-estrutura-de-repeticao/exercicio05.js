let word = 'tryber';
let reverseWord1 = '';
let reverseWord2 = '';
console.log(`A palavra a ver invertida é ${word}`);
reverseWord1 = word.split('').reverse().join('');
console.log(`A palavra invertida com split, reverse e join: ${reverseWord1}`);


for (let index = word.length - 1; index >= 0; index -= 1) {
    reverseWord2 = reverseWord2 + word[index];
}

console.log(`A palavra invertida com for: ${reverseWord2}`);