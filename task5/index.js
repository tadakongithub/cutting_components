$(document).ready(function() {
    /*サブメニューがないときは黒のオーバーレイをかけない*/
    var nav_li = $('.nav_li').has('.sub_menu_wrapper');
    $(nav_li).hover(
        function() {
                $('.overlay').css('display', 'block');
        },
        function() {
                $('.overlay').css('display', 'none');
        }
    )
})