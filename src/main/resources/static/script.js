$(window).scroll(function() {
    if ($(window).scrollTop() == 0) {
        $('.main_nav').addClass('sticky');
    } else {
        $('.main_nav').removeClass('sticky');
    }
});
jQuery(document).ready(function($) {
    $('.smoothscroll').on('click', function(e) {
        e.preventDefault();
        var target = this.hash, $target = $(target);
        $('html, body').stop().animate({
            'scrollTop' : $target.offset().top
        }, 800, 'swing', function() {
            window.location.hash = target;
        });
    });
});
document.querySelector(".gform").addEventListener("submit",
    function(event) {
        var checkbox = document.getElementById("checkbox");
        // 이메일 전송 알림
        setTimeout(function() {
            alert("이메일이 성공적으로 전송되었습니다!");
            document.getElementById("submitBtn").disabled = false; // 문의하기 버튼 활성화
            document.getElementById("backBtn").disabled = false; // 뒤로가기 버튼 활성화
        }, 100); // 1초 후에 알림을 표시합니다.
    });