AOS.init();
function myfunction(x) {
    x.classList.toggle("change")
}


window.onscroll = function() {doAnimate ()};
function doAnimate () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementById("topNav").classList.add("boxShadowShow");
    }
    else {
        document.getElementById("topNav").classList.remove("boxShadowShow");
    }
}