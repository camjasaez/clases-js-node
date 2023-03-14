/* 
    El asincronismo en JavaScript se refiere a la capacidad del lenguaje para realizar operaciones
    sin bloquear la ejecución del programa. Esto significa que se pueden realizar múltiples tareas al mismo tiempo,
    en lugar de tener que esperar a que una tarea se complete antes de continuar con la siguiente.
*/

/* 
    Callbacks:
    Los callbacks son funciones que se pasan como argumentos a otras funciones
    y que se ejecutan cuando se completa una tarea asíncrona. 

    function sumar(x, y, callback) {
        setTimeout(() => {       // setTimeout es una función que se ejecuta después de un tiempo determinado.
            callback(x + y);     // Ayuda a simular una operación asíncrona.
        }, 1000);
    }

    sumar(2, 3, result => {
        console.log(result); // 6
    });
*/

/*  
    Promesas:
    Las promesas son objetos que representan una tarea asíncrona y que pueden estar en uno de tres estados: 
    pendiente, resuelta o rechazada. Las promesas permiten encadenar tareas asíncronas en un orden específico
    y manejar errores de manera más fácil. 

    function multiplicar(x, y) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(x * y);
            }, 1000);
        });
    }

    multiplicar(2, 3)
    .then(result => {
        console.log(result); // 6
    })
    .catch(error => {
        console.error(error);
    });

*/

/*
    Async/Await:
    Async/await es una sintaxis más reciente que utiliza promesas para manejar el asincronismo de manera más sencilla. 
    Con async/await, podemos escribir código asíncrono que se parece al código síncrono y es más fácil de leer y entender.

    function multiplicar(x, y) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(x * y);
            }, 1000);
        });
    }

    async function multiplicarAsync(x, y) {
        const result = await multiplicar(x, y);
        console.log(result);
    }

    multiplicarAsync(3, 2); // 6
*/
