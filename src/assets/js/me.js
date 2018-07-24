(function ($, window, document) {
    $(function () {
        /*联系客服，弹出遮层*/
        $('.linkService').on('click', function () {
            $('.service-shade').fadeIn(400);
            $('.service').animate({bottom: 0}, 400);
        })
        /*取消，去除遮层*/
        $('.cancel').on('click', function () {
            $('.service-shade').fadeOut(400);
            $('.service').animate({bottom: -500}, 400);
        })
        /*点击遮层，去掉遮层*/
        !$('.service-shade').on('click', function () {
            $(this).fadeOut(400);
            $('.service').animate({bottom: -500}, 400);
        })
        /*阻止冒泡*/
        $('.service').on('click', function (e) {
            e.stopPropagation();
        })
    })
})(jQuery, window, document);