(function ($,window,document) {
    $(function () {
        /*初始化列表*/
        initOrder();
        var totalCount = 0;
        $('.add').on('click',function (e) {
            var count = $(this).siblings('.count').html();
            count++;
            $(this).siblings('.count').html(count);
        })
        $('.minus').on('click',function (e) {
            e.stopPropagation();
            var count = $(this).siblings('.count').html();
            count--;
            if(count>0){
                $(this).siblings('.count').html(count);
            }
            if(count===0){
                $(this).parents('.item').slideUp(200,function () {
                    $(this).remove();
                });
            }
        })

        /*点击选中*/
        $('.item .check-icon').on('click',function () {
            if (!$(this).hasClass("icon-sel")) {
                $(this).addClass("icon-sel");
                totalCount=0;
                $('.item .icon-sel').each(function (i,item) {
                    var price = parseFloat($(item).siblings('.detail').find('.num').html());
                    var num = parseFloat($($(item).siblings('.operate').find('.count')).html());
                    totalCount+=price*num;
                })
                $('.account-wrapper .num').html(totalCount);
            } else {
                $(this).removeClass("icon-sel");
                totalCount=0;
                $('.item .icon-sel').each(function (i,item) {
                    var price = parseFloat($(item).siblings('.detail').find('.num').html());
                    var num = parseFloat($($(item).siblings('.operate').find('.count')).html());
                    totalCount+=price*num;
                })
                $('.account-wrapper .num').html(totalCount);
            }
        })

        /*全选，反选*/
        $('.check .icon').on('click',function () {
            if (!$(this).hasClass("icon-sel")) {
                $(this).addClass("icon-sel");
                /*全选*/
                $('.item .check-icon').each((i,item)=>{
                    $(item).addClass('icon-sel');
                    totalCount=0;
                    $('.item .icon-sel').each(function (i,item) {
                        var price = parseFloat($(item).siblings('.detail').find('.num').html());
                        var num = parseFloat($($(item).siblings('.operate').find('.count')).html());
                        totalCount+=price*num;
                    })
                    $('.account-wrapper .num').html(totalCount);
                })
            } else {
                $(this).removeClass("icon-sel");
                totalCount=0;
                /*全不选*/
                $('.item .check-icon').each((i,item)=>{
                    $(item).removeClass('icon-sel');
                })
                $('.account-wrapper .num').html(totalCount);
            }
        })

        /*点击去结算*/
        $('#getPay').on('click',function () {
            if(totalCount===0){
                return false;
            }else {
            }
        })

        /*计算是否增加margin-bottom*/
        var accountTop = $('.account-wrapper').position().top;
        var bannerHeight = $('.banner').height();
        var splitTop = accountTop-bannerHeight;
        var orderHeight = $('#order').height();
        if(orderHeight>splitTop){
            $('#order').css({'margin-bottom':'200px'})
        }else {
            $('#order').css({'margin-bottom':'0'})
        }
    })
    function initOrder() {
        var data = {
            list:[
                {
                    imgSrc:'./assets/imgs/shopping-cart/cake.png',
                    name:'芒果白雪',
                    price:69,
                    count:1
                },
                {
                    imgSrc:'./assets/imgs/shopping-cart/cake.png',
                    name:'芒果白雪',
                    price:69,
                    count:2
                },
                {
                    imgSrc:'./assets/imgs/shopping-cart/cake.png',
                    name:'芒果白雪',
                    price:69,
                    count:3
                },
                {
                    imgSrc:'./assets/imgs/shopping-cart/cake.png',
                    name:'芒果白雪',
                    price:69,
                    count:4
                },
                {
                    imgSrc:'./assets/imgs/shopping-cart/cake.png',
                    name:'芒果白雪',
                    price:69,
                    count:1
                },
                {
                    imgSrc:'./assets/imgs/shopping-cart/cake.png',
                    name:'芒果白雪',
                    price:69,
                    count:2
                },
                {
                    imgSrc:'./assets/imgs/shopping-cart/cake.png',
                    name:'芒果白雪',
                    price:69,
                    count:3
                },
                {
                    imgSrc:'./assets/imgs/shopping-cart/cake.png',
                    name:'芒果白雪',
                    price:69,
                    count:4
                },
            ]
        }
        var html = template('tplOrder',data);
        $('#order').html(html);
    }
})(jQuery,window,document);