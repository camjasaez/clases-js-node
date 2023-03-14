/**
 * ! Funciones
 * *Las funciones son bloques de código que realizan una tarea específica
 * * y que pueden ser invocadas desde cualquier parte del código.
 */

// Declaración de función: se utiliza la palabra clave function para declarar una función,
//  seguida del nombre de la función y una lista de parámetros entre paréntesis. Luego,
//  se define el cuerpo de la función entre llaves.

//Funcion declarativa
function sumar(a, b) {
  return a + b;
}
sumar(1, 2); // 3

//Funciones anónimas: en este caso, se define una función sin un nombre
//y se asigna a una variable. ( funcion expresiva )
const sumar = function (a, b) {
  return a + b;
};

sumar(1, 2); // 3

// Funciones flecha: esta es una forma más concisa de definir funciones
// en JavaScript, utilizando una sintaxis de flecha (=>).

const sumar = (a, b) => {
  return a + b;
};

sumar(1, 2); // 3

//! Importante: Las funciones también pueden ser utilizadas como valores, lo que significa que
//!             se pueden pasar como argumentos a otras funciones o se pueden asignar
//!             a variables y objetos.

//!     Nota: A las funciones declarativas se les aplica hoisting, y a la expresión de función, no.
//!           Ya que el hoisting solo se aplica en las palabras reservadas var y function.
