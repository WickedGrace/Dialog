//blog slider

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
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
  });
});
