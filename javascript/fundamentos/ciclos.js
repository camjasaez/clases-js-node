/*
    Los bucles pueden ejecutar un bloque de código varias veces. JavaScript admite diferentes tipos de bucles:

    for - recorre un bloque de código varias veces

    for/in - recorre las propiedades de un objeto

    for/of - recorre los valores de un objeto iterable

    while - recorre un bloque de código mientras se cumple una condición específica

    do/while - también recorre un bloque de código mientras se cumple una condición específica

*/
/*
    * for - recorre un bloque de código varias veces

    for (inicialización; condición; expresión de actualización) {
         --> bloque de código a ejecutar en cada iteración <--
    }

    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }

*/
/*
    * for/in - recorre las propiedades de un objeto
    for (variable in objeto) {
        --> bloque de código a ejecutar en cada iteración <--
    }

    const persona = { nombre: "Juan", edad: 30, ciudad: "Bogotá" };

    for (let propiedad in persona) {
        console.log(propiedad); //nombre,edad,ciudad
    }
    
    En los arrays te mostraria el indice.
    
*/
/*
    * for/of - recorre los valores de un objeto iterable
    for (variable of objetoIterable) {
        --> bloque de código a ejecutar en cada iteración <--
    }

    const frutas = ["manzana", "banana", "naranja"];

    for (let fruta of frutas) {
        console.log(fruta);//manzana,banana,naranja
    }

*/
/*
    * while - recorre un bloque de código mientras se cumple una condición específica

    while (condicion) {
         --> bloque de código a ejecutar mientras la condición sea verdadera <--
    }

*/
/*
    * do/while - también recorre un bloque de código mientras se cumple una condición específica
    do {
    --> bloque de código a ejecutar al menos una vez <--
    } while (condicion);

*/
