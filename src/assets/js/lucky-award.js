(function ($,window,document) {
    $(function () {
        initFriend();
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