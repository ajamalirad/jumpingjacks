

$(function(){

    $('.start').on('click', function(){
        console.log('we clicked the button');
        // hide the start button
        if ($(this).hasClass('start')) {
            $(this).addClass('hidden');

            let seconds = 30;

            const countdown = window.setInterval(function(){
                //show text for the seconds/ start the countdown
                $('.seconds').text(seconds).removeClass('hidden');
                seconds = seconds - 1;

                if (seconds % 2 === 0){
                //change image for even numbers
                    $('.jacks').addClass('jump');
                } else {
                    $('.jacks').removeClass('jump');
                };

                if(seconds < -1) {
                    $('.seconds').text('You did it!').css('backgroundColor','#E2725B').css('color','floralwhite');
                    //change image to person with party hat
                    $('.jacks').addClass('done');
                    //stop countdown
                    window.clearInterval(countdown);
                  };
            }, 1000);
        };
    });

    //reload the app
    $('.seconds').on('click', function(){
        location.reload();
    });


});