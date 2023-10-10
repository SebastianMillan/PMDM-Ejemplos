$(document).ready(() => {
    //.empty() -> borra todos los nodos hijos ( y su contenido) de los elementos seleccionados
    // Así podemos vaciar todas el contenido de las listas ul de nuestro html
    $("ul").empty();
    //.html() -> puede ser usada para obtener el contenido del primer elemento de los seleccionados.
    var content = $("li").html();
    //Además de para obtener el contenido, con esta función podemos modificar el contenido de
    //TODOS los elementos seleccionados.
    //Hacer que el contenido de todas las listas sea un único elemento
    //Sustituye el contenido que tuviera
    $("ul").html("<li>UNO</li");
    //Lo mismo pero usando una función que pone a nuestra disposición la posición dentro de los elementos seleccionados y el texto anterior.
    $("ul").html((index, oldText) => {
        return "<li>" + index + "</li>";
    });
    //.append(“contenido”) -> añade ese contenido justo al final de los elementos seleccionados.
    //.prepend(“contenido”) -> añade ese contenido justo al principio de los elementos seleccionados.
    $('li').append('<li>TRES</li>');
    $('li').prepend('<li>TRES</li>');
    // .wrap() -> añade cierta estructura HTML alrededor de todos y cada uno de los elementos seleccionados.
    //Envuelve todos los article con una estructura
    $("article").wrap("<div class=" + article_outer + "></div>");
    //Deshacer el cambio anterior hecho con WRAP
    $("article").unwrap();
    //Si queremos comprobar que el padre cumple condiciones
    $("article").unwrap(".article_outer");
    //wrapAll() es análogo a .wrap() pero sólo añade un elemento envolvente que cubre a todos los seleccionados.
    //Debemos tener cuidado si hay elementos intrusos o diferentes entre ellos.
    //wrapInner() es análogo a .wrap() pero el elemento envolvente se añade no como padre sino al contenido de los seleccionados.
    $('article').wrapAll("<div class='article_outer'></div>");
    $('article').wrapInner("<div class='article_outer'></div>");
    // .val() -> podremos obtener y fijar el valor de los distintos campos de los formularios.
    //Para obtener el valor de un campo de formulario. El PRIMERO de los seleccionados
    var valor = $("some_selector").val();
    //Para fijar el valor para TODOS los campos seleccionados
    $("some_selector").val("some_value");
    //Obtengo el valor del primer input de tipo texto
    var valor = $("input[type=text]").val();
    //Todos los input de tipo text van a mostrar "Insert Value"
    $("input[type=text").val("Insert Value");
});