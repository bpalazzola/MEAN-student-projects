$(document).ready(function(){
    var toggle_red = false;
    $("button").click(function(){
        if(!toggle_red){
            $(this).css('background-color', 'red');
            color = $(this).css('background-color');
            toggle_red = true;
        } else {
            $(this).css('background-color', 'blue');
            color = $(this).css('background-color');
            toggle_red = false;
        }

    });
    var color;
    $("button").hover(function(){
        color = $(this).css('background-color');
        $(this).css('background-color', 'green');
        }, function(){
        $(this).css('background-color', color);
    });
});
