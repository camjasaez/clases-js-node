/* 
    El DOM es una representación del documento HTML como un grupo de nodos y objetos.
        - Document Object Model

    * Interactuando con el DOM/HTML desde js:
        
        -> document.querySelector(selector)
            - selector: Es un string que indica el nodo/elemento a seleccionar
            - El selector se anota segun:
                - La etiqueta: nombrandola normalmente
                - La clase: comienza con .
                - El id: comienza con #

            Ej: const titulo = document.querySelector('h1');
                - Con esto capturamos la primera ocurrencia de la etiqueta h1

        -> document.getElementBy..

    * Escribiendo en el HTML desde js:
        
        Una vez que se tiene seleccionado una variable 
        ( continuando con el ejemplo de arriba)
        -> titulo.innerHTML = ''
            - Le pasamos un atributo HTML en formato string que se añadirá como nuevo nodo.

        -> titulo.innerText = ''
            - Le pasamos un string que se añadirá como texto plano.
    
    * Obtener y fijar contenido de atributos:
         Si tenemos por ejem:
            <p class="parrafo">Soy un parrafo 2</p> => const parrafo = document.querySelector('.parrafo')
        
        para obtener lo que contiene un atributo en especifico:
         - parrafo.getAttribute('class') // parrafo

        para fijar nuevo atributo:
            - parrafo.setAttribute('myAtt','atributo') // <p class="parrafo" myAtt="atributo">Soy un parrafo 2</p>

    * Interactuar especificamente con las clases:
        
        p.classList.add('nuevo') =>  <p class="parrafo nuevo">Soy un parrafo 2</p>
        p.classList.remove('nuevo') =>  <p class="parrafo">Soy un parrafo 2</p>
        p.classList.toggle('nuevo') =>  <p class="parrafo nuevo">Soy un parrafo 2</p> => <p class="parrafo">Soy un parrafo 2</p>
        p.classList.contains('nuevo') =>  <p class="parrafo nuevo">Soy un parrafo 2</p> => true

    * Interactuar con los inputs
        Ej: const input = document.querySelector('input');
        input.value = 'Hola mundo'
        => <input value="Hola mundo"/>

    * Crear nuevos nodos/etiquetas
        document.createElement('div')
        => <div></div>
    
*/
