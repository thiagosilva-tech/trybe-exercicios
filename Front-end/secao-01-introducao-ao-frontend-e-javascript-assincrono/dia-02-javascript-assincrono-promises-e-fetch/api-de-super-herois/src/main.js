import { getRandomHero } from './services/api';
import './style.css'

const btnSortear = document.getElementById('btn-sortear');

btnSortear.addEventListener('click', () => {
  const imgSorteada = document.getElementById('img-sorteada');
  const nomeSorteado = document.getElementById('nome-sorteado');
  getRandomHero().then(hero => {
    nomeSorteado.innerText = hero.name;
    imgSorteada.src = hero.images.md;
  });
});


