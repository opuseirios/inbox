(function ($,window,document) {
    $(function () {
        initFriend();

        /*判断手机号是否正确*/
        var timer = null;
        $('.getMsg').on('click',function () {
            let phoneNum = $('.telNum').val();
            if(!telReg(phoneNum)){
                $('.tel-notice').html('手机号输出错误，请重新输入').css({'opacity':1});
                return false;
            }else {
                clearInterval(timer);
                $('.getMsg').attr('disabled',true);
                $('.getCoupon').show();
                var count = 60;
                timer = setInterval(function () {
                    if(count<1){
                        $('.getMsg').attr('disabled',false).html('获取验证码').css({'background':'#3cdcd4'});
                        clearInterval(timer);
                    }else {
                        count--;
                        $('.getMsg').attr('disabled',true).html('重新发送'+count+'s').css({'background':'#ccc'});
                    }

                },1000)
            }
        })

        $('.getCoupon').on('click',function () {
            $('.tel-wrapper').hide(function () {
                $('.coupon').css({'display':'flex'});
            })
        })

        $('.telNum').on('focus',function () {
            $('.tel-notice').css({'opacity':0});
        })
    })

    /*初始化*/
    function initFriend() {
        var data = {
            list:[
                {
                    avatar:'./assets/imgs/lucky-award/account_img.png',
                    telNum:'138****9291',
                    time:'2018-05-02 13:21:13',
                    num:60
                },
                {
                    avatar:'./assets/imgs/lucky-award/account_img.png',
                    telNum:'138****9291',
                    time:'2018-05-02 13:21:13',
                    num:5
                },
                {
                    avatar:'./assets/imgs/lucky-award/account_img2.png',
                    telNum:'138****9291',
                    time:'2018-05-02 13:21:13',
                    num:3
                },
                {
                    avatar:'./assets/imgs/lucky-award/account_img2.png',
                    telNum:'138****9291',
                    time:'2018-05-02 13:21:13',
                    num:10
                }
            ]
        }
        var html = template('tplFriend',data);
        $('#friendWrapper').html(html);
    }
})(jQuery,window,document);