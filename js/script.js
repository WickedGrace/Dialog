//blog slider

$(document).ready(function () {
  $('.blog__list').slick({
    dots: true,
    speed: 300,
    fade: true,
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
