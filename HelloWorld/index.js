$(document).ready(() => {
    var isBlackMode = false;
    console.log('Hello world!!!!!');
    //SELECTORES
    $('#mainTitle').html('Hello World jQuery loaded!!');
    $('#mainTitle').attr('style', 'color:yellow; background-color:black');
    //$('h1').html('Hello World jQuery loaded!!')
    //EVENTOS
    $(document).on('click', '#btnDarkLightMode', () => {
        if (isBlackMode) {
            $("body").attr("style", "color:black;background-color:white;");
        } else {
            $("body").attr("style", "color:white;background-color:black;");
        }
        isBlackMode = !isBlackMode;
    });
});