(function ($, document, window) {
    $(function () {
        initCoupon();

        /*点击小三角,显示隐藏规则*/
        $('.toggleRules').click(function (e) {
            e.stopPropagation();
            /*三角图标*/
            var $icon = $(this).find('.icon');
            /*规则*/
            var $para = $(this).parent().siblings('.rule').children();
            if (!$icon.hasClass('icon-up')) {
                $icon.addClass('icon-up');
                $para.fadeIn(300);
                $(this).parents('.coupon-item').animate({height: "4.133333rem"}, 300);
            } else {
                $icon.removeClass('icon-up');
                $para.fadeOut(300);
                $(this).parents('.coupon-item').animate({height: "2.5333333rem"}, 300);
            }
        })

        /*选择优惠券*/
        $('.coupon-item .icon-unsel').on('click',function () {
            if($(this).hasClass('icon-sel')){
                $(this).removeClass('icon-sel')
            }else {
                $('.icon-unsel').removeClass('icon-sel')
                $(this).addClass('icon-sel')
            }
        })

        /*不使用优惠券*/
        $('.use-none .icon-unsel').on('click',function () {
            $(this).addClass('icon-sel');
            setTimeout(()=>{
                window.history.go(-1);
            },200)
        })

        /*点击保存*/
        $('.saveBtn').on('click',function () {

        })
    })

    /*优惠券初始化*/
    function initCoupon() {
        var data = {
            use:true,
            list: [
                {
                    price:60,
                    name:'限时映小盒券',
                    timeLimit:'2018-12-30',
                    rule:'使用规则使用规则使用规则使用规则使用规则使用规则使用规则使用规则使用规则使用规则使用规则使用规则'
                },
                {
                    discount:7.5,
                    name:'限时映小盒券',
                    timeLimit:'2018-12-30',
                    rule:'使用规则使用规则使用规则使用规则使用规则使用规则使用规则使用规则使用规则使用规则使用规则使用规则'
                },
                {
                    price:68,
                    sender:'白矾',
                    name:'0元兑换映小盒券',
                    timeLimit:'2018-12-30',
                    rule:'使用规则使用规则使用规则使用规则使用规则使用规则使用规则使用规则使用规则使用规则使用规则使用规则'
                }
            ]
        }
        var _html = template('tplCoupon',data);
        $('#couponContainer').html(_html);
    }
})(jQuery, document, window);