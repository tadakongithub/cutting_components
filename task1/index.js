/*デスクトップ、スクロール時上から出てくるタブ*/
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


$(document).ready(function() {
    /*sp サイドバーの表示、非表示*/
    $('.burger').on('click', function() {
        $('#mySideNav').css({'width':'100vw', 'left': '0'});
        $('.sp_header').css('left', '-100vw');
    });

    $('.closebtn').on('click', function() {
        $('#mySideNav').css({'width':'0', 'left':'100%'});
        $('.sp_header').css('left', '0');
    });

    /*sp サイドバー内のドロップダウン*/
    $('.sp_li_container').click(function(){
        $(this).parent('.sidenav_li').children('.sp_dropdown').slideToggle(200);
        $(this).find('span').toggleClass('opacity');
        $(this).find('.plus').toggleClass('display_none');
        $(this).find('.minus').toggleClass('display_none');
    });
});
