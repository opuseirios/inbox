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
    })
})(jQuery,window,document);