//burger menu

$(document).ready(function () {
  $('.header__burger').click(function (e) {
    $('.header__burger, .menu').toggleClass('active');
    $('.page').toggleClass('lock');
  });
});

$(document).ready(function () {
  $('.menu__link').click(function (e) {
    $('.header__burger, .menu').removeClass('active');
    $('body').removeClass('lock');
  });
});

//menu scroll

$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    700,
    'linear'
  );
});

//articles slider

$(document).ready(function () {
  $('.articles__list').slick({
    dots: true,
    speed: 500,
    cssEase: 'linear',
    adaptiveHeight: true,
  });
});

//reviews slider

$(document).ready(function () {
  $('.reviews__list').slick({
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
  });
});
