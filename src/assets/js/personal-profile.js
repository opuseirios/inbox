(function ($,window,document) {
    $(function () {
        /*选择性别*/
        selectSex();
        /*选择生日*/
        selectBirthDay();

        /*对手机进行加密*/
        var phoneNum = $('.tel').html();
        var newNum = encryptPhone(phoneNum);
        $('.tel').html(newNum);
    })

    /*选择性别*/
    function selectSex() {
        var sexData = [
            {'id':'10001','value':'男'},
            {'id':'10002','value':'女'}
        ]
        var sexObject = document.querySelector('#sex')
        $('#selectSex').on('click',function () {
            var val = sexObject.dataset['id'];
            var title = sexObject.dataset['value'];
            var object = new IosSelect(1,[sexData],{
                container:'.container',
                title:'性别',
                itemHeight: 50,
                itemShowCount: 3,
                oneLevelId:val,
                callback: function (selectDom) {  // 用户确认选择后的回调函数
                    sexObject.value = selectDom.id;
                    sexObject.innerHTML = selectDom.value;
                }
            })
        })
    }

    /*选择生日*/
    function selectBirthDay() {
        var now = new Date();
        var nowYear = now.getFullYear();
        var nowMonth = now.getMonth() + 1;
        var nowDate = now.getDate();
        var $yearDom = $('#year');
        var $monthDom = $('#month');
        var $dayDom = $('#day');

        $yearDom.attr('data-year', nowYear);
        $monthDom.attr('data-month', nowMonth);
        $dayDom.attr('data-date', nowDate);
        // 数据初始化
        function formatYear (nowYear) {
            var arr = [];
            for (var i = nowYear - 5; i <= nowYear + 5; i++) {
                arr.push({
                    id: i + '',
                    value: i
                });
            }
            return arr;
        }
        function formatMonth () {
            var arr = [];
            for (var i = 1; i <= 12; i++) {
                arr.push({
                    id: i + '',
                    value: i
                });
            }
            return arr;
        }
        function formatDate (count) {
            var arr = [];
            for (var i = 1; i <= count; i++) {
                arr.push({
                    id: i + '',
                    value: i
                });
            }
            return arr;
        }
        var yearData = function(callback) {
            // settimeout只是模拟异步请求，真实情况可以去掉
            // setTimeout(function() {
            callback(formatYear(nowYear))
            // }, 2000)
        }
        var monthData = function (year, callback) {
            // settimeout只是模拟异步请求，真实情况可以去掉
            // setTimeout(function() {
            callback(formatMonth());
            // }, 2000);
        };
        var dateData = function (year, month, callback) {
            // settimeout只是模拟异步请求，真实情况可以去掉
            // setTimeout(function() {
            if (/^(1|3|5|7|8|10|12)$/.test(month)) {
                callback(formatDate(31));
            }
            else if (/^(4|6|9|11)$/.test(month)) {
                callback(formatDate(30));
            }
            else if (/^2$/.test(month)) {
                if (year % 4 === 0 && year % 100 !==0 || year % 400 === 0) {
                    callback(formatDate(29));
                }
                else {
                    callback(formatDate(28));
                }
            }
            else {
                throw new Error('month is illegal');
            }
        };
        $('#selectBirthday').bind('click', function () {
            var oneLevelId = $yearDom.attr('data-year');
            var twoLevelId = $monthDom.attr('data-month');
            var threeLevelId = $dayDom.attr('data-date');
            var iosSelect = new IosSelect(3,
                [yearData, monthData, dateData],
                {
                    title: '日期选择',
                    itemHeight: 35,
                    oneLevelId: oneLevelId,
                    twoLevelId: twoLevelId,
                    threeLevelId: threeLevelId,
                    showLoading: true,
                    callback: function (selectOneObj, selectTwoObj, selectThreeObj) {
                        $yearDom.attr('data-year', selectOneObj.id);
                        $monthDom.attr('data-month', selectTwoObj.id);
                        $dayDom.attr('data-date', selectThreeObj.id);
                        $yearDom.html(selectOneObj.value);
                        $monthDom.html(selectTwoObj.value);
                        $dayDom.html(selectThreeObj.value);
                    }
                });
        });
    }
})(jQuery,window,document);