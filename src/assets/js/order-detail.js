(function ($,window,document) {
    $(function () {
        initDetail();

        /*评论页面*/
        $("#comment").maxlength({
            max: 100,
            feedbackText: '还可输入{r}字'
        })

    })

    var orderStatus = {
        unPay : '未付款',
    unDelivery : '等待发货',
    unReceive : '已发货',
    unRate : '已签收',
    finish : '已完成'
    }

    function initDetail() {
        var data = {
           list:[
               {
                   status:orderStatus.unRate,
                   timeLimit:'19:20',
                   address:{
                       name:'张三',
                       tel:'17323452387',
                       text:'上海市浦东新区广兰路'
                   },
                   cake: {
                           imgSrc:'./assets/imgs/order-detail/cake.png',
                           name:{
                               cn:'至爱红丝绒',
                               en:'INBOX'
                           },
                           nowPrice:69,
                           oldPrice:20,
                           count:1
                       },
                   totalPrice:69,
                   discount:40,
                   freight:0,
                   sum:20,
                   orderNum:'SHP0919713',
                   orderTime:'2017-06-02 10:52'
               }
           ]
        }
        var html = template('tplOrderDetail',data);
        $('.order-detail-container').html(html);

        init();
    }

    function init() {
        /*点击评价，弹框*/
        $('.getRate').on('click',function () {
            $('.rateShade').fadeIn(200);
        })
        /*弹框消除*/
        $('.icon-close').on('click',function () {
            $('.rateShade').fadeOut(200);
        })
        $('.rateShade').on('click',function () {
            $(this).fadeOut(200)
        })
        $('.rate-wrapper').on('click',function (e) {
            e.stopPropagation();
        })

        /*红包弹框*/
        $('.send-envelop').on('click',function () {
            $('.envelope-shade').fadeIn(200)
        })
        /*弹框消除*/
        $('.icon-close').on('click',function () {
            $('.envelope-shade').fadeOut(200);
        })
        $('.envelope-shade').on('click',function () {
            $(this).fadeOut(200)
        })
        $('.envelope-wrapper').on('click',function (e) {
            e.stopPropagation();
        })
        
        /*发表评论后*/
        $('.sendComment').on('click',function () {
            
        })
    }

})(jQuery,window,document);