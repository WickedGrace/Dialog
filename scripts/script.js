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

// $(document).ready(function () {
//   $('.cards').slick({
//     dots: false,
//     speed: 500,
//     cssEase: 'linear',
//     variableWidth: true,
//     // mobileFirst: true,
//     responsive: [
//       {
//         breakpoint: 665,
//         settings: 'unslick',
//       },
//     ],
//   });
// });

//articles slider

$(document).ready(function () {
  $('.articles__list').slick({
    dots: true,
    speed: 500,
    cssEase: 'linear',
    adaptiveHeight: true,
    variableWidth: true,
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
    variableWidth: true,
  });
});
