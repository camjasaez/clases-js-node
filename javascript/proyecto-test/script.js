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
</article>; */
}

async function main() {
  const url = 'https://rickandmortyapi.com/api/character/';
  const container = document.querySelector('.gallery');

  const response = await fetch(url);
  const data = await response.json();
  const characters = data.results; // Un array de objetos con la info de cada personaje.

  // characters.forEach((character) => {
  //   container.innerHTML += `
  //     <article class="card">
  //       <img src="${character.image}" alt="${character.name}" class="card__img" />
  //       <article class="card__info">
  //         <h2 class="card__name">${character.name}</h2>
  //         <p class="card__status">Status: ${character.status}</p>
  //         <p class="card__species">Species: ${character.species}</p>
  //       </article>
  //     </article>
  //   `;
  // });

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
