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
            var header = $('header');
            var subheader = $('.subheader');
            
    
            if (scroll > 50) { // Cambia este valor según cuándo quieras que se agregue la clase
                header.addClass('activeScroll1');
            } else {
                header.removeClass('activeScroll1');
            }
        });
    }

    menuMobile();
    scrollColor();

});

