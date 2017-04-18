$(document).ready(function(){
    $("button").click(function(){
        if($(this).css('background-color') == 'blue'){
            $(this).css('background-color', 'red')
        } else {
            $(this).css('background-color', 'blue');
        }

    });
});

console.log('javascript loaded')
