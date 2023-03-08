// ! Arrays

const myArray = [];

//? Metodos utiles
/*
    * push(): Este método agrega uno o más elementos al final de un arreglo.

    let array = [1, 2, 3];
    array.push(4);
    console.log(array); // [1, 2, 3, 4]

*/

/*
    * pop(): Este método elimina el último elemento de un arreglo.   
        
    let array = [1, 2, 3];
    array.pop();
    console.log(array); // [1, 2]

*/

/*
    * shift(): Este método elimina el primer elemento de un arreglo.

    let array = [1, 2, 3];
    array.shift();
    console.log(array); // [2, 3]

*/

/*
    * unshift(): Este método agrega uno o más elementos al principio de un arreglo.

    let array = [1, 2, 3];
    array.unshift(0);
    console.log(array); // [0, 1, 2, 3]

*/

/*
    * splice(): Este método puede eliminar, agregar o reemplazar uno o más elementos en cualquier posición de un arreglo.

    let array = ['apple', 'banana', 'cherry', 'orange'];
    array.splice(2, 1);
    console.log(array); // ['apple', 'banana', 'orange']

    -> array.splice(start, deleteCount, item1, item2, ...)

    start:  Indica el índice del arreglo donde se comenzará a hacer la operación de agregar o eliminar elementos.
            Si es un número negativo, indica un índice relativo al final del arreglo.

    deleteCount:Indica la cantidad de elementos que se eliminarán a partir de start. 
                Si se omite o es 0, no se eliminará ningún elemento.

    item1, item2, ...: Son los elementos que se agregarán al arreglo a partir de start.

    retorna lo que es eliminado.

*/
/*
    * concat(): Este método devuelve un nuevo arreglo que combina dos o más arreglos.

    let array1 = [1, 2];
    let array2 = [3, 4];
    let array3 = array1.concat(array2);
    console.log(array3); // [1, 2, 3, 4]



*/
/*
    * slice(): Este método devuelve una copia de una parte de un arreglo.

    let array = [1, 2, 3, 4];
    let newArray = array.slice(1, 3);
    console.log(newArray); // [2, 3]

    -> array.slice(start, end)

    start:  Indica el índice del arreglo donde se comenzará a obtener los elementos de la porción del arreglo.
            Si es un número negativo, indica un índice relativo al final del arreglo. Si se omite, start se considera 0.

    end:    Indica el índice del arreglo donde se terminará de obtener los elementos de la porción del arreglo. 
            Si es un número negativo, indica un índice relativo al final del arreglo. Si se omite, end se considera el índice del último elemento del arreglo.

*/
/*
    * forEach(): Este método ejecuta una función para cada elemento de un arreglo.

    let array = [1, 2, 3];
    array.forEach(function(element) {
        console.log(element);
    });
    Output: 1 2 3

*/
/*
    * map(): Este método crea un nuevo arreglo con los resultados de la llamada 
           a una función proporcionada por cada elemento del arreglo original.

    let array = [1, 2, 3, 4];
    let newArray = array.map(function(element) {
        return element * 2;
    });
    console.log(newArray); // [2, 4, 6, 8]

*/
/*
    * filter(): Este método crea un nuevo arreglo con todos los elementos que cumplan 
              una condición proporcionada por una función.

    let array = [1, 2, 3, 4];
    let newArray = array.filter(function(element) {
        return element % 2 === 0;
    });
    console.log(newArray); // [2, 4]

*/
/*
    * reduce(): Este método ejecuta una función reductora sobre cada elemento de un arreglo, 
              devolviendo al final un único valor.

    const numbers = [1, 2, 3, 4, 5];

    const sum = numbers.reduce(function(acumulador, valorActual) {
        return acumulador + valorActual;
    }, 0);
    console.log(sum); // 15

    -> array.reduce(callback, initialValue)
    -> function callback(acumulador, valorActual, _index, _arreglo)


*/

/* 
    * find():  buscar un elemento en un arreglo que cumpla con una determinada condición
    array.find(funcion(elemento, _indice, _arreglo) {
        return (condición para buscar el elemento)
    });

    const numeros = [1, 3, 5, 6, 7, 9, 10, 11, 13];

    const numeroPar = numeros.find(function(num) {
        return num % 2 === 0;
    });

    console.log(numeroPar); // 6

*/
/* 
    * some(): verificar si al menos un elemento en un arreglo cumple con una determinada condición.
    array.some(funcion(elemento, indice, arreglo) {
        return (condición para verificar si el elemento cumple con la condición)
    });

    const numeros = [1, 3, 5, 7, 9, 11, 12, 13];

    const hayNumeroPar = numeros.some(function(num) {
        return num % 2 === 0;
    });

    console.log(hayNumeroPar); // true

*/
/* 

*/
/* 

*/
/* 

*/
