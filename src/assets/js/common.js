(function ($,document,window) {
    $(function () {
        /*点击图标，切换状态*/
        // $('#navBar li').on('click',function () {
        //     var lis = $(this).parent().children('li');
        //     for(var i=0;i<lis.length;i++){
        //         var li = $(lis[i]);
        //         var curName = li.data('name');
        //         li.find('i').removeClass(`icon-${curName}-active`).addClass(`icon-${curName}`);
        //     }
        //     $(this).addClass('current').siblings().removeClass('current');
        //     var name = $(this).data('name');
        //     $(this).find('i').removeClass(`icon-${name}`).addClass(`icon-${name}-active`);
        // })

        var title = $('title').html();
        var index = title.indexOf('|');
        title = title.slice(index+1).trim();
        $('body').append('<input type="hidden"  value="'+title+'" id="hideNav" >');

        $('#navBar li').each(function (index,item) {

            if($(item).find('.name').text()===title){
                var curName = $(this).data('name');
                $(this).addClass('current').siblings().removeClass('current');
                $(this).find('i').removeClass(`icon-${curName}`).addClass(`icon-${curName}-active`);
            }
        })
    })
})(jQuery,document,window);