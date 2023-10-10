$(document).ready(() => {
    //Obtener el valor de una sola propiedad
    //MUY IMPORTANTE: La propiedad se obtiene del PRIMER ELEMENTO que nos devuelve el selector.
    var valor = $("some_selector").css("propiedad");
    //Ejemplo
    var color = $("li").css("color");
    //Establecer el valor de una propiedad para todos los elementos que nos devuelve el selector
    $("some_selector").css("propiedad", "valor");
    //Ejemplo (Incremento en 50px el valor actual)
    $("img").css("width", "+=50");
    //Pasando una funcion que recibe como parámetros la posición dentro de los seleccionado y el antiguo valor
    $("some_selector").css("propiedad", (index, valor) => {
        //$(this) hará referencia el elemento actual
    });
    //Si queremos obtener varias propiedades CSS del PRIMER ELEMENTO que nos devuelva el selector
    //Devuelve una ARRAY
    var props = $("some_selector").css(["prop1", "prop2", "propn"]);
    //Ejemplo a
    //Para establecer el valor de varias propiedades en los elementos seleccionados 
    $("some_selector").css({
        prop1: valor1, //o expresión/función
        prop2: valor2, //o expresión/función
        propN: valorn //o expresión / función
    });
    //Ejemplo aplicando css a la lista en la posición 0 (la primera)
    $("li").eq(0).css({
        'color': '#FFF',
        'background-color': '#000'
    });

});