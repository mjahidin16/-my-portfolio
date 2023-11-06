// event pada saat link di klik
$('.page-scroll').on('click', function (e) {
    e.preventDefault();
    var tujuan = $(this).attr('href');
    var elementTujuan = $(tujuan);

    // Pindahkan scroll dengan animasi
    $('html, body').animate({
        scrollTop: elementTujuan.offset().top - 50
    }, 1250, 'swing');
});

// Parallax
// about
$(window).on('load',function() {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

$(window).scroll(function () {
    var wscroll = $(this).scrollTop();
    
    // Jumbotron parallax
    $('.jumbotron img').css('transform', 'translate(0px, ' + wscroll / 4 + '%)');
    $('.jumbotron h1, .jumbotron p').css('transform', 'translate(0px, ' + wscroll / 2 + '%)');

    // Portfolio animasi
    var portfolioOffset = $('.portfolio').offset().top - 250;
    if (wscroll > portfolioOffset) {
        $('.portfolio .thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 200 * (i+1));
        });
    }
});
