var $ = jQuery.noConflict();

jQuery(document).ready(function ($) {
  /*==========================*/
  /* sliders */
  /*==========================*/
  if ($(".simple-slider").length > 0) {
    jQuery(".simple-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      infinite: true,
      centerMode: false,

      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            adaptiveHeight: false,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
          },
        },
      ],
    });
  }

  if ($(".collection-slider").length > 0) {
    jQuery(".collection-slider").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      infinite: true,
      centerMode: false,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 8000,
      pauseOnHover: true,
      cssEase: "linear",
      variableWidth: true,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
          },
        },
      ],
    });
  }

  if ($(".product-details-slider").length > 0) {
    jQuery(".product-details-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      infinite: true,
      centerMode: false,
      autoplay: false,
      // autoplaySpeed: 0,
      // speed: 8000,
      // pauseOnHover: true,
      // cssEase: "linear",
      // variableWidth: true,
      // pauseOnHover: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
          },
        },
      ],
    });
  }
  /*==========================*/
  /* tab */
  /*==========================*/

  $(".tab-link").click(function () {
    var tabID = $(this).attr("data-tab");

    $(this).addClass("active").siblings().removeClass("active");

    $("#tab-" + tabID)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });

  /*==========================*/
  /* Mobile Slider */
  /*==========================*/
  if ($(".mobile-slider").length > 0) {
    jQuery(".mobile-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      infinite: true,
      centerMode: false,
      responsive: [
        {
          breakpoint: 5000,
          settings: "unslick",
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            adaptiveHeight: false,
          },
        },
      ],
    });
  }

  /*==========================*/
  /* Scroll on animate */
  /*==========================*/
  function onScrollInit(items, trigger) {
    items.each(function () {
      var osElement = $(this),
        osAnimationClass = osElement.attr("data-os-animation"),
        osAnimationDelay = osElement.attr("data-os-animation-delay");
      osElement.css({
        "-webkit-animation-delay": osAnimationDelay,
        "-moz-animation-delay": osAnimationDelay,
        "animation-delay": osAnimationDelay,
      });
      var osTrigger = trigger ? trigger : osElement;
      osTrigger.waypoint(
        function () {
          osElement.addClass("animated").addClass(osAnimationClass);
        },
        {
          triggerOnce: true,
          offset: "95%",
        }
      );
      // osElement.removeClass('fadeInUp');
    });
  }
  onScrollInit($(".os-animation"));
  onScrollInit($(".staggered-animation"), $(".staggered-animation-container"));

  /*==========================*/
  /* Header fix */
  /*==========================*/
  var scroll = $(window).scrollTop();
  if (scroll >= 10) {
    $("body").addClass("fixed");
  } else {
    $("body").removeClass("fixed");
  }
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 10) {
    $("body").addClass("fixed");
  } else {
    $("body").removeClass("fixed");
  }
});
/*==========================*/
/*  Tilt Hover Animation */
/*==========================*/
$(".paralax-image").tilt({
  max: 12,
  speed: 1e3,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  transition: !1,
  perspective: 1e3,
  scale: 1,
});
/**
 * When user mouse enters tilt element
 */
class mouseEnter {
  constructor(event) {
    this.ticking = false;
    $(this).css({ "will-change": "transform" });
    setTransition.call(this);

    // Trigger change event
    $(this).trigger("tilt.mouseEnter");
  }
}
/**
 * Public methods
 */
$.fn.tilt.destroy = function () {
  $(this).each(function () {
    $(this).find(".js-tilt-glare").remove();
    $(this).css({ "will-change": "", transform: "" });
    $(this).off("mousemove mouseenter mouseleave");
  });
};
// ==============================================
if (wrapper) {
  const counters = wrapper.querySelectorAll(".js-counter"),
    duration = 1e3;
  let isCounted = !1;
  document.addEventListener("scroll", function () {
    const wrapperPos = wrapper.offsetTop - window.innerHeight;
    !isCounted &&
      window.scrollY > wrapperPos &&
      (counters.forEach((counter) => {
        const countTo = counter.dataset.count,
          countPerMs = countTo / duration;
        let currentCount = 0;
        const countInterval = setInterval(function () {
          currentCount >= countTo && clearInterval(countInterval),
            (counter.textContent = Math.round(currentCount)),
            (currentCount += countPerMs);
        }, 1);
      }),
      (isCounted = !0));
  });
}
// ==============================================================
const scrollTop = document.getElementById("scroll__top");
scrollTop.addEventListener("click", function () {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
  console.log("srcoll---->");
}),
  window.addEventListener("scroll", function () {
    window.scrollY > 300
      ? scrollTop.classList.add("active")
      : scrollTop.classList.remove("active");
  });
// =====================================================================

/*-----------------------
    Shop filter active 
------------------------- */
$(".filter-active a").on("click", function (e) {
  e.preventDefault();
  $(".product-filter-wrapper").slideToggle();
});
/* Cart dropdown */
var iconCart = $(".filter-active a");
iconCart.on("click", function () {
  $(".filter-active a").toggleClass("active");
});
