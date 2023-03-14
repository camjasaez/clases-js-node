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
  //**** EXTRA  *****/
  //Crear una constante con el elemento del DOM que lee el input de búsqueda.
  //Crear una constante con el elemento del DOM que contiene formulario de búsqueda.
  //Agregar un evento al formulario de búsqueda para que al hacer submit se ejecute la función de búsqueda.
  //Cree una funcion de busqueda de personajes que reciba como parametro el nombre del personaje a buscar.
}

main();
