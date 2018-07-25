(function ($,window,document) {
    $(function () {
        initInvoiceRecord();
    })
    /*发票列表*/
    function initInvoiceRecord() {
        var data = {
            list: [
                {
                    "price":68,
                    "orderNum":2018081212,
                    "time":"2018-05-09 12:23"
                },
                {
                    "price":706,
                    "orderNum":2018081212,
                    "company":"上海印克电子商务股份有限公司电子发票",
                    "time":"2018-05-09 12:23"
                },
                {
                    "price":208,
                    "orderNum":2018081212,
                    "company":"上海印克电子商务股份有限公司电子发票",
                    "time":"2018-05-09 12:23"
                }
            ]
        };
        var $invoice = $('#invoice-record');
        var _html = template('tplInvoice',data);
        $invoice.append(_html)
    }
})(jQuery,window,document);