$(document).ready(() => {

    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);

    $(document).on('click', '#btnGener', () => {
        var titulo = $('#titulo').val().toLowerCase();
        var urlResult;
        if (titulo == '') {
            $('#titulo').addClass('is-invalid');
        }
        //mirar funcion trim() -> Quita el espacio al final y al principio
        urlResult = titulo.split(' ').join('-');
        $('#url').val(urlResult);
    });

    $(document).on('click', '#btnAcept', () => {
        var titulo = $('#titulo').val();
        var url = $('#url').val();
        var descr = $('#descripcion').val();
        var result = num1 + num2;
        var respuestaNumber = parseInt($('#numberProtect').val());
        $('.security').removeClass('visually-hidden')
        $('#numberProtect').removeClass('is-invalid');

        if (titulo == '') {
            $('#titulo').addClass('is-invalid');
        } else {
            //Crear mejor un método clearFields para eliminar la clase is-invalid de todos los input
            //$('.form-control').removeClass('is-invalid');
            $('#titulo').removeClass('is-invalid');
        }
        if (url == '') {
            $('#url').addClass('is-invalid');
        } else {
            $('#url').removeClass('is-invalid');
        }
        if (descr == '') {
            $('#descripcion').addClass('is-invalid');
        } else {
            $('#descripcion').removeClass('is-invalid');
        }
        $('#preguntaNumber').text("¿Cuál es la suma entre " + num1 + " y " + num2 + "?");
        if (result == respuestaNumber) {
            $('#numberProtect').removeClass('is-invalid');
            $('.security').addClass('visually-hidden');
        } else {
            $('#numberProtect').addClass('is-invalid');

        }
    });
});