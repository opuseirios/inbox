(function ($,window,document) {
    $(function () {

        /*轮播图初始化*/
        var swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },
            loop:true,
            autoplay: {
                delay: 3000,
                disableOnInteraction:false
            },
        });



        /*蛋糕初始化*/
        initInbox();
        initCheese();
        initDurian();

        /*图片懒加载*/
        var myLazyLoad = new LazyLoad({
            elements_selector: ".lazy"
        });


        let touch = {};
        /*获取轮播图的高度*/
        const imageHeight = $('.swiper-container').height();

        /*初始化BScroll组件*/
            var bsScroll = new BScroll('.cakes',{
                probeType:3,
                click:true,
                bounce:{
                    top:false
                }
            })

        /*点击*/
        $('.menu-content').on('touchstart',function (e) {
            touch.startY = e.touches[0].pageY;
            touch.offsetTop = $('.menu-container').position().top;
        })
        /*拖动*/
        $('.menu-content').on('touchmove',function (e) {
            const deltaY = e.touches[0].pageY - touch.startY;
            if(deltaY<0) {
                const moveTop = Math.max(deltaY + touch.offsetTop, -imageHeight);
                if (moveTop <= 0 && moveTop >= -imageHeight) {
                    $('.menu-container').css({'top': moveTop + 'px'});
                }
                if ((deltaY + touch.offsetTop) > -imageHeight) {
                    bsScroll.disable();
                } else {
                    bsScroll.enable();
                    bsScroll.refresh();
                }
                }else {
                    var downPx = $('.cakes>div').position().top;
                    if(downPx>=0){
                        bsScroll.disable();
                        const moveDown = Math.min(0,deltaY+touch.offsetTop);
                        $('.menu-container').css({'top':moveDown+'px'});
                    }
                }
        })
        /*加减*/

            $('.add').on('click',function (e) {
                e.stopPropagation();
                var count = $(this).siblings('.count').html();
                count++;
                $(this).siblings('.minus').animate({opacity:1},200);
                $(this).siblings('.count').animate({opacity:1},200).html(count);
            })
            $('.minus').on('click',function (e) {
                e.stopPropagation();
                var count = $(this).siblings('.count').html();
                count--;
                if(count>0){
                    $(this).siblings('.count').html(count);
                }
                if(count===0){
                    $(this).animate({opacity:0},200);
                    $(this).siblings('.count').animate({opacity:0});
                    setTimeout(()=>{
                        $(this).siblings('.count').html(count);
                    },400)
                }
            })

        /*点击导航，控制蛋糕的滚动*/
        $('.item').on('click',function () {
            bsScroll.refresh()
            $(this).addClass('active').siblings().removeClass('active');
            var index = $(this).data('index');
            bsScroll.scrollToElement($('.category')[index],400);
        })
        $('.fixedTitle').show().html($('.category').eq(0).find('.title').html());
        /*计算各个category的高度*/
        var heightColumn = [];
        var height = 0;
        heightColumn.push(height);
        var categories = document.querySelectorAll('.category');
        categories.forEach((item)=>{
            height+=item.clientHeight;
            heightColumn.push(height);
        })
        /*蛋糕滚动与导航联动*/
        bsScroll.on('scroll',(pos)=>{
            var scrollY = pos.y;
            for(var i=0;i<heightColumn.length;i++){
                if((!heightColumn[i+1])||(-scrollY>=heightColumn[i]&&-scrollY<heightColumn[i+1])){
                    $('.item').eq(i).addClass('active').siblings().removeClass('active');
                    if(scrollY>0){
                        $('.fixedTitle').html($('.category').eq(0).find('.title').html()).hide();
                    }
                    var content = $('.category').eq(i).find('.title').html();
                    $('.fixedTitle').show().html(content);
                }
            }
        })


        /*以下为详情区域*/
        /*点击蛋糕，出现详情*/
        var commentsScroll = {};
        var swiperHeight = 0;
        var cakeClientTop = 0;
        $('.cake').on('click',function () {
            /*获取商品属性*/
            var cakeName = $(this).find('.name').html();
            var cakeEn = $(this).find('.en').html();
            var cakePrice = $(this).find('.num').html();
            var cakeCount = $(this).find('.count').html();
            $('.cake-detail').fadeIn(200);
            /*给详情页赋值*/
            $('.detail').find('.name').html(cakeName);
            $('.detail').find('.en').html(cakeEn);
            $('.detail').find('.num').html(cakePrice);
            $('.detail').find('.count').html(cakeCount);
            if(parseInt(cakeCount)>0){
                $('.detail').find('.count').animate({opacity:1},200);
                $('.detail').find('.minus').animate({opacity:1},200);
            }
            /*详情页的轮播图*/
            var swiperDetail = new Swiper('.swiper-container-detail', {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'progressbar',
                },
                loop:true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction:false
                },
            });

            /*初始化评论*/
            initComment();

            /*初始化BScroll组件*/
            commentsScroll = new BScroll('.comments',{
                probeType:3,
                click:true,
                bounce:{
                    top:false
                }
            })
            commentsScroll.disable();

            /*设置距离*/
            swiperHeight = $('.swiper-container-detail').height()*0.8;

            cakeClientTop = $('.cake-content').position().top;
        })


        /*点击向上按钮*/
        $('.showAll').on('click',function () {
            $('.cake-content').animate({top:0},200);
            $(this).animate({opacity:0},200);
            $('.tel').show();
            $('.comments-content .title').show();
            $('.btn-wrapper').animate({opacity:1},200);
        })

        $('.icon-close').on('click',function () {
            $('.cake-detail').fadeOut(200);
        })

        var detailTouch = {};

        /*滑动*/
        $('.cake-wrapper').on('touchstart',function (e) {
            detailTouch.startY = e.touches[0].pageY;
            detailTouch.offsetTop = $('.cake-content').position().top;
        })
        $('.cake-wrapper').on('touchmove',function (e) {
            const deltaY = e.touches[0].pageY - detailTouch.startY;
            var cakeTop = $('.cake-content').position().top;
            if(deltaY>0){
                var cakeDeltaDown = Math.min(cakeClientTop,deltaY+detailTouch.offsetTop);
                var transformTop = $(".comments ul").css("transform").replace(/[^0-9\-,]/g,'').split(',')[5];
                if(transformTop>=-30){
                    $('.cake-content').css({top:cakeDeltaDown+'px'});
                }
            }else {
                var cakeDeltaUp = Math.max(-swiperHeight,deltaY+detailTouch.offsetTop);
                $('.cake-content').css({top:cakeDeltaUp+'px'});

                if ((deltaY+detailTouch.offsetTop) > -swiperHeight) {
                    commentsScroll.disable();
                } else {
                    commentsScroll.refresh();
                    commentsScroll.enable();
                }
            }
            /*如果cake-content的top<80,触发向上按钮*/
            if(cakeTop>=0){
                $('.showAll').css({opacity:cakeTop/cakeClientTop});
                $('.btn-wrapper').css({opacity:1-cakeTop/cakeClientTop});
                $('.tel').hide();
                $('.comments-content .title').hide();
                $('.icon-close').css({position:'absolute'});
            }else {
                commentsScroll.refresh();
                $('.tel').show();
                $('.showAll').css({opacity:0});
                $('.btn-wrapper').css({opacity:1});
                $('.comments-content .title').show();
                $('.icon-close').css({position:'fixed'});
            }
        })
    })

    /*inbox*/
    function initInbox() {
        var inboxData = {
            list:[
                {
                    imgSrc:'./assets/imgs/menu/inbox1.png',
                    name:'至爱红丝绒',
                    en:'INBOX',
                    price:69
                },
                {
                    imgSrc:'./assets/imgs/menu/inbox1.jpg',
                    name:'至爱红丝绒',
                    en:'INBOX',
                    price:69
                },
                {
                    imgSrc:'./assets/imgs/menu/inbox2.jpg',
                    name:'至爱红丝绒',
                    en:'INBOX',
                    price:69
                },
                {
                    imgSrc:'./assets/imgs/menu/inbox3.jpg',
                    name:'至爱红丝绒',
                    en:'INBOX',
                    price:69
                },
                {
                    imgSrc:'./assets/imgs/menu/inbox4.jpg',
                    name:'至爱红丝绒',
                    en:'INBOX',
                    price:69
                }
            ]
        }
        var _html = template('tplInbox',inboxData);
        $('#inbox').append(_html);
    }
    /*cheese*/
    function initCheese() {
        var inboxData = {
            list:[
                {
                    imgSrc:'./assets/imgs/menu/inbox4.jpg',
                    name:'芒果白雪',
                    en:'INBOX',
                    price:69
                },
                {
                    imgSrc:'./assets/imgs/menu/inbox5.jpg',
                    name:'芒果白雪',
                    en:'INBOX',
                    price:69
                },
                {
                    imgSrc:'./assets/imgs/menu/inbox6.jpg',
                    name:'芒果白雪',
                    en:'INBOX',
                    price:69
                },
                {
                    imgSrc:'./assets/imgs/menu/inbox7.jpg',
                    name:'芒果白雪',
                    en:'INBOX',
                    price:69
                },
                {
                    imgSrc:'./assets/imgs/menu/inbox1.jpg',
                    name:'芒果白雪',
                    en:'INBOX',
                    price:69
                },
                {
                    imgSrc:'./assets/imgs/menu/inbox2.jpg',
                    name:'芒果白雪',
                    en:'INBOX',
                    price:69
                },
                {
                    imgSrc:'./assets/imgs/menu/inbox3.jpg',
                    name:'芒果白雪',
                    en:'INBOX',
                    price:69
                }
            ]
        }
        var _html = template('tplCheese',inboxData);
        $('#cheese').append(_html);
    }
    /*durian*/
    function initDurian() {
        var inboxData = {
            list:[
                {
                    imgSrc:'./assets/imgs/menu/inbox4.jpg',
                    name:'白巧脏脏',
                    en:'INBOX',
                    price:69
                },
                {
                    imgSrc:'./assets/imgs/menu/inbox7.jpg',
                    name:'白巧脏脏',
                    en:'INBOX',
                    price:69
                },
                {
                    imgSrc:'./assets/imgs/menu/inbox3.png',
                    name:'白巧脏脏',
                    en:'INBOX',
                    price:69
                },
                {
                    imgSrc:'./assets/imgs/menu/inbox6.jpg',
                    name:'白巧脏脏',
                    en:'INBOX',
                    price:69
                },
                {
                    imgSrc:'./assets/imgs/menu/inbox4.jpg',
                    name:'白巧脏脏',
                    en:'INBOX',
                    price:69
                },
                {
                    imgSrc:'./assets/imgs/menu/inbox3.jpg',
                    name:'白巧脏脏',
                    en:'INBOX',
                    price:69
                },
                {
                    imgSrc:'./assets/imgs/menu/inbox2.jpg',
                    name:'白巧脏脏',
                    en:'INBOX',
                    price:69
                }
            ]
        }
        var _html = template('tplDurian',inboxData);
        $('#durian').append(_html);
    }
    /*comment*/
    function initComment() {
        var data = {
            list:[
                {
                    imgSrc:'./assets/imgs/menu/avatar.png',
                    tel:'137****9291',
                    comment:'味道挺好味道挺好，味道挺好味道挺好味道挺好味道好好挺好味道好好'
                },
                {
                    imgSrc:'./assets/imgs/menu/avatar.png',
                    tel:'137****9291',
                    comment:'味道挺好味道挺好，味道挺好味道挺好味道挺好味道好好挺好味道好好'
                },
                {
                    imgSrc:'./assets/imgs/menu/avatar.png',
                    tel:'137****9291',
                    comment:'味道挺好味道挺好，味道挺好味道挺好味道挺好味道好好挺好味道好好'
                },
                {
                    imgSrc:'./assets/imgs/menu/avatar.png',
                    tel:'137****9291',
                    comment:'味道挺好味道挺好，味道挺好味道挺好味道挺好味道好好挺好味道好好'
                },
                {
                    imgSrc:'./assets/imgs/menu/avatar.png',
                    tel:'137****9291',
                    comment:'味道挺好味道挺好，味道挺好味道挺好味道挺好味道好好挺好味道好好'
                },
                {
                    imgSrc:'./assets/imgs/menu/avatar.png',
                    tel:'137****9291',
                    comment:'味道挺好味道挺好，味道挺好味道挺好味道挺好味道好好挺好味道好好'
                },
                {
                    imgSrc:'./assets/imgs/menu/avatar.png',
                    tel:'137****9291',
                    comment:'味道挺好味道挺好，味道挺好味道挺好味道挺好味道好好挺好味道好好'
                },
                {
                    imgSrc:'./assets/imgs/menu/avatar.png',
                    tel:'137****9291',
                    comment:'味道挺好味道挺好，味道挺好味道挺好味道挺好味道好好挺好味道好好'
                },
                {
                    imgSrc:'./assets/imgs/menu/avatar.png',
                    tel:'137****9291',
                    comment:'味道挺好味道挺好，味道挺好味道挺好味道挺好味道好好挺好味道好好'
                },
                {
                    imgSrc:'./assets/imgs/menu/avatar.png',
                    tel:'137****9291',
                    comment:'味道挺好味道挺好，味道挺好味道挺好味道挺好味道好好挺好味道好好'
                }
            ]
        }
        var html = template('tplComment',data);
        $('#comments').append(html);
    }
})(jQuery,window,document);