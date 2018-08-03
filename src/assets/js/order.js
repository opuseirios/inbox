(function ($,window,document) {
    $(function () {
        /*tab栏切换*/
        $('.tab-item').on('click',function () {
            $(this).addClass('active').siblings().removeClass('active');
            /*ul也跟着切换*/
            var status = $(this).data('category');
            $('.order-wrapper>ul').fadeOut()
            $('#'+status).fadeIn();
            checkBottom(status);
        })
        initAllOrder();
        initUnpayOrder();
        initUnDelivery();
        initUnReceive();
        initUnRate();
    })

    /*检查高度*/
    function checkBottom(id) {
        var navBarTop = $('#navBar').position().top;
        var tabHeight = $('.tab').height();
        var offHeight = navBarTop-tabHeight;
        console.log(id);
        console.log($('#'+id).height());
        if($('#'+id).height()>offHeight){
            $('.order-wrapper').css({'margin-bottom':'100px'})
        }else {
            $('.order-wrapper').css({'margin-bottom':'0'})
        }
    }
    /*全部*/
    function initAllOrder() {
        var data = {
            list:[
                {
                    status:'待支付',
                    orderNum:'SHP0919713',
                    cakes:[
                        {
                            name:{
                                cn:'至爱红丝绒',
                                en:'INBOX'
                            },
                            imgSrc:'./assets/imgs/order/inbox1.png',
                            oldPrice:69,
                            nowPrice:20,
                            count:2
                        },
                        {
                            name:{
                                cn:'至爱红丝绒',
                                en:'INBOX'
                            },
                            imgSrc:'./assets/imgs/order/inbox1.png',
                            oldPrice:69,
                            nowPrice:20,
                            count:2
                        }
                    ]
                },
                {
                    status:'待发货',
                    orderNum:'SHP0919713',
                    cakes:[
                        {
                            name:{
                                cn:'至爱红丝绒',
                                en:'INBOX'
                            },
                            imgSrc:'./assets/imgs/order/inbox1.png',
                            oldPrice:69,
                            nowPrice:20,
                            count:2
                        }
                    ]
                },
                {
                    status:'待收货',
                    orderNum:'SHP0919713',
                    cakes:[
                        {
                            name:{
                                cn:'至爱红丝绒',
                                en:'INBOX'
                            },
                            imgSrc:'./assets/imgs/order/inbox1.png',
                            oldPrice:69,
                            nowPrice:20,
                            count:2
                        }
                    ]
                },
                {
                    status:'待评价',
                    orderNum:'SHP0919713',
                    cakes:[
                        {
                            name:{
                                cn:'至爱红丝绒',
                                en:'INBOX'
                            },
                            imgSrc:'./assets/imgs/order/inbox1.png',
                            oldPrice:69,
                            nowPrice:20,
                            count:2
                        }
                    ]
                },
                {
                    status:'已完成',
                    orderNum:'SHP0919713',
                    cakes:[
                        {
                            name:{
                                cn:'至爱红丝绒',
                                en:'INBOX'
                            },
                            imgSrc:'./assets/imgs/order/inbox1.png',
                            oldPrice:69,
                            nowPrice:20,
                            count:2
                        }
                    ]
                },
            ]
        }
        var html = template('tplAll',data);
        $('#all').append(html);

        /*检查高度*/
        checkBottom('all');
    }

    /*待支付*/
    function initUnpayOrder() {
        var data = {
            list: [
                {
                    status: '待支付',
                    orderNum: 'SHP0919713',
                    cakes: [
                        {
                            name: {
                                cn: '至爱红丝绒',
                                en: 'INBOX'
                            },
                            imgSrc: './assets/imgs/order/inbox1.png',
                            oldPrice: 69,
                            nowPrice: 20,
                            count: 2
                        },
                        {
                            name: {
                                cn: '至爱红丝绒',
                                en: 'INBOX'
                            },
                            imgSrc: './assets/imgs/order/inbox1.png',
                            oldPrice: 69,
                            nowPrice: 20,
                            count: 2
                        }
                    ]
                },
                {
                    status: '待支付',
                    orderNum: 'SHP0919713',
                    cakes: [
                        {
                            name: {
                                cn: '至爱红丝绒',
                                en: 'INBOX'
                            },
                            imgSrc: './assets/imgs/order/inbox1.png',
                            oldPrice: 69,
                            nowPrice: 20,
                            count: 2
                        },
                        {
                            name: {
                                cn: '至爱红丝绒',
                                en: 'INBOX'
                            },
                            imgSrc: './assets/imgs/order/inbox1.png',
                            oldPrice: 69,
                            nowPrice: 20,
                            count: 2
                        },
                        {
                            name: {
                                cn: '至爱红丝绒',
                                en: 'INBOX'
                            },
                            imgSrc: './assets/imgs/order/inbox1.png',
                            oldPrice: 69,
                            nowPrice: 20,
                            count: 2
                        }
                    ]
                },
                {
                    status: '待支付',
                    orderNum: 'SHP0919713',
                    cakes: [
                        {
                            name: {
                                cn: '至爱红丝绒',
                                en: 'INBOX'
                            },
                            imgSrc: './assets/imgs/order/inbox1.png',
                            oldPrice: 69,
                            nowPrice: 20,
                            count: 2
                        }
                    ]
                },
                {
                    status: '待支付',
                    orderNum: 'SHP0919713',
                    cakes: [
                        {
                            name: {
                                cn: '至爱红丝绒',
                                en: 'INBOX'
                            },
                            imgSrc: './assets/imgs/order/inbox1.png',
                            oldPrice: 69,
                            nowPrice: 20,
                            count: 2
                        }
                    ]
                },
            ]
        }
        var html = template('tplUnpay', data);
        $('#unPay').append(html);

    }

    /*待发货*/
    function initUnDelivery() {
        var data = {
            list:[]
        }
        var html = template('tplUnDelivery',data);
        $('#unDelivery').append(html);


    }

    /*待收货*/
    function initUnReceive() {
        var data = {
            list:[
                {
                    status:'待收货',
                    orderNum:'SHP0919713',
                    cakes:[
                        {
                            name:{
                                cn:'至爱红丝绒',
                                en:'INBOX'
                            },
                            imgSrc:'./assets/imgs/order/inbox1.png',
                            oldPrice:69,
                            nowPrice:20,
                            count:2
                        },
                        {
                            name:{
                                cn:'至爱红丝绒',
                                en:'INBOX'
                            },
                            imgSrc:'./assets/imgs/order/inbox1.png',
                            oldPrice:69,
                            nowPrice:20,
                            count:2
                        }
                    ]
                },
                {
                    status:'待收货',
                    orderNum:'SHP0919713',
                    cakes:[
                        {
                            name:{
                                cn:'至爱红丝绒',
                                en:'INBOX'
                            },
                            imgSrc:'./assets/imgs/order/inbox1.png',
                            oldPrice:69,
                            nowPrice:20,
                            count:2
                        },
                        {
                            name:{
                                cn:'至爱红丝绒',
                                en:'INBOX'
                            },
                            imgSrc:'./assets/imgs/order/inbox1.png',
                            oldPrice:69,
                            nowPrice:20,
                            count:2
                        },
                        {
                            name:{
                                cn:'至爱红丝绒',
                                en:'INBOX'
                            },
                            imgSrc:'./assets/imgs/order/inbox1.png',
                            oldPrice:69,
                            nowPrice:20,
                            count:2
                        }
                    ]
                },
                {
                    status:'待收货',
                    orderNum:'SHP0919713',
                    cakes:[
                        {
                            name:{
                                cn:'至爱红丝绒',
                                en:'INBOX'
                            },
                            imgSrc:'./assets/imgs/order/inbox1.png',
                            oldPrice:69,
                            nowPrice:20,
                            count:2
                        }
                    ]
                },
                {
                    status:'待收货',
                    orderNum:'SHP0919713',
                    cakes:[
                        {
                            name:{
                                cn:'至爱红丝绒',
                                en:'INBOX'
                            },
                            imgSrc:'./assets/imgs/order/inbox1.png',
                            oldPrice:69,
                            nowPrice:20,
                            count:2
                        }
                    ]
                },
            ]
        }
        var html = template('tplUnReceive',data);
        $('#unReceive').append(html);


    }

    /*待评价*/
    function initUnRate() {
        var data = {
            list:[
                {
                    status:'待评价',
                    orderNum:'SHP0919713',
                    cakes:[
                        {
                            name:{
                                cn:'至爱红丝绒',
                                en:'INBOX'
                            },
                            imgSrc:'./assets/imgs/order/inbox1.png',
                            oldPrice:69,
                            nowPrice:20,
                            count:2
                        },
                        {
                            name:{
                                cn:'至爱红丝绒',
                                en:'INBOX'
                            },
                            imgSrc:'./assets/imgs/order/inbox1.png',
                            oldPrice:69,
                            nowPrice:20,
                            count:2
                        }
                    ]
                }
            ]
        }
        var html = template('tplUnRate',data);
        $('#unRate').append(html);


    }
})(jQuery,window,document);