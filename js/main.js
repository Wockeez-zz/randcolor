$(document).ready(function() {
    function randcolor() {
        var labelnumber = "ABCDEF0123456789";
        var hex = "#";
        var rand = labelnumber.charAt(Math.floor(Math.random() * labelnumber.length));
        var rand2 = labelnumber.charAt(Math.floor(Math.random() * labelnumber.length));
        var rand3 = labelnumber.charAt(Math.floor(Math.random() * labelnumber.length));
        var rand4 = labelnumber.charAt(Math.floor(Math.random() * labelnumber.length));
        var rand5 = labelnumber.charAt(Math.floor(Math.random() * labelnumber.length));
        var rand6 = labelnumber.charAt(Math.floor(Math.random() * labelnumber.length));
        var randomcolor = hex + rand + rand2 + rand3 + rand4 + rand5 + rand6;
        document.getElementById('colornumber').innerText = randomcolor;
        $('body').css('background-color', randomcolor);
        console.log(randomcolor);
      /*  var currentcolor = $('body').css('background-color');
        document.getElementById('rgbnumber').innerText = currentcolor;
        console.log(currentcolor);*/
    }
    randcolor();

    $('body').on("keydown", function(event) {
        if (event.which == 32) {
            randcolor();
              $('#help_key').fadeOut(500);
        }
    });



    document.addEventListener('touchstart', function(event) {
        if (event.targetTouches.length == 1) {
            randcolor();
            $('#help_key').fadeOut(500);
        }
    }, false);

    function debugcopy() {
        var clipboard = new Clipboard('.btn');
        clipboard.on('success', function(e) {
            console.info('Action:', e.action);
            console.info('Text:', e.text);
            console.info('Trigger:', e.trigger);

            e.clearSelection();
        });

        clipboard.on('error', function(e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
        });
    }
    debugcopy();
});
