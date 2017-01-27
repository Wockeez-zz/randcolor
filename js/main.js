$(document).ready(function() {
    function randcolor() {
        var labelnumber = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
        var hex = "#";
        var rand = Math.floor(Math.random() * labelnumber.length);
        var rand2 = Math.floor(Math.random() * labelnumber.length);
        var rand3 = Math.floor(Math.random() * labelnumber.length);
        var rand4 = Math.floor(Math.random() * labelnumber.length);
        var rand5 = Math.floor(Math.random() * labelnumber.length);
        var rand6 = Math.floor(Math.random() * labelnumber.length);
        var randmas = hex + labelnumber[rand] + labelnumber[rand2] +  labelnumber[rand3] + labelnumber[rand4] + labelnumber[rand5] + labelnumber[rand6];
        console.log(randmas);
        var randomcolor = hex + randmas;
        document.getElementById('colornumber').innerText = randmas;
        $('body').css('background-color', randmas);
        //console.log(randomcolor);

        var hex1 = randmas.substr(1,6);
        var bigint = parseInt(hex1, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;
        var rgb = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById('rgbnumber').innerText = rgb;
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
