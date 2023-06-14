//Crie um irmão para elementoOndeVoceEsta. 
const irmaoOfElementoOndeVoceEsta = document.createElement('section');
irmaoOfElementoOndeVoceEsta.id = 'irmaoOfElementoOndeVoceEsta';
const pai = document.querySelector('#pai');
pai.appendChild(irmaoOfElementoOndeVoceEsta);

//Crie um filho para elementoOndeVoceEsta. 
const filhoToElementoOndeVoceEsta = document.createElement('section');
filhoToElementoOndeVoceEsta.id = 'filhoToElementoOndeVoceEsta';
const elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
elementoOndeVoceEsta.appendChild(filhoToElementoOndeVoceEsta);

//Crie um filho para primeiroFilhoDoFilho
const filhoToPrimeiroFilhoDoFilho = document.createElement('section');
filhoToPrimeiroFilhoDoFilho.id = 'filhoToPrimeiroFilhoDoFilho';
const primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
primeiroFilhoDoFilho.appendChild(filhoToPrimeiroFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho. 
const terceiroFilho = filhoToPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho);