$(document).ready(function(){
    $('.to_top').on('click', function(e){
        $('body, html').animate({'scrollTop': 0}, 500);
    });
});