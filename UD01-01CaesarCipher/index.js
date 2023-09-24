$(document).ready(() => {
    var abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    var message, caesarText, caesarArray, valorDesplz;
    var caesarMessage = [];
    var messageArray = [];
    var messageTrad = [];

    $(document).on('change', () => {
        valorDesplz = $('#valorDespz').val();
    });
    $(document).on('click', '#btnTrad', () => {
        caesarMessage = [];
        message = $('#message').val().toUpperCase();
        messageArray = message.split('');
        for (let i = 0; i < messageArray.length; i++) {
            if (messageArray[i] != ' ') {
                for (let j = 0; j < abc.length; j++) {
                    if (messageArray[i] == abc[j]) {
                        if (j > (valorDesplz - abc.length)) {
                            caesarMessage[i] = abc[(j + valorDesplz) % abc.length];
                        } else {
                            caesarMessage[i] = abc[j + valorDesplz];
                        }
                    }
                }
            } else {
                caesarMessage[i] = ' ';
            }
        }
        $('#caesarMess').text(caesarMessage.join(''));
    });
    $(document).on('click', '#btnDesc', () => {
        messageTrad = [];
        caesarText = $('#caesarText').val().toUpperCase();
        caesarArray = caesarText.split('');
        for (let i = 0; i < caesarArray.length; i++) {
            if (caesarArray[i] != ' ') {
                for (let j = 0; j < abc.length; j++) {
                    if (caesarArray[i] == abc[j]) {
                        if (j < valorDesplz) {
                            messageTrad[i] = abc[j + (abc.length - valorDesplz)];
                        } else {
                            messageTrad[i] = abc[j - valorDesplz];
                        }
                    }
                }
            } else {
                messageTrad[i] = ' ';
            }
        }
        $('#messageTrad').text(messageTrad.join(''));
    });
});