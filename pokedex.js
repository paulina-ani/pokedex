const list = document.getElementById("pokedex__container--pokemons");
const prevButton = document.getElementById("pokedex__buttons--prev");
const nextButton = document.getElementById("pokedex__buttons--next");
const image = document.getElementById("info__image--image");
const name = document.getElementById("info__container--name");
const height = document.getElementById("info__container--height");
const weight = document.getElementById("info__container--weight");
const type = document.getElementById("info__container--type");

const requestData = (url, handler) => {
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Something is wrong with the data. Please check");
    })
    .then(handler)
    .catch(error => console.log(error.message));
};
