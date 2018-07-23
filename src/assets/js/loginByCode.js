
(function ($,window,document) {
    $(function () {
        /*判断手机号，如果错误，出现提示*/
        $('.getCode').on('click',function () {
            let phoneNum = $('.phoneNum').val();
            if(phoneNum===''){
                $('.msg').html('手机号不能为空').show();
                return;
            }
            if(!telReg(phoneNum)){
                $('.msg').html('手机号输出错误，请重新输入').show();
            }
        })
        /*input聚焦*/
        $('.phoneNum').focus(function () {
            let val = $('.phoneNum').val();
            $('.msg').hide();
            if(val){
                $('.icon-close').show();
            }
        })
        /*监控号码的值，控制close图标的出现*/
        $('.phoneNum').bind('input propertychange',function () {
            let val = $('.phoneNum').val();
            if(val!==''){
                $('.icon-close').show();
            }else {
                $('.icon-close').hide();
                $('.msg').hide();
            }
        });
        /*清空号码*/
        $('.icon-close').click(function () {
            $('.phoneNum').val('');
            $('.icon-close').hide();
            $('.msg').hide();
        })
    })
})(jQuery,window,document);