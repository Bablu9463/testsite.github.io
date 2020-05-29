//Main slider
$(document).ready(function () {
  $(".slider").owlCarousel({
    items: 1,
    autoPlay: false,
    stopOnHover: true,
    navigation: true,
    navigationText: [
      '<img src="./css/css-asset/Vectorplay.svg">',
      '<img src="./css/css-asset/Vectorplay.svg">',
    ],
    itemsDesktop: 1,
    itemsDesktopSmall: 1,
    itemsTablet: 1,
    itemsMobile: 1,
  });
});
$("#fuonziona").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".funziona-area").offset().top,
    },
    1000
  );
  return false;
});
$("#pricing").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".pricing-area").offset().top,
    },
    1000
  );
  return false;
});

//scroll btn//
$(document).ready(function () {
  var $scrollButton = $("#scroll-btn");
  var $screenWidth = $(window).width();
  if ($screenWidth < 768) {
    $scrollButton.remove();
  } else {
    $("body").append($scrollButton);
  }
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $scrollButton.fadeIn();
    } else {
      $scrollButton.fadeOut();
    }
  });
  $scrollButton.click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});

//input label go up//
$(function () {
  $("input, textarea").floatify();
});

//Animation area/lotti-json
var animation = bodymovin.loadAnimation({
  container: document.getElementById("heroAnim"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./img/lottieJson/hero.json",
});

var animation = bodymovin.loadAnimation({
  container: document.getElementById("qrCode"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "/img/lottieJson/qrCode.json",
});

var animation = bodymovin.loadAnimation({
  container: document.getElementById("barraVotto"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "/img/lottieJson/barraVoto.json",
});

//Faq area
$(document).ready(function () {
  $("#faq-1").click(function () {
    $(".faq-1").slideToggle();
  });
  $("#faq-2").click(function () {
    $(".faq-2").slideToggle();
  });
  $("#faq-3").click(function () {
    $(".faq-3 p").slideToggle();
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
      $("#site-header").css(
        "background-color",
        "rgba(250,250,250,1)!important"
      );
    } else {
      $("#site-header").css(
        "background-color",
        "rgba(250,250,250,0)!important"
      );
    }
  });
});
