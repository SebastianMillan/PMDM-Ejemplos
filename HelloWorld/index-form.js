$(document).ready(() => {
    $(document).on('click', '#btnLogin', () => {
        var email = $('#email').val();
        var pass = $('#password').val();

        clearFields();

        if (email == '') {
          $('#email').addClass('is-invalid');
        }
        if ((pass == '')) {
          $('#password').addClass('is-invalid');
        }
    });   

    function clearFields() {
        $('#email').removeClass('is-invalid');
        $('#password').removeClass('is-invalid');
    }
});