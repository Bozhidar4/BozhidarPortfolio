$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 500) {
            $(".navbar-inverse").css("background", "#1a1a1a");
        }
        if (scroll < 500) {
            $(".navbar-inverse").css("background", "none");
        }

        else {
            document.getElementById(".navbar-inverse").css("background", "#1a1a1a");
        }
    })
})