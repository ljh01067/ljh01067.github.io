document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // 폼 제출 기본 동작 방지

    var formData = new FormData(this);

    // AJAX 요청 보내기
    fetch('https://script.google.com/macros/s/AKfycbwTtBq5JIzX1vZaPrDmDUVGd4qrsTKpX-2eg2_4a5lbWHeSHCSC-JEBWAcZne-ext2K/exec', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // 성공적인 응답 처리
            if (data.status === "success") {
                alert(data.message); // 메일 전송 성공 시 알림
            } else {
                alert("메일 전송에 실패했습니다. 다시 시도해주세요.");
            }
        })
        .catch(error => {
            alert("에러가 발생했습니다. 다시 시도해주세요.");
        });
});

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