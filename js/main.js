$(function() {
    var pull = $('.icon-hamburger');
    menu = $('.main-nav');
    menuHeight = menu.height();

   $(pull).on('click', function(e) {
    e.preventDefault();
    menu.fadeToggle();
    $('body').toggleClass('hidden-scroll');
});

$(window).resize(function(){
        var w = $(window).width();
        if(w > 992 ) {
        menu.removeAttr('style');
        $('body').removeClass('hidden-scroll');
        }
    });
});


$(function(){
    var submenu = $(".main-nav li");
    $(submenu).on("mouseenter mouseleave", function(e){
        e.preventDefault();
        $(this).find("ul").slideToggle();
    });
})

$(function(){
    var shopmenu = $(".shop-nav li");
    $(shopmenu).on("click", function(e){
        e.preventDefault();
        $(this).find("ul").slideToggle();
    });
})