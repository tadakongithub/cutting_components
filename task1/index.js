
$(document).scroll(function() {
    var header_height = $('.header_desk_top').height();
    var length_scrolled = $(this).scrollTop();
    var tabs_when_scrolled = $('.tabs_when_scrolled');

    if(length_scrolled > header_height) {
        $(tabs_when_scrolled).css('top', 0);
    } else if (length_scrolled <= header_height) {
        $(tabs_when_scrolled).css('top', '-70px');
    }
});
