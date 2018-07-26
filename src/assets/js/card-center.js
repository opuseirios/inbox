(function ($,window,document) {
    $(function () {
        /*input聚焦*/
        $('input').focus(function () {
            let val = $('input').val();
            $('.msg').hide();
            if(val){
                $(this).siblings('.icon-close').show();
            }
        })

        /*清空号码*/
        $('.icon-close').click(function () {
            $(this).siblings('input').val('');
            $(this).hide();
            $('.msg').hide();
        })


        /*监控号码的值，控制close图标的出现*/
        $('input').bind('input propertychange',function () {
            let val = $(this).val();
            if(val!==''){
                $(this).siblings('.icon-close').show();
            }else {
                $(this).siblings('.icon-close').hide();
                $('.msg').hide();
            }
        });
        
        /*点击确定，判断卡券密码是否正确*/
        $('.confirm').click(function () {
            
        })
    })
})(jQuery,window,document)