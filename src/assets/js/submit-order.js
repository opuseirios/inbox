(function ($,window,document) {
    $(function () {

        /*初始化订单*/
        initOrder();

        /*弹框*/
        $('.freight').on('click',function () {
            $('.freight-rule').fadeIn(200);
            $('.freight-content').animate({bottom: 0}, 400);
        })
        /*取消，去除遮层*/
        $('.done').on('click', function () {
            $('.freight-rule').fadeOut(400);
            $('.freight-content').animate({bottom: -500}, 400);
        })
        /*点击遮层，去掉遮层*/
        !$('.freight-rule').on('click', function () {
            $(this).fadeOut(400);
            $('.freight-content').animate({bottom: -500}, 400);
        })
        /*阻止冒泡*/
        $('.freight-content').on('click', function (e) {
            e.stopPropagation();
        })
    })
    function initOrder() {
        var data = {
            list:[
               {
                imgSrc:'./assets/imgs/submit-order/inbox1.png',
                cn:'至爱红丝绒',
                en:'INBOX',
                price:{
                    now:20,
                    old:69
                },
                count:2
              },
            {
                imgSrc:'./assets/imgs/submit-order/inbox1.png',
                cn:'至爱红丝绒',
                en:'INBOX',
                price:{
                    now:20,
                    old:69
                },
                count:2
            },
            {
                imgSrc:'./assets/imgs/submit-order/inbox1.png',
                cn:'至爱红丝绒',
                en:'INBOX',
                price:{
                    now:20,
                    old:69
                },
                count:2
            },
            {
                imgSrc:'./assets/imgs/submit-order/inbox1.png',
                cn:'至爱红丝绒',
                en:'INBOX',
                price:{
                    now:20,
                    old:69
                },
                count:2
            }
           ]
        }
        var html = template('tplOrder',data);
        $('.items').append(html);
    }
})(jQuery,window,document);