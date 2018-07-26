(function ($,window,document) {
    $(function () {
        /*页面一开始焦点在input里*/
        $('.tel').focus();
        /*判断手机号，如果错误，出现提示*/
        $('.tel').on('blur',function () {
            let phoneNum = $('.tel').val();
            if(phoneNum===''){
                $('.msg').html('手机号不能为空').show();
                return;
            }
            if(!telReg(phoneNum)){
                $('.msg').html('手机号输出错误，请重新输入').show();
            }
        })
        /*input聚焦*/
        $('.tel').focus(function () {
            let val = $('.tel').val();
            $('.msg').hide();
            if(val){
                $('.icon-close').show();
            }
        })
        /*监控号码的值，控制close图标的出现*/
        $('.tel').bind('input propertychange',function () {
            let val = $('.tel').val();
            if(val!==''){
                $('.icon-close').show();
            }else {
                $('.icon-close').hide();
                $('.msg').hide();
            }
        });
        /*清空号码*/
        $('.icon-close').click(function () {
            $('.tel').val('');
            $('.icon-close').hide();
            $('.msg').hide();
        })
        /*号码输入正确，跳入到更改手机号的页面*/
        $('.next').on('click',function () {
            let phoneNum = $('.tel').val();
            if(telReg(phoneNum)){
                /*更改a标签的地址*/
                $('.next').attr('href','./change-phoneNum.html');
            }
        })
    })
})(jQuery,window,document)