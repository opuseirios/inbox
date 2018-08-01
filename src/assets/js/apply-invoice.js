(function ($,window,document) {
    $(function () {
        initInvoice();

        /*点击check，选中发票*/
        $('.check .icon').on('click',function () {
            if (!$(this).hasClass("icon-sel")) {
                $(this).addClass("icon-sel");
            } else {
                $(this).removeClass("icon-sel");
            }
            total();
        })
    })
    /*发票列表*/
    function initInvoice() {
        var data = {
            list: [
                {
                    "price":68,
                    "cakeName":"至爱红丝绒",
                    "time":"2018-05-09 12:23"
                },
                {
                    "price":76,
                    "cakeName":"八四二四",
                    "time":"2018-05-09 12:23"
                },
                {
                    "price":20,
                    "cakeName":"抹茶诱惑",
                    "time":"2018-05-09 12:23"
                }
            ]
        };
        var $invoice = $('#apply-invoice');
        var _html = template('tplInvoice',data);
        $invoice.append(_html)
    }

    /*金额*/
    function total() {
        var totalPrice = 0;
        var $icons = $('.icon-sel').parent().siblings('.left').find('.num');
        $icons.each((i,item)=>{
            var price = $(item).html();
            totalPrice+=parseInt(price);
        })
        $('.total .num').html(totalPrice)
    }
})(jQuery,window,document);