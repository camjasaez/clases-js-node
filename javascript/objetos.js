//! Objetos:

let myObjeto = {};

let perro = {
  nombre: 'Doggo',
  edad: 10,
};

const edadPerro = perro.edad;
console.log(edadPerro); // 10

//Destructuracion
const { edad } = perro;
console.log(edad); // 10

//Otra forma:
console.log(perro['edad']); // 10
