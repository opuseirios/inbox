(function ($,window,document) {
    $(function () {
        /*选择个人或者公司*/
        var data = [
            {'id':'10001','value':'公司'},
            {'id':'10002','value':'个人'}
        ]
        var selectObject = document.querySelector('#selectObject')
        $('#selectObject').on('click',function () {
            var val = selectObject.dataset['id'];
            var title = selectObject.dataset['value'];
            var object = new IosSelect(1,[data],{
                container:'.container',
                title:'发票抬头',
                itemHeight: 50,
                itemShowCount: 3,
                oneLevelId:val,
                callback: function (selectDom) {  // 用户确认选择后的回调函数
                    selectObject.value = selectDom.id;
                    selectObject.innerHTML = selectDom.value;
                    if(selectDom.value === '个人'){
                        $('.company').hide();
                        $('.num').hide();
                    }else {
                        $('.company').show();
                        $('.num').show();
                    }
                }
            })
        })

        /*键盘的弹起，控制按钮的显示和隐藏*/
        var wHeight = window.innerHeight;   //获取初始可视窗口高度
        window.addEventListener('resize', function(){       //监测窗口大小的变化事件
            var hh = window.innerHeight;     //当前可视窗口高度
            if(wHeight > hh){           //可以作为虚拟键盘弹出事件
                $(".submit-invoice").hide();    //调整可视页面的位置
            }else{         //可以作为虚拟键盘关闭事件
                $(".submit-invoice").show();
            }
            wHeight = hh;
        });

    })
})(jQuery,window,document);