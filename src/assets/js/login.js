(function ($,window,document) {
    $(function () {
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


        /*切换明文暗文*/
        $('.eye').on('click',function () {
            /*如果是close*/
            if($(this).hasClass('eye-close')){
                $(this).addClass('eye-open');
                $(this).removeClass('eye-close')
                $(this).siblings('input').attr('type','text')
            }else {
                $(this).addClass('eye-close');
                $(this).removeClass('eye-open')
                $(this).siblings('input').attr('type','password')
            }
        })
        /*对密码进行校验*/
        $('.pwd').on('blur',function () {
            var pwd = $(this).val();
            if(!pwdReg(pwd)){
                $('.msg').text('密码不符合要求，请重新设置').show();
            }
        })
        $('.pwd').on('focus',function () {
            $('.msg').hide();
        })

        /*登录*/
        $('.login').on('click',function () {

        })
    })
})(jQuery,window,document)