//burger menu

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger, .menu').toggleClass('active');
    $('.page').toggleClass('lock');
  });
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
