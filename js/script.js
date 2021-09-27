// JS-функция определения поддержки WebP
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

$(document).ready(function () {
  // Активація бергер меню
  $(".burger-menu").click(function (event) {
    $(".burger-menu, .header__login, .burger-menu__line").toggleClass("active");
    $("body").toggleClass("no-scroll");
  });

  // Slick Slider
  $(".tariff__list").slick({
    arrows: false,
    dots: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          slidesToShow: 2,
          autoplay: true,
          speed: 1000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
          // autoplay: true,
          speed: 1000,
        },
      },
    ],
  });
});
