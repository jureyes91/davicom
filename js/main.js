$(document).ready(function(){

    // MENU MOBILE

    function menuMobile(){
        $(".menu_mobile").click(function(){
            $('.navbar').toggleClass("activeMobile");
        });
    }

    // SCROLL MENU
    function scrollColor(){
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            var elemento = $('header');
    
            if (scroll > 50) { // Cambia este valor según cuándo quieras que se agregue la clase
                elemento.addClass('activeScroll');
            } else {
                elemento.removeClass('activeScroll');
            }
        });
    }

    menuMobile();
    scrollColor();

});

