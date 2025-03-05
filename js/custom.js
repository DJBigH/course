$(document).ready(function () {
  //Main Slider
  $(".main-slider").owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 },
    },
  });

  //Box right slider
  $(document).ready(function () {
    $(".box-right").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: false,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 2 },
      },
    });
  });

  //Box banner-under
  $(document).ready(function () {
    $(".banner-under").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: false,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 4 },
      },
    });
  });

  //Box Book Info
  $(document).ready(function () {
    $(".box-book-info").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: false,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 4 },
      },
    });
  });

  //Box right
  $(document).ready(function () {
    $(".right").owlCarousel({
      loop: true,
      margin: 20,
      nav: false, // ✅ Phải có nav: true để hiển thị nút
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: false,
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1000: { items: 1 },
      },
    });
  });
});
