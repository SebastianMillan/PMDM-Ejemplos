$(document).ready(() => {
    var abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    var message;
    var caesarMessage = [];
    var messageArray;

    $(document).on('click', '#btnTrad', () => {
        message = $("#message").val().toUpperCase();
        messageArray = message.split('');
        for (let i = 0; i < messageArray.length; i++) {
            if (messageArray[i] != ' ') {
                for (let j = 0; j < abc.length; j++) {
                    if (messageArray[i] == abc[j]) {
                        if (j >= 24) {
                            caesarMessage[i] = abc[(j + 3) % 27];
                        } else {
                            caesarMessage[i] = abc[j + 3];
                        }
                    }
                }
            } else {
                caesarMessage[i] = ' ';
            }
        }
        $('#caesarMess').text(caesarMessage.join(''));
    });
});