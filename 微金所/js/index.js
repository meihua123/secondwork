//改变浏览器窗口获取不同图片
$(function () {
    function resize() {
        // 获取浏览器宽度
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;
        // 根据isSmallScreen的值来切换图片
        var ida = $('.carousel-inner > .item');
        ida.each(function (i, item) {
            // 把DOM对象转换为jq对象
            $item = $(item);
            var imgSrc = isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
            $item.html('<img src="' + imgSrc + '"/>');
            $item.css('backgroundImage' + 'url(' + imgSrc + ')');
        })
        // 选项卡滚动条
        // 1.拿到标签页的标签容器宽度
        // 2.获取所有子元素的和
        // 3.遍历元素
        // 4.把宽度赋值给容器
        var $ulContainer = $('.nav-tabs');
        var width = 0;
        $ulContainer.children().each(function (index, element) {
            width += element.clientWidth;
        })
        if (width > $(window).width()) {
            $ulContainer.css('width', width).parent().css('overflow-x', 'scroll');
        }
        else {
            $ulContainer.css('width', width).parent().css('overflow-x', 'hidden');
        }
    }
    $(window).on('resize', resize).trigger('resize');

    // tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

// 新闻切换
$('#newsTab .nav-pills li').on('click',function(){
    $this = $('this');
    var title = $(this).data('title');
    $('.news-title').text(title);
})



})