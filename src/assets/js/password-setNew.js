(function ($,window,document) {
    $(function () {
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
        /*检验两次密码是否一样*/
        $('.pwd2').on('blur',function () {
            var pwd1 = $('.pwd1').val();
            var pwd2 = $(this).val();
            if(pwd1!==pwd2){
                $('.msg').text('两次输入的密码不一样，请重新输入').show();
            }
        })
    })
})(jQuery,window,document);