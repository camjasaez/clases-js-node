// ! Arrays

const myArray = [];

//? Metodos utiles
/*
    push(): Este método agrega uno o más elementos al final de un arreglo.

    let array = [1, 2, 3];
    array.push(4);
    console.log(array); // [1, 2, 3, 4]

*/

/*
    pop(): Este método elimina el último elemento de un arreglo.   
        
    let array = [1, 2, 3];
    array.pop();
    console.log(array); // [1, 2]

*/

/*
    shift(): Este método elimina el primer elemento de un arreglo.

    let array = [1, 2, 3];
    array.shift();
    console.log(array); // [2, 3]

*/

/*
    unshift(): Este método agrega uno o más elementos al principio de un arreglo.

    let array = [1, 2, 3];
    array.unshift(0);
    console.log(array); // [0, 1, 2, 3]

*/

/*
    splice(): Este método puede eliminar, agregar o reemplazar uno o más elementos en cualquier posición de un arreglo.

    let array = ['apple', 'banana', 'cherry', 'orange'];
    array.splice(2, 1);
    console.log(array); // ['apple', 'banana', 'orange']



*/
/*
    concat(): Este método devuelve un nuevo arreglo que combina dos o más arreglos.

    let array1 = [1, 2];
    let array2 = [3, 4];
    let array3 = array1.concat(array2);
    console.log(array3); // [1, 2, 3, 4]

*/
/*
    slice(): Este método devuelve una copia de una parte de un arreglo.

    let array = [1, 2, 3, 4];
    let newArray = array.slice(1, 3);
    console.log(newArray); // [2, 3]

*/
/*
    forEach(): Este método ejecuta una función para cada elemento de un arreglo.

    let array = [1, 2, 3];
    array.forEach(function(element) {
    console.log(element);
    });
    Output: 1 2 3

*/
/*
    map(): Este método crea un nuevo arreglo con los resultados de la llamada 
           a una función proporcionada por cada elemento del arreglo original.

    let array = [1, 2, 3, 4];
    let newArray = array.map(function(element) {
    return element * 2;
    });
    console.log(newArray); // [2, 4, 6, 8]

*/
/*
    filter(): Este método crea un nuevo arreglo con todos los elementos que cumplan 
              una condición proporcionada por una función.

    let array = [1, 2, 3, 4];
    let newArray = array.filter(function(element) {
    return element % 2 === 0;
    });
    console.log(newArray); // [2, 4]

*/
/*
    reduce(): Este método ejecuta una función reductora sobre cada elemento de un arreglo, 
              devolviendo al final un único valor.

    let array = [1, 2, 3, 4];
    let result = array.reduce(function(accumulator, currentValue) {
                    return accumulator + currentValue;
                }, 0);
    console.log(result); // 10

*/
