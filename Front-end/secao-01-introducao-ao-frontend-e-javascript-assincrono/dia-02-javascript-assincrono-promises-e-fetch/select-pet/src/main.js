import "./style.css";
import { getRandomCat, getRandomDog, getSurprisePet } from "./services/api";

const btnRandomCat = document.getElementById("btn-random-cat");
const btnRandomDog = document.getElementById("btn-random-dog");
const btnSurprise = document.getElementById("btn-surprise");
const imgRandomPet = document.getElementById("img-random-pet");

btnRandomCat.addEventListener("click", () => {
  getRandomCat().then((cat) => {
    imgRandomPet.src = cat[0].url;
  });
});

btnRandomDog.addEventListener("click", () => {
  getRandomDog().then((dog) => {
    imgRandomPet.src = dog.message;
  });
});

btnSurprise.addEventListener("click", () => {
  getSurprisePet().then((pet) =>
    pet[0] ? (imgRandomPet.src = pet[0].url) : (imgRandomPet.src = pet.message)
  );
});
