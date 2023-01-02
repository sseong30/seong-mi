// modal bg
$(function() {
    $(".project_list .list .img_box").on('click', function(){
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