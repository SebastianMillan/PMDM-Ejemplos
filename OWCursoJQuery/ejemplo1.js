$(document).ready(() => {
    $('#id');
    $('.class');
    $('input:required');
    $('img:last-of-type');
    $('td:first-child');
    $('h1:hover');
    $('a:visited')
    $('input:nth-child(4)').css('background-color', 'red');
    $('input:nth-child(4)').css('color', 'blue');
    $('input:nth-child(4)').hide();
    $('input:last-child').show();
    //eq(index) -> The eq() method returns an element with a specific index number of the selected elements.
    $(selector).eq(index);
    $('.card img').eq(0).hide();
    $('.card img').eq(0).show();
    //:has -> Selecciona todo los formularios que tengan como hijos la condicion
    $('#form').has('input[type="password"]');
    $('tbody td:contains("a")').show();
    //:even :odd -> Seleccionar pares o impares
    $('tbody td:even').show();
    // :gt -> Empieza a seleccionar a partir del número 3
    $('img:gt(3)').show();
    // :input -> Para seleccionar cualquier elemento de un formulario, ya sea un input, textarea,select o button.
    // .first .last -> Seleccionar el primero o el último
    $('img').first();
    $('img').last();
    /*
    :button, :file, :radio, :reset -> Para seleccionar cualquier tipo de botón (\ o con type=’button’) o el resto de elementos de esos tipos de un formulario.
    :submit, :text, :checkbok -> Para los correspondientes tipos de inputs.
    :password, :image -> Para los correspondientes tipos de inputs.
    :header -> Para seleccionar cualquier tipo de etiqueta de cabecera (h1,h2, h3…)
    :hidden o :visible -> Para seleccionar elementos ocultos o visibles.
    :parent -> Aquellos elementos que tienen al menos un hijo dentro del árbol HTML.
    */
    $(':password').css('color', 'red');
    $(':header').hide();
    $(':visible').hide();
    $(':background').css('background-color', 'red');

    // .each -> Recorre todos los elementos seleccionados y poder modificar elementos de todos ellos
    // index es un parámetro opcional de la función. Indica la posición que ocupa cada elemento dentro del conjunto de elementos devueltos (empezando en cero).
    // $(this) hace referencia cada vez que se ejecuta la función. Al objeto que se está tratando actualmente de entre los devueltos por la selección.
    function modificarListas(text) {
        $('li').each((index) => {
            console.log('El elemento ' + index + ' contiene' + $(this).text());
            $(this).text("HOLA");
        });
    }

});