//burger menu

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger, .menu').toggleClass('active');
    $('.page').toggleClass('lock');
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

//services slider

$(document).ready(function () {
  $('.cards').slick({
    responsive: [
      {
        breakpoint: 1440,
        settings: 'unslick',
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
    ],
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
