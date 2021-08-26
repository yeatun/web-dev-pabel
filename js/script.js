
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

// ROADMAP
/* Timeline */
$('.timeLine-slider').slick({
  dots: false,
infinite: false,
 centerMode: true,
speed: 300,
slidesToShow: 2,
slidesToScroll: 2,
 
          prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
          nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
          
responsive: [
    {
    breakpoint: 1200,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true
    }
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]

});



/* Timeline */
if ($(window).width() > 768) {
 $('.timeLine-slider').slick('slickGoTo', 3); /* index starts from 0 */
}
else {
 $('.timeLine-slider').slick('slickGoTo', 2); /* index starts from 0 */
}
