$(document).ready(function() {
    // header scroll event
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

    // modal bg
    $(".view_link_list .img_view_link").on('click', function(){
        $(".pop_bg").addClass('show');
        // 스크롤 비활성화
        document.body.style.overflow = "hidden";
    });
    $(".pop .close_btn,.pop_bg").on('click', function(){
        $(".pop,.pop_bg").removeClass('show');
        // 스크롤 활성화
        document.body.style.overflow = "unset";
        // project modal 내 최상단 이동
        $(".pop .wrap_inner").scrollTop(0);
    });
});

// 스크롤 비활성화
// const openModal = (e) => {
//     document.body.style.overflow = "hidden";
// };
// 스크롤 활성화
// const closeModal = (e) => {
//     document.body.style.overflow = "unset";
// };

// modal
function showPop(modalname) {
    var $layer = $("."+ modalname);
    $layer.addClass("show");
}

function hidePop(modalname){
    $("."+ modalname).removeClass("show");
}