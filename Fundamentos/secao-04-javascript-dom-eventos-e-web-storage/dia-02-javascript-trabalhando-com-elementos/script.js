
// Acesse o elemento where-are-you. 
const whereAreYou = document.getElementById('where-are-you');

//Acesse parent a partir de where-are-you e adicione uma color a ele.
const parent = whereAreYou.parentNode;
parent.style.backgroundColor = 'red';

//Acesse o first-child-of-child e adicione um texto a ele. Você se lembra dos vídeos da aula anterior? Eles ensinam como fazer isso. 
const firstChildOfChild = document.getElementById('first-child-of-child');
firstChildOfChild.innerText = 'Lorem lorem lorem';

//Acesse o first-child a partir de parent. 
const firstChildByParent = parent.firstElementChild;

// Acesse o first-child a partir de where-are-you.
const firstChildByWhereAreYou = whereAreYou.previousElementSibling;

// Acesse o texto Attention! a partir de where-are-you.
const attentionByWhereAreYou = whereAreYou.nextSibling;

// Acesse o third-child a partir de where-are-you.
const thirdChildByWhereAreYou = whereAreYou.nextElementSibling;

// Acesse o third-child a partir de parent. 
const thirdChildByParent = parent.lastElementChild.previousElementSibling;