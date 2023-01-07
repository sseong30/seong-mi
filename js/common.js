// modal bg
$(function() {
    $(".view_link_list .img_view_link").on('click', function(){
        $(".pop_bg").addClass('show');
    });
    $(".pop .close_btn,.pop_bg").on('click', function(){
        $(".pop,.pop_bg").removeClass('show');
    });
});

// modal
function showPop(modalname) {
    var $layer = $("."+ modalname);
    $layer.addClass("show");
}

function hidePop(modalname){
    $("."+ modalname).removeClass("show");
}

// header scroll event
$(document).ready(function(){
    var lastScroll = 0;

    $(window).scroll(function(event){
         var scroll = $(this).scrollTop();
         var section = $("#intro").height();
         if (scroll > section){
         //이벤트를 적용시킬 스크롤 높이
            $("#wrap").find("header").addClass("scroll");
         }
         else {
            $("#wrap").find("header").removeClass("scroll");
         }
         lastScroll = scroll;
    });
});
