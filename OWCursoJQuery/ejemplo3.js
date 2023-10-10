$(document).ready(() => {
    /*
    .addClass(): Para añadir clases CSS a los elementos seleccionados.
    .removeClass(): Para eleminar clases CSS de los elementos seleccionados.
    .toggleClass(): Para alternar que una clase esté o no esté en los elementos seleccionados.
    .hasClass(): Para saber si una clase está en CUALQUIERA de los elementos seleccionados.
    */
    //Le pasamos uno o varios nombre de clases a añadir a los elementos seleccionados
    $("some_selector").addClass("clase1 clase2 ...claseN");
    //Le pasamos una función que se aplica a cada elemento seleccionado.
    // Disponemos de la posición del elemento (index) y de $(this) para hacer referencia al elemento tratado
    // El valor devuelto será el nombre de la clase que se va añadir al elementos en concreto
    $("some_selector").addClass(function (index) {
        return "some_className";
    });
    //Añade las clases btn y btn-error a todos los elementos <button>
    $("button").addClass("btn btn-error");
    //Le añade a cada elemento <section> la clase section-X (según su posición en el conjunto de los elementos seleccionados)
    $("selection").addClass((index) => {
        return "section-" + index;
    });
    //Le pasamos uno o varios nombres de clases a borrar
    $("some_selector").removeClass("clase1, clase2,...,claseN");
    //Le pasamos una función que se aplica a cada elemento de entre los elementos seleccionados
    // y cuyo valor devuelto será la clase que se pretende borrar en cada elemento. 
    //Le pasamos la posición y tendremos disponible $(this).
    $("some_selector").removeClass(function (index) {
        return "someClassName";
    });
    //Borra las clases btn y btn-error de los elementos <button> en caso de que las tengan
    $("button").removeClass("btn btn-error");
    //Borra de cada elemento section la clase "section-index" en caso de que la tengan. Index es la posición que ocupan 
    //dentro del conjunto de elementos que devuelve el selector.
    $("button").removeClass(function (index) {
        return "section-" + index;
    });
    //Le pasamos el nombre de las clases de las que queremos alternar el estado. Es decir se añaden si no están o se quitan si están
    $("some_selector").toggleClass("clase1 clase2 ...claseN");
    //Igual que el anterior pero con un parámetro boleano (que puede ser el resultado de una función) que nos dice si 
    //hay que añadirla(true) si no está o quitarla si está(false)
    $("some_selector").toggleClass("clase1 clase2 ..claseN", booleano);
    //Quita las clases si están en los elementos seleccionados o las añade si no están.
    $('button').toggleClass('btn btn-error');
    //Quita las clases en los elementos seleccionados si no están.
    $('button').toggleClass('btn btn-error', false);
    //Quita las clases "section-1...section-2..." en los elementos seleccionados si están o las añade si no están.
    $('section').toggleClass(function (index) {
        return 'section-' + index;
    });
    // .hasClass -> Esta función de jQuery devuelve TRUE si CUALQUIERA de los elementos seleccionado tiene esa clase y FALSE en caso de que ninguno de ellos la tenga.
    $('some_selector').hasClass('clase1');
    //Ejemplo
    $('.btn').hasClass('btn-error');

});