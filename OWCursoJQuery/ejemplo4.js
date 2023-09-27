$(document).ready(() => {
    //Si tenemos el siguiente elemento en la página
    // <input id="ej" type="text" value="Pepe">

    console.log($("#ej").attr("value"));
    //Salida -> Pepe

    console.log($("#ej").prop("value"));
    //Salida -> Pepe

    console.log($("#ej").attr("disable"));
    //Salida -> undefined -> No está en el HTML

    console.log($("#ej").attr("disable"));
    //Salida -> false . No está pero es una propiedad del DOM

    //Modificamos el valo del elemento del DOM
    $("#ej").val("Manuel");

    console.log($("#ej").attr("value"));
    //Salida -> Pepe, el valor que tengo en el HTML

    console.log($("#ej").prop("value"));
    //Salida -> Manuel, el valor actual de la propiedad

    // .attr() -> Esta función de jQuery sirve para obtener o establecer el valor de uno o varios atributos.

    //Obtengo la dirección del PRIMER ENLACE
    //Obtengo el valor del atributo href
    var url = $("a").attr("href");

    //Todos los enlaces se abrirán en una nueva ventana
    //Establezco ese atributo para TODOS LOS enlaces
    $("a").attr("target", "_blank");

    //Establezco dos atributos a la vez para 
    //el elemento con ese id (el selector podría devolver más elementos)
    $("#miprofile").attr({
        'alt': "Foto de mi cara",
        'title': "Foto hecha por mí"
    });
    //Eliminar un atributo dado de los los elementos seleccionados
    $("some_selector").removeAttr("some_attribute");
    // .removeAttr() -> Esta función de jQuery sirve para borrar atributos de los elementos 
    //seleccionados(en caso de que existan en los elementos)
    //Ejemplo
    //Quita el atributo required de todos los inputs (si es que lo tenían)
    $("input").removeAttr("required");
    // .prop() -> Esta función de jQuery sirve para obtener o modificar el valor de una o varias propiedades.
    //Obtengo propiedad href del primer enlace
    var url = $("a").prop("href");
    //Todos los enlaces se abrirán en una nueva ventana
    //Pongo ese valor a la propiedad
    $("a").prop("target", "_blank");
    //Establezco dos propiedades a la vez para una imagen que tiene un id
    $("#miprofile").prop({
        'alt': "Foto de mi cara",
        'title': "Foto hecha por mí"
    });
    // .removeProp() -> Esta función de jQuery sirve para eliminar propiedades de los elementos seleccionados.
    //Eliminar una propiedad dada de los los elementos seleccionados
    $("some_selector").removeProp("some_attribute");
    //Ejemplo
    $("input").removeProp("required");
});