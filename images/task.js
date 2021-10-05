window.onscroll = function() {
    scrollFunction()
};
var La = 0;

function scrollFunction() {
    if (window.innerWidth > 800) {
        var scroll_current = window.pageYOffset || document.documentElement.scrollTop;

        if (scroll_current > La) {
            document.querySelector(".header").style.left = "-100%";
        } else {

            document.querySelector(".header").style.left = "0px";

        }

        La = scroll_current;
    }
}