$(".blog-carousel").owlCarousel({
  loop: true,
  margin: 15,
  nav: false,
  dots: true,
  autoplay: true,
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
    // 1920: {
    //   items: 4,
    // },
  },
});

$(".seen-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

// WOW JS

wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});

wow.init();

// (function ($) {
//   window.fnames = new Array();
//   window.ftypes = new Array();
//   fnames[0] = "EMAIL";
//   ftypes[0] = "email";
//   fnames[1] = "FNAME";
//   ftypes[1] = "text";
//   fnames[2] = "LNAME";
//   ftypes[2] = "text";
//   fnames[3] = "ADDRESS";
//   ftypes[3] = "address";
//   fnames[4] = "PHONE";
//   ftypes[4] = "phone";
//   fnames[5] = "BIRTHDAY";
//   ftypes[5] = "birthday";
// })(jQuery);
// var $mcj = jQuery.noConflict(true);

// $(document).ready(function () {
//   $("#pagepiling").pagepiling({
//     sectionsColor: [
//       "#ffffff",
//       "#ffffff",
//       "#ffffff",
//       "#ffffff",
//       "#ffffff",
//       "#ffffff",
//       "#161616",
//     ],
//     navigation: false,
//     dots: false,
//   });
// });

// MediumWidget.Init({
//   renderTo: "#medium-widget",
//   params: {
//     resource: "https://medium.com/pandoraprotocol",
//     postsPerLine: 1,
//     limit: 1,
//     picture: "big",
//     fields: ["description"],
//     ratio: "original",
//   },
// });

// SECTION 3

// $(document).ready(function () {
//   "USE-STRICT";

//   $("#card-1").mouseenter(function () {
//     $(".section-3-image").fadeOut(500, function () {
//       $(this).attr("src", "../media/innovation-img.png");
//       $(this).fadeIn(500);
//     });
//   });
//   $("#card-2").mouseenter(function () {
//     $(".section-3-image").fadeOut(500, function () {
//       $(this).attr("src", "../media/NEXT.png");
//       $(this).fadeIn(500);
//     });
//   });
//   $("#card-3").mouseenter(function () {
//     $(".section-3-image").fadeOut(500, function () {
//       $(this).attr("src", "../media/about_img.jpg");
//       $(this).fadeIn(500);
//     });
//   });
// });

//   SECTION 3 ENDS HERE

// BLOG

// BLOG ENDS HERE
