$(document).ready(function() {
    $('.nav_li').hover(
        function() {
            $('.overlay').css('display', 'block');
        },
        function() {
            $('.overlay').css('display', 'none');
        }
    )
})