const API_BASE_DOG = 'https://dog.ceo/api/breeds/image/random';
const API_BASE_CAT = 'https://api.thecatapi.com/v1/images/search';

export function getRandomDog() {
    return fetch(API_BASE_DOG)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Erro ao buscar Api dog')
        }
        return response.json()
    })
    .then((data) => data)
    .catch((error) => alert(error.message));
}

export function getRandomCat() {
    return fetch(API_BASE_CAT)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Erro ao buscar Api cat')
        }
        return response.json()
    })
    .then((data) => data)
    .catch((error) => alert(error.message));
}

export function getSurprisePet() {
    return Promise.race([getRandomDog(), getRandomCat()]);
}