$(document).ready(function(){

    // VARIABLES GLOBALES

    var lastScroll = $(window).scrollTop();
    var header = $('header');

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        
        if (lastScroll - scroll >= 0) { 
            header.removeClass('activeScroll2');
        }else{
            header.addClass('activeScroll2');
        }
        // Actualizar la posición del scroll
        lastScroll = scroll;
    });
    

    // MENU MOBILE

    function menuMobile(){
        $(".menu_mobile").click(function(){
            $('.navbar').toggleClass("activeMobile");
        });
    }

    // SCROLL MENU
    //function scrollMenu(){

        
    //}

    // SCROLL MENU ANCLA
    function scrollMenuAncla(){
        
        var menuancla = $('.s_menu');
        var contentToMove = menuancla.html();
        var isContentAppended = false;

        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            
            if (scrollTop > 700 && !isContentAppended) {
                $('header').append('<div class="s_menu fixedMenu">' + contentToMove + '</div>');
                menuancla.hide();
                isContentAppended = true;
            } else if (scrollTop <= 700 && isContentAppended) {
                $('.fixedMenu').remove();
                menuancla.show();
                isContentAppended = false;
            }
        });
    }

    // Seleccionar el contenido de la clase 'source'
    
            
    // Inyectar el contenido en la clase 'destination'
    
 

    menuMobile();
    scrollMenuAncla();

});

