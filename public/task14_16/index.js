$(document).ready(function(){
    $('.burger').on('click', function(){
        $('.slide_menu').animate({'left': '0'}, 500);
    });

    $('.close_slide').on('click', function(){
        $('.slide_menu').animate({'left': '100%'}, 500);
    });

    $('.show_hidden_submenu').on('click', function(){
        $(this).parents('.slide_li').children('.hidden_ul').slideToggle();
        $(this).toggle();
        $(this).parent().children('.hide_shown_submenu').toggle();
    });

    $('.hide_shown_submenu').on('click', function(){
        $(this).parents('.slide_li').children('.hidden_ul').slideToggle();
        $(this).toggle();
        $(this).parent().children('.show_hidden_submenu').toggle();
    });
});