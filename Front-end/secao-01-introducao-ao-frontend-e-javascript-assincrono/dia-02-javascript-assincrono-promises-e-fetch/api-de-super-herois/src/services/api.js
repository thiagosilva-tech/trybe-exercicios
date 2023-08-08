const API_BASE = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api";

export function getRandomHero() {
  const randomNumber = Math.floor(Math.random() * 731);
  return fetch(`${API_BASE}/id/${randomNumber}.json`)
    .then((response) => response.json())
    .then((data) => data);
}
