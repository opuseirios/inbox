(function ($,window,document) {
    $(function () {
        /*初始化地址*/
        initAddress();
        /*删除地址*/
        $('.deleteAddress').on('click',function () {
            $(this).parents('.address-item').remove();
        })
    })
    /*初始化地址*/
    function initAddress() {
        var data = {
            list:[
                {
                    name:'张三',
                    tel:'138123741223',
                    address:'上海市浦东新区广兰路上海市浦东新区广兰路上海市浦东新区广兰路'
                },
                {
                    name:'李四单子',
                    tel:'138123741223',
                    address:'上海市浦东新区广兰路上海市浦东新区广兰路上海市浦东新区广兰路'
                },
                {
                    name:'王五八子',
                    tel:'138123741223',
                    address:'上海市浦东新区广兰路上海市浦东新区'
                },
                {
                    name:'张三',
                    tel:'138123741223',
                    address:'上海市浦东新区广兰路上海市浦东新区广兰路上海市浦东新区广兰路'
                },
                {
                    name:'李四单子',
                    tel:'138123741223',
                    address:'上海市浦东新区广兰路上海市浦东新区广兰路上海市浦东新区广兰路'
                },
                {
                    name:'王五八子',
                    tel:'138123741223',
                    address:'上海市浦东新区广兰路上海市浦东新区'
                }
            ]
        }
        var _html = template('tplAddress',data);
        $('#address-management').append(_html);
    }
})(jQuery,window,document);