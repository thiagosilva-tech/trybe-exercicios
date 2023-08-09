import Swal from 'sweetalert2';
import { getCambio } from './services/api';
import './style.css';

const btnSource = document.getElementById('btn-source');

function creatRates(data, rate) {
    const containerCambio = document.getElementById('container-moedas');
    const div = document.createElement('div');
    div.className = 'container-moeda';
    const p = document.createElement('p');
    p.className = 'p-moeda';
    const span = document.createElement('span');
    span.className = 'span-moeda';
    p.innerText = rate;
    span.innerText = data[rate].toFixed(2);
    p.appendChild(span);
    div.appendChild(p);
    containerCambio.appendChild(div);
}

function removeChildCambio() {
    const containerCambio = document.getElementById('container-moedas');
    while (containerCambio.firstChild) {
        containerCambio.removeChild(containerCambio.firstChild);
    }
}

btnSource.addEventListener('click', () => {
    const inputMoeda = document.getElementById('input-moeda').value;
    if (inputMoeda) {
        getCambio(inputMoeda)
            .then((data) => {
                if (data) {
                    removeChildCambio();
                    const qtdRates = Object.keys(data.rates);
                    for (let index = 0; index < qtdRates.length; index += 1) {
                        creatRates(data.rates, qtdRates[index]);
                    }
                    const pCambio = document.getElementById('p-cambio');
                    pCambio.innerText = `Valores referentes a 1 ${inputMoeda}`;
                }
            });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Você precisa passar uma moeda!',
        });
    }
});
