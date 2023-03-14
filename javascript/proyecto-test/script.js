{
  `
  <article class="card">
    <img
      src="${character.image}"
      alt="${character.name}"
      class="card__img"
    />
    <article class="card__info">
      <h2 class="card__name">${character.name}</h2>
      <p class="card__status">Status: ${character.status}</p>
      <p class="card__species">Species: ${character.species}</p>
    </article>
  </article>`;
}

//Funcion principal
async function main() {
  // Crear una constante con la URL de la API. => https://rickandmortyapi.com/
  //Hacer el fetch a la API
  //Transformar la respuesta a JSON
  //Crear una constante con los resultados de la transformación.
  // Un array de objetos con la info de cada personaje.
  //Crear una constante con el elemento del DOM donde se van a insertar los personajes.
  //Crear un elemento por cada personaje y agregarlo al DOM.
  characters.forEach((character) => {
    container.innerHTML += `
    <article class="card">
      <img
        src="${character.image}"
        alt="${character.name}"
        class="card__img"
      />
      <article class="card__info">
        <h2 class="card__name">${character.name}</h2>
        <p class="card__status">Status: ${character.status}</p>
        <p class="card__species">Species: ${character.species}</p>
      </article>
    </article>`;
  });

  //**** EXTRA  *****/
  //Crear una constante con el elemento del DOM que lee el input de búsqueda.
  //Crear una constante con el elemento del DOM que contiene formulario de búsqueda.
  //Agregar un evento al formulario de búsqueda para que al hacer submit se ejecute la función de búsqueda.
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    container.innerHTML = '';
    //Se asigna el arreglo de los datos que buscamos en la funcion a la variable que mostrará
    // Se hace la logica anterior
    const mostrar = await searchCharacter(input.value);

    mostrar.forEach((character) => {
      container.innerHTML += `
        <article class="card">
          <img
            src="${character.image}"
            alt="${character.name}"
            class="card__img"
          />
          <article class="card__info">
            <h2 class="card__name">${character.name}</h2>
            <p class="card__status">Status: ${character.status}</p>
            <p class="card__species">Species: ${character.species}</p>
          </article>
        </article>`;
    });
  });
}

main();

//Cree una funcion de busqueda de personajes que reciba como parametro el nombre del personaje a buscar.
//Funcion de busqueda
async function searchCharacter(name) {
  //Crear una constante con la URL de la API. => https://rickandmortyapi.com/
  const url = `https://rickandmortyapi.com/api/character/?name=${name}`;
  //Hacer el fetch a la API
  const response = await fetch(url);
  //Transformar la respuesta a JSON
  const data = await response.json();
  //Crear una constante con los resultados de la transformación.
  const characters = data.results; // Un array de objetos con la info de cada personaje.

  return characters;
}
