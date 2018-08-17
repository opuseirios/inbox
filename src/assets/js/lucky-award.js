(function ($,window,document) {
    $(function () {
        initFriend();

        $('.tel-notice').hide();
        /*判断手机号是否正确*/
        $('.getCoupon').on('click',function () {
            let phoneNum = $('.telNum').val();
            if(!telReg(phoneNum)){
                $('.tel-notice').html('手机号输出错误，请重新输入').show();
                return false;
            }
        })

        $('.telNum').on('focus',function () {
            $('.tel-notice').hide();
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