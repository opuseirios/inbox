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

        /*当填写内容的时候，msg消失*/
        $('input').on('focus',function () {
            $('.msg').hide();
        })

        /*提交申请之前，检查是否每一项都填写了*/
        $('.submit-invoice').on('click',function () {
            /*先判断是公司还是个人*/
            if($('#selectObject').html()==='公司'){
                if($('.company input').val()===''){
                    $('.msg').html('您还没有填写公司名称').show();
                    return false;
                }
                if($('.num input').val() === ''){
                    $('.msg').html('您还没有填写发票税号').show();
                    return false
                }
            }
            /*判断邮箱是否正确*/
            var reg = new RegExp(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/);
            var emailAdd = $('.email input').html();
            if(!emailAdd.match(reg)){
                $('.msg').html('您的邮箱地址填写不正确，请重新填写').show();
                return false
            }
        })
    })
})(jQuery,window,document);