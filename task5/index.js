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
    );

    //バーガーメニューがクリックされたらモバイル用ヘッダー表示
    $('.hamburger').on('click', function() {
        $('.mobile_header').css('display', 'block');
    });

    //モバイルの各セクションがクリックされたらサブメニューを表示
    $('.mobile_header_section').on('click', function() {
        if($(this).find('.accordion_body').css('display') === 'block'){
            $('.accordion_body').css('display', 'none');
            $('.mobile_arrow').css('transform', 'rotate(-45deg)');
        } else {
            $('.accordion_body').css('display', 'none');
            $('.mobile_arrow').css('transform', 'rotate(-45deg)');
            $(this).find('.accordion_body').css('display', 'block');
            $(this).find('.mobile_arrow').css('transform', 'rotate(-225deg)');
        }
    });

    //ハンバーガーがクリックされたらメニューが出てくる
    $('.hamburger').on('click', function() {
        $('.mobile_header').css('transform', 'translateY(0)');
    });

    //バッテンクリックでメニュー閉じる
    $('.close_btn').on('click', function() {
        $('.mobile_header').css('transform', 'translateY(-100%)');
    });

    //カテゴリータグの表示・非表示
    $('.category_tag_btn').on('click', function(){
        $('.tag_list').toggleClass('scale_y_full');
    });
});