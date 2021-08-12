
$(".blog-carousel").owlCarousel({
  loop: true,
  margin: 15,
  nav: false,
  dots: false,
  stagePadding: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1920: {
      items: 4,
    },
  },
});

$(document).ready(function () {
  $("#pagepiling").pagepiling({
    sectionsColor: [
      "#ffffff",
      "#161616",
      "#ffffff",
      "#ffffff",
      "#161616",
      "#161616",
    ],
    navigation: false,
    dots: false,
  });
});



// SECTION 3

$(document).ready(function () {
  "USE-STRICT";

  $("#card-1").mouseenter(function () {
    $(".section-3-image").fadeOut(500, function () {
      $(this).attr("src", "media/innovation-img.png");
      $(this).fadeIn(500);
    });
  });
  $("#card-2").mouseenter(function () {
    $(".section-3-image").fadeOut(500, function () {
      $(this).attr("src", "media/NEXT.jpg");
      $(this).fadeIn(500);
    });
  });
  $("#card-3").mouseenter(function () {
    $(".section-3-image").fadeOut(500, function () {
      $(this).attr("src", "media/about_img.jpg");
      $(this).fadeIn(500);
    });
  });
});

//   SECTION 3 ENDS HERE

// BLOG

// BLOG ENDS HERE
