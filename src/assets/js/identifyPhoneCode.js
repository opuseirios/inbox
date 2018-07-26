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
                    if(str.length===6){
                        /*输入完成后*/
                        console.log(str)
                    }

                }
            }
        });
        $('.code').on('keydown', function(event) {
            var evt =  event || window.event;
            if ($(this).val() == '' && evt.keyCode == 8){
                // 如果为空且按下退回键
                $(this).prev('input').focus();
            }
            if(evt.keyCode===8){
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
            $('#code').focus();
        })

        /*倒计时*/
        function countDown() {
            var count = 10;
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