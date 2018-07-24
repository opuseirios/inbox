(function ($,window,document) {
    $(function () {
        /*轮播图初始化*/
        var swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },
            loop:true,
            autoplay: {
                delay: 3000,
                disableOnInteraction:false
            },
        });

        /*弹框*/
        $('.linkIncake').click(function () {
            $('.city-shade').fadeIn(400);
        })
        $('.icon-close').click(function () {
            $('.city-shade').fadeOut(400);
        })

        /*选择城市*/
        $('.cities li').on('click',function () {
            $(this).addClass('current')
                .siblings().removeClass('current');
        })
    })
})(jQuery,window,document);