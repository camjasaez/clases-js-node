{
  /* 
<article class="card">
  <img
    src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    alt="Rick Sanchez"
    class="card__img"
  />
  <article class="card__info">
    <h2 class="card__name">Rick Sanchez</h2>
    <p class="card__status">Status: Alive</p>
    <p class="card__species">Species: Human</p>
  </article>
</article> */
}

//Funcion principal
async function main() {
  // Crear una constante con la URL de la API. => https://rickandmortyapi.com/
  const url = 'https://rickandmortyapi.com/api/character/';

  //Hacer el fetch a la API
  const response = await fetch(url);
  //Transformar la respuesta a JSON
  const data = await response.json();
  //Crear una constante con los resultados de la transformación.
  const characters = data.results; // Un array de objetos con la info de cada personaje.

  //Crear una constante con el elemento del DOM donde se van a insertar los personajes.
  const container = document.querySelector('.gallery');

  //Crear un elemento por cada personaje y agregarlo al DOM.

  characters.forEach((character) => {
    const card = document.createElement('article');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = character.image;
    img.alt = character.name;
    img.classList.add('card__img');

    const info = document.createElement('article');
    info.classList.add('card__info');

    const name = document.createElement('h2');
    name.classList.add('card__name');
    name.textContent = character.name;

    const status = document.createElement('p');
    status.classList.add('card__status');
    status.textContent = `Status: ${character.status}`;

    const species = document.createElement('p');
    species.classList.add('card__species');
    species.textContent = `Species: ${character.species}`;

    info.appendChild(name);
    info.appendChild(status);
    info.appendChild(species);

    card.appendChild(img);
    card.appendChild(info);

    container.appendChild(card);
  });
}

main();
