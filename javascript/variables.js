//! Variables

/*
    ! Variable var

    * Utiliza para declarar una variable global o local.
    * Puede ser reasignada en cualquier momento.
*/
var variableVar;

/*
    ! Variable let

    * declarar una variable que está limitada al bloque en el que se define.
    * pueden ser reasignadas, pero no pueden ser redeclaradas en el mismo ámbito.
*/
let variableLet;

/*
    ! Variable const

    * declarar una variable de solo lectura.
    *  (su valor  no puede ser reasignado después de ser definido).
    * también están limitadas al bloque en el que se definen.

*/
const variableConst = '';

//! Tipos de datos en JS

/*
    ! Tipos de datos primitivos:

    * Son los valores más básicos y simples que se pueden asignar a una variable.
    * Son datos que se pasan por valor.
    * Existen metodos envolventes para realizar operaciones ( Number, String, Boolean)

    number: Almacena valores numéricos, incluyendo enteros, decimales y números en notación exponencial.
    string: Almacena valores de texto, encerrados en comillas simples o dobles.
    boolean: Almacena valores de verdadero (true) o falso (false).
    null: Almacena un valor nulo, lo que significa que la variable no tiene ningún valor asignado.
    undefined: Almacena un valor indefinido, lo que significa que la variable no ha sido asignada o no tiene ningún valor.
    symbol: Almacena valores únicos e inmutables que se pueden utilizar como identificadores de propiedad en objetos.
*/

/*
    ! Tipos de datos No primitivos, los objetos!:

    * Se utilizan para almacenar colecciones de valores o propiedades.
    * Son datos que se pasan por referencia.
    * Contienen sus propios metodos integrados
    
    Object: El tipo de objeto es el tipo de datos más importante en JavaScript y se utiliza para almacenar 
            colecciones de valores o propiedades. Los objetos se definen utilizando llaves {} 
            y pueden contener pares de clave-valor.

    Array:  Un tipo de objeto que se utiliza para almacenar una colección de valores ordenados en una lista.
            Los arreglos se definen utilizando corchetes [] y cada elemento se separa por una coma.

    Function: Un tipo de objeto que se utiliza para definir y ejecutar funciones. Las funciones se definen
              utilizando la palabra clave function y pueden tomar argumentos y devolver valores

    Date: Un tipo de objeto que se utiliza para trabajar con fechas y horas. Los objetos de fecha se crean utilizando 
          la palabra clave new Date() y tienen métodos para trabajar con diferentes aspectos de las fechas y horas.
    
    RegExp: Un tipo de objeto que se utiliza para trabajar con expresiones regulares. Las expresiones regulares se definen
            utilizando una sintaxis especial y se pueden utilizar para buscar y reemplazar patrones de texto en cadenas

    Map y Set: Tipos de objetos que se utilizan para almacenar colecciones de valores únicos.
               Los objetos Map almacenan pares clave-valor y los objetos Set almacenan valores únicos.
*/

//? Diccionario:
//? bloque: un bloque es cualquier sección de código delimitada por llaves
