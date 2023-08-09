import Swal from 'sweetalert2';

const API_BASE = 'https://api.exchangerate.host/latest';

export function getCambio(moeda) {
    return fetch(`${API_BASE}?base=${moeda}`)
        .then((response) => response.json())
        .then((data) => {
            if (moeda !== data.base) {
                throw new Error('Moeda não existente!');
            }
            return data;
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
            });
        });
}
