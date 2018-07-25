(function ($,window,document) {
    $(function () {

        /*输入验证码*/
        var elInput = $('#verification input'),
            elSpan = $('#verification .display-frame span');

        $('#code').focus();

        elInput.on("keyup", function(ev){
            var ev = ev || event;
            var val = $(this).val().toString();
            var val_arr = val.split("");
            $(elSpan).html("");
            for(var i = 0; i < val_arr.length; i++){
                $(elSpan[i]).html(val_arr[i]);
            }
            if(val.length===6){
                /*当输入完成后*/
            }
        })
        elInput.on("keydown", function(ev){
            var ev = ev || event;
            var val = $(this).val().toString();
            if(ev.keyCode >= 48 && ev.keyCode <= 57 && val.length >= 6){
                return false;
            }else if((ev.keyCode < 48 || ev.keyCode > 57) && ev.keyCode !=8){
                return false;
            }
        })

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