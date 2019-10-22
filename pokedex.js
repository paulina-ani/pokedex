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

const showDetails = details => {
  name.innerHTML = `Name: ${details.name}`;
  height.innerHTML = `Height: ${details.height}`;
  weight.innerHTML = `Weight: ${details.weight}`;
  type.innerHTML = `Type: ${details.types.map(item => item.type.name)}`;
  const imageCreate = document.createElement("img");
  imageCreate.src = details.sprites.front_default;

  if (image.children.length > 0) {
    const imageVisible = document.querySelector("img");
    imageVisible.setAttribute("src", details.sprites.front_default);
  } else {
    image.appendChild(imageCreate);
  }
};
