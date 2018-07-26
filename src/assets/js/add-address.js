(function ($,window,document) {
    $(function () {
        /*选择地区*/
        selectArea();

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


        /*键盘的弹起，控制按钮的显示和隐藏*/
        var wHeight = window.innerHeight;   //获取初始可视窗口高度
        window.addEventListener('resize', function(){       //监测窗口大小的变化事件
            var hh = window.innerHeight;     //当前可视窗口高度
            if(wHeight > hh){           //可以作为虚拟键盘弹出事件
                $(".saveAddress").hide();    //调整可视页面的位置
            }else{         //可以作为虚拟键盘关闭事件
                $(".saveAddress").show();
            }
            wHeight = hh;
        });


    })
    /*选择地址*/
    function selectArea() {
        var $selectArea = $('#selectArea');
        var $showAreaDom = $('#showArea');
        $selectArea.bind('click', function () {
            var sccode = $showAreaDom.attr('data-city-code');
            var scname = $showAreaDom.attr('data-city-name');

            var oneLevelId = $showAreaDom.attr('data-province-code');
            var twoLevelId = $showAreaDom.attr('data-city-code');
            var threeLevelId = $showAreaDom.attr('data-district-code');
            var iosSelect = new IosSelect(3,
                [iosProvinces, iosCitys, iosCountys],
                {
                    title: '地址选择',
                    itemHeight: 35,
                    relation: [1, 1],
                    oneLevelId: oneLevelId,
                    twoLevelId: twoLevelId,
                    threeLevelId: threeLevelId,
                    callback: function (selectOneObj, selectTwoObj, selectThreeObj) {
                        $showAreaDom.attr('data-province-code', selectOneObj.id);
                        $showAreaDom.attr('data-city-code', selectTwoObj.id);
                        $showAreaDom.attr('data-district-code', selectThreeObj.id);
                        $showAreaDom.html(selectOneObj.value + ' ' + selectTwoObj.value + ' ' + selectThreeObj.value);
                        $showAreaDom.css({color:'#333'})
                    }
                });
        });
    }
})(jQuery,window,document)