let AboutOffset = $('#About').offset().top;

$(window).on('scroll' , function () {
    let wScroll = $(window).scrollTop();

    if(wScroll > AboutOffset - 60){
        $('.navbar').css({backgroundColor : 'rgba(0, 1, 0,0.9'})
    }else { 
        $('.navbar').css({backgroundColor : 'transparent'})

    }
})
