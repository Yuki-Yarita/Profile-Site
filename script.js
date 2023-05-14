function FexedAnime(){
    var headerH = $('header').outerHeight(true);
    var scroll = $(window).scrooTop();
    if(scroll >= headerH){
        $('header').addClass('fixed');
    }else {
        $('header').removeClass('fixed');
    }
}