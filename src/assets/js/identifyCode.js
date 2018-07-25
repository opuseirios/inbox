(function ($,window,document) {
    $(function () {

        /*输入验证码*/
        var str = ''
        $('.code').on('keyup', function() {
            var $input = $(this).next('input');
            if($(this).val()!==''){
                str+=$(this).val();
                if($input.length > 0) {
                    $input.focus();
                }else {
                    console.log(str)
                    /*输入完成后*/
                }
            }
        });
        $('.code').on('keydown', function(event) {
            var evt =  event || window.event;
            if ($(this).val() == '' && evt.keyCode == 8){
                // 如果为空且按下退回键
                $(this).prev('input').focus();
                str=str.substring(0,str.length-1);
            }
        });
        $('#code').focus();

        countDown();

        /*重新发送*/
        $('.send').on('click',function () {
            $(this).hide();
            countDown();
            $('.num').text(60);
            $('.countDown').show();
        })

        /*倒计时*/
        function countDown() {
            var count = 60;
            var timer = setInterval(()=>{
                count--;
                $('.num').text(count);
                if(count<=0){
                    clearInterval(timer);
                    $('.countDown').hide();
                    $('.send').show();
                }
            },1000)
        }

    })
})(jQuery,window,document);