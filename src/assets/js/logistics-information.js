;(function ($,window,document) {
    $(function () {
        /*物流详情*/
        fnLogData();
        /*物流信息*/
        fnLogInfo();
        /*点击复制单号*/
        var clipboard = new ClipboardJS('.copyBill');
        clipboard.on('success',function (e) {
            $('.success').fadeIn().delay(1500).fadeOut();
        })
        clipboard.on('error',function (e) {
            $('.error').fadeIn().delay(1500).fadeOut();
        })
    })

    /*物流详情*/
    function fnLogData() {
        var _data = {
            list:[
                {
                    msg:'已签收，感谢使用顺丰，期待再次为您服务',
                    time:'2018-3-25 12:42:51'
                },
                {
                    msg:'正在派送中，请您准备签收(派件人:陈宁，\n' +
                    '电话:(13994033728）',
                },
                {
                    msg:'顺丰速运 已收取快件',
                    time:'2018-3-24 18:55:18'
                },
                {
                    msg:'已签收，感谢使用顺丰，期待再次为您服务,已签收，感谢使用顺丰，期待再次为您服务已签收，感谢使用顺丰，期待再次为您服务已签收，感谢使用顺丰，期待再次为您服务已签收，感谢使用顺丰，期待再次为您服务已签收，感谢使用顺丰，期待再次为您服务已签收，感谢使用顺丰，期待再次为您服务已签收，感谢使用顺丰，期待再次为您服务已签收，感谢使用顺丰，期待再次为您服务已签收，感谢使用顺丰，期待再次为您服务已签收，感谢使用顺丰，期待再次为您服务',
                    time:'2018-3-25 12:42:51'
                },
                {
                    msg:'已签收，感谢使用顺丰，期待再次为您服务',
                    time:'2018-3-25 12:42:51'
                }
                ,{
                    msg:'已签收，感谢使用顺丰，期待再次为您服务',
                    time:'2018-3-25 12:42:51'
                }
                ,{
                    msg:'已签收，感谢使用顺丰，期待再次为您服务',
                    time:'2018-3-25 12:42:51'
                }
                ,{
                    msg:'已签收，感谢使用顺丰，期待再次为您服务',
                    time:'2018-3-25 12:42:51'
                }
                ,{
                    msg:'已签收，感谢使用顺丰，期待再次为您服务',
                    time:'2018-3-25 12:42:51'
                }
            ]
        };
        var _html = template('tplLogList',_data);
        $('.logistics-detail').append(_html);
    }

    /*物流信息*/
    function fnLogInfo() {
        var _data = {
            list:[
                {
                    status:'已签收',
                    company:'圆通',
                    logBill:'6118477278272'
                }
            ]
        };
        var _html = template('tplLogInfo',_data);
        $('.logistics-title').append(_html);
    }
})(jQuery,window,document);