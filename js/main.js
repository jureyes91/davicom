$(document).ready(function(){

    // MENU MOBILE

    function menuMobile(){
        $(".menu_mobile").click(function(){
            $('.navbar').toggleClass("activeMobile");
        });
    }

    // SCROLL MENU
    function scrollMenu(){
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

    // SCROLL MENU ANCLA
    function scrollMenuAncla(){
        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            var menuancla = $('.s_menu');
            
    
            if (scrollTop > 600) { // Cambia este valor según cuándo quieras que se agregue la clase
                menuancla.addClass('fixedMenu');
            } else {
                menuancla.removeClass('fixedMenu');
            }

        });
    }
 

    menuMobile();
    scrollMenu();
    scrollMenuAncla();

});

