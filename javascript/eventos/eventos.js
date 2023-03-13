/* 
    Eventos en JavaScript

    Las buenas practicas indican dejar las responsabilidades a cada 
    tecnologia segun corresponda, por lo tanto aunque tenemos los
    eventos directamente en html, es meor ocupar los listeners 
    de javascript

    Ej: 

    html: <button id="btnCalcular">Calcular</button>
    js: 
        const btn = document.querySelector('#btnCalcular');
        
        A QUIÉN -          QUÉ ACCIÓN - CUAL FUNCION
        btn.addEventListener('click', function () {
            console.log('Se hizo clic en el botón');
        });

    
    cuando hagamos 'click' en el boton...
        en la consola: 'Se hizo clic en el botón'

    los eventos mas comunes:
    
    - click: Se produce cuando el usuario hace clic en un elemento, como un botón, un enlace o una imagen.

    - mouseover: Se produce cuando el usuario mueve el cursor del ratón sobre un elemento.

    - keydown: Se produce cuando el usuario presiona una tecla del teclado.

    - load: Se produce cuando se ha cargado completamente una página web.

    - submit: Se produce cuando se envía un formulario.

    - change: Se produce cuando cambia el valor de un campo de formulario, como una casilla de verificación o un menú desplegable.

    - focus: Se produce cuando un elemento recibe el foco, es decir, cuando el usuario hace clic o tabula hasta él.

    - blur: Se produce cuando un elemento pierde el foco, es decir, cuando el usuario hace clic o tabula fuera de él.

    - scroll: Se produce cuando el usuario desplaza la página hacia arriba o hacia abajo.

    - resize: Se produce cuando se cambia el tamaño de la ventana del navegador.
*/
