const API_BASE = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api";

export function getRandomHero() {
  const randomNumber = Math.floor(Math.random() * 731);
  return fetch(`${API_BASE}/id/${randomNumber}.json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro ao buscar o SuperHeroi')
      }
      return response.json()
    })
    .then((data) => data)
    .catch((error) => alert(error.message));
}
