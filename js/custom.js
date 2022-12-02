$(document).ready(function () {
  $(".careersslider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 10000,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1, rows: 1, dots: false } },
    ],
  });
});

$(document).ready(function () {
  $(".testimonialsslider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    rows: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 10000,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1, rows: 1, dots: false } },
    ],
  });
});

$(document).ready(function () {
  $(".sliderfeature").slick({
    slidesToShow: 6,
    slidesToScroll: 2,
    rows: 2,
    autoplaySpeed: 1000,
    autoplay: true,
    dots: true,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 4, rows: 2, dots: false } },
    ],
  });
});

$(document).ready(function () {
  $(".sliderfeature-secondary").slick({
    slidesToShow: 6,
    slidesToScroll: 2,
    rows: 2,
    autoplaySpeed: 1000,
    autoplay: true,
    dots: true,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 4, rows: 2, dots: false } },
    ],
  });
});

$(document).ready(function () {
  $(".casestudies").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 1,
    autoplaySpeed: 1000,
    autoplay: true,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, rows: 1, dots: false } },
    ],
  });
});
