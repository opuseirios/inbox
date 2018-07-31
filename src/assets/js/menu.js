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
            if(deltaY<0){
                const moveTop = Math.max(deltaY+touch.offsetTop,-imageHeight);
                if(moveTop<=0&&moveTop>=-imageHeight){
                    $('.menu-container').css({'top':moveTop+'px'});
                }
                if(touch.offsetTop>-imageHeight){
                    bsScroll.disable();
                }else {
                    bsScroll.enable();
                }
            }else {
                var downPx = $('.cakes ul').position().top;
                if(downPx>=0){
                    bsScroll.disable();
                    const moveDown = Math.min(0,deltaY+touch.offsetTop);
                    $('.menu-container').css({'top':moveDown+'px'});
                }
            }
        })
        /*加减*/
            $('.add').on('click',function () {
                var count = $(this).siblings('.count').html();
                count++;
                $(this).siblings('.minus').animate({opacity:1},200);
                $(this).siblings('.count').animate({opacity:1},200).html(count);
            })
            $('.minus').on('click',function () {
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
                    imgSrc:'./assets/imgs/menu/inbox1.png',
                    name:'至爱红丝绒',
                    en:'INBOX',
                    price:69
                },
                {
                    imgSrc:'./assets/imgs/menu/inbox1.png',
                    name:'至爱红丝绒',
                    en:'INBOX',
                    price:69
                },
                {
                    imgSrc:'./assets/imgs/menu/inbox1.png',
                    name:'至爱红丝绒',
                    en:'INBOX',
                    price:69
                },
                {
                    imgSrc:'./assets/imgs/menu/inbox1.png',
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
                    imgSrc:'./assets/imgs/menu/inbox2.png',
                    name:'芒果白雪',
                    en:'INBOX',
                    price:69
                },
                {
                    imgSrc:'./assets/imgs/menu/inbox2.png',
                    name:'芒果白雪',
                    en:'INBOX',
                    price:69
                },
                {
                    imgSrc:'./assets/imgs/menu/inbox2.png',
                    name:'芒果白雪',
                    en:'INBOX',
                    price:69
                },
                {
                    imgSrc:'./assets/imgs/menu/inbox2.png',
                    name:'芒果白雪',
                    en:'INBOX',
                    price:69
                },
                {
                    imgSrc:'./assets/imgs/menu/inbox2.png',
                    name:'芒果白雪',
                    en:'INBOX',
                    price:69
                },
                {
                    imgSrc:'./assets/imgs/menu/inbox2.png',
                    name:'芒果白雪',
                    en:'INBOX',
                    price:69
                },
                {
                    imgSrc:'./assets/imgs/menu/inbox2.png',
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
                    imgSrc:'./assets/imgs/menu/inbox3.png',
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
                    imgSrc:'./assets/imgs/menu/inbox3.png',
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
                    imgSrc:'./assets/imgs/menu/inbox3.png',
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
                    imgSrc:'./assets/imgs/menu/inbox3.png',
                    name:'白巧脏脏',
                    en:'INBOX',
                    price:69
                }
            ]
        }
        var _html = template('tplDurian',inboxData);
        $('#durian').append(_html);
    }
})(jQuery,window,document);