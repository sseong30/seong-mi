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

// scroll
$(document).ready(function() {
    //jbOffset에 .project_section의 좌표값 저장 
	var jbOffset = $('.project_section').offset();

	$(window).scroll(function() {
        //document가 jbOffset 값보다 많이 스크롤 되면 실행
		// if ( $(document).scrollTop() > jbOffset.top ) {
        if (jbOffset.top >= 10) {
			$('.project_section .section_title').addClass('on');
		}
        //jbOffset 값 이하로 줄어들면 실행
		else {
			$('.project_section .section_title').removeClass('on');
		}
	});
});