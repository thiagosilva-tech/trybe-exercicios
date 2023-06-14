//Adicione a classe title na tag h1 criada; 
const title = document.querySelector('h1');
title.className = 'title';

//Adicione a classe description nas 3 tags h3 criadas; 
const h3 = document.querySelectorAll('h3');
for (let index = 0; index < h3.length; index += 1) {
    h3[index].className = 'description';    
}

//Remova a section criada no passo 5 (aquela que possui a classe left-content) por meio da função .removeChild(); 
const sectionLeftContent = document.querySelector('.left-content');
const main = document.querySelector('main');
main.removeChild(sectionLeftContent);

//Centralize a section criada no passo 6 (aquela que possui a classe right-content). 
const sectionRightContent = document.querySelector('.right-content');
sectionRightContent.style.marginRight = 'auto';

//Troque a cor de fundo do elemento-pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde; 
const sectionCenterContent = document.querySelector('.center-content');
sectionCenterContent.style.backgroundColor = 'green';

//Remova os dois últimos elementos (nove e dez) da lista criada no passo 8. 
const ul = document.querySelector('ul');
const liElements = ul.querySelectorAll('li');
for (let i = liElements.length - 1; i >= liElements.length - 2; i--) {
  liElements[i].remove();
}
