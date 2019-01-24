$(window).scroll(function () {
    if (document.documentElement.scrollTop > 1200) {
        $('.me').show();
    }
    if (document.documentElement.scrollTop < 1200) {
        $('.me').hide();
    }
    else {
        document.getElementById(".me").style.display = "none";
    }
});