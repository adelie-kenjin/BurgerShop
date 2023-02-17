$(function($){
    // HTMLのbg-swicherにて、jqueryのbgSwitcherを動かす
    $('.bg-swicher').bgSwitcher({
        images: ['images/bg1.jpg','images/bg2.jpg','images/bg3.jpg'],
        interval: 5000,
        loop: true
    });

    // スクロールされた時にJavaScriptが発動される
    $(window).scroll(function(){
        // offsetメソッドは画面での要素の位置を取得できる。今回はtopなので、Y座標を抽出してtargetElementに代入
        var targetElement = $('.fadein').offset().top;
        // scrollTopメソッドで取得したスクロール量をscrollに代入
        var scroll = $(window).scrollTop();
        // 画面の高さを代入
        var windowHeight = $(window).height();
        // 指定する要素（フワッとする）画面の下200pxの位置にきたら
        if(scroll > targetElement - windowHeight + 200){
            // 文字の透明度が1に
            $('.fadein').css('opacity','1');
            // 文字の位置が0に戻る
            $('.fadein').css('transform','translateY(0)');
        }
    });

    // HTMLのsliderというクラスに対して、slickを実行するという意味
    $('.slider').slick({
        // 左右矢印を表示しない
        arrows: false,
        // 自動再生する
        autoplay: false,
        // ドットを表示する
        dots: true,
        // 両端見切れ状態にする
        centerMode: true,
        // センターモードの時、左右のスライドを20%ずつ表示する
        centerPadding: '20%',
    });

    $('.more-button').on('click',function(){
        // クラス名open-boxがついているものが見えていない時に実行する
        if($('.open-box').is(':hidden')){
            // クラス名open-boxの箱に対して上から下にスライドして降りてくるように表示させる
            $('.open-box').slideDown();
            // ボタンのテキストをcloseに変更
            $(this).text('close');
            // cssから背景色を変更
            $(this).css('background-color','#808080');
        }else{
            // クラス名open-boxがついているものが見えている時
            // クラス名open-boxの箱に対して下から上に登っていくように表示させる
            $('.open-box').slideUp();
            $(this).text('more');
            $(this).css('background-color','#fabb51');
        }
    });

    // JavaScriptでmodaalを呼び出すと、モーダルウィンドウが使えるようになる。
    // モーダルウィンドウとして表示させる要素はクリックする要素内に配置するaタグによって指定
    $(".modal-button").modaal();

    $('nav a[href^="#"]').click(function() {
        // 移動位置の変更
        var adjust = 0;
        // 移動速度の変更
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 上に移動するか、下に移動するか。マイナスは上に、プラスは下に、
        var position = target.offset().top - adjust;
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });

});