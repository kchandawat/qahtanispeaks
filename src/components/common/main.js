import jQuery from "jquery/src/jquery";
import "./../assets/js/slick.min.js";

(function($) {
  "use strict";

  /**
   * Caching selectors
   *
   * jQuery selectors are prefixed with $
   */
  var $win = $(window),
    $doc = $(document),
    $body = $("body"),
    $header = $("header"),
    $scrollup = $(".scrollup"),
    $htmlbody = $("html, body"),
    $bannerslide = $(".banner-slide"),
    $praiseslide = $(".praise-slide"),
    $upcommingslide = $(".up-comming-slide"),
    $relatedslide = $(".related-slide"),
    $productslide = $(".product-slide"),
    $countWrap = $(".count-down-wrap"),
    $counter = $(".counter"),
    $anchor = $(".anchor"),
    $abla1 = $("a.bla-1"),
    $dropdown = $(".dropdown"),
    $navbar = $(".navbar-collapse"),
    $navBtn = $("button.navbar-toggle"),
    $dropdownmenu = $(".dropdown-menu"),
    $accordion = $("#accordion"),
    $productdesc = $("#product-description");

  //////scroll function for changed css starts
  $win.scroll(function() {
    if ($(this).scrollTop() > 0) {
      $header.addClass("scrolled");
    } else {
      $header.removeClass("scrolled");
    }
  });

  //Back to top
  $win.scroll(function() {
    if ($(this).scrollTop() > 200) {
      $scrollup.fadeIn();
    } else {
      $scrollup.fadeOut();
    }
  });

  $scrollup.on("click", function() {
    $htmlbody.animate(
      {
        scrollTop: 0
      },
      600
    );
    return false;
  });

  //banner slider
  $bannerslide.slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    draggable: true,
    lazyLoad: "ondemand",
    pauseOnFocus: false
  });

  // prise slider
  if ($win.width() < 767) {
    $praiseslide.bxSlider({
      minSlides: 1,
      maxSlides: 1,
      slideWidth: 370,
      slideMargin: 30,
      moveSlides: 1,
      auto: true,
      pager: false
    });
  } else {
    $praiseslide.bxSlider({
      minSlides: 3,
      maxSlides: 4,
      slideWidth: 370,
      slideMargin: 30,
      moveSlides: 1,
      auto: true,
      pager: false
    });
  }

  // up-comming-list
  $upcommingslide.bxSlider({
    auto: true,
    pager: false
  });

  // related slider
  $relatedslide.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // product slider
  if ($win.width() < 767) {
    $productslide.bxSlider({
      minSlides: 1,
      maxSlides: 4,
      slideWidth: 360,
      slideMargin: 30,
      moveSlides: 1,
      auto: true,
      pager: false,
      controls: false
    });
  } else {
    $productslide.bxSlider({
      minSlides: 3,
      maxSlides: 4,
      slideWidth: 360,
      slideMargin: 30,
      moveSlides: 1,
      auto: true,
      pager: false,
      controls: false
    });
  }

  //count down
  if ($countWrap.length) {
    var endDate = $countWrap.attr("data-end-date");
    $countWrap.countdown({
      date: endDate,
      render: function(data) {
        console.log(data);
        $(this.el).html(
          '<div class="wrap"><h4>' +
            this.leadingZeros(data.days, 2) +
            "</h4> <span>DAYS </span></div>" +
            '<div class="wrap"><h4>' +
            this.leadingZeros(data.hours, 2) +
            "</h4> <span>HOURS </span></div>" +
            '<div class="wrap"><h4>' +
            this.leadingZeros(data.min, 2) +
            "</h4> <span>MINS </span></div>" +
            '<div class="wrap"><h4>' +
            this.leadingZeros(data.sec, 2) +
            "</h4> <span>SEC </span></div>"
        );
      }
    });
  }

  //count down
  $counter.counterUp({
    delay: 50,
    time: 2000
  });

  // mouse wheel click
  $anchor.on("click", function() {
    var the_id = $(this).attr("href");
    var scrol = $(the_id).offset().top;
    scrol = scrol - 110;
    $("html, body").animate(
      {
        scrollTop: scrol
      },
      "slow"
    );

    return false;
  });

  // youtube pop up
  $abla1.YouTubePopUp();

  // drop down menu in mobile
  $dropdown.on("click", "a", function(e) {
    var $this = $(this);
    var collapseThis = false;
    if (
      $dropdownmenu.hasClass("dropdown-open") &&
      !$this.next(".dropdown-menu").hasClass("dropdown-open")
    ) {
      $dropdownmenu.slideUp().removeClass("dropdown-open");
      collapseThis = false;
    } else if (
      $(this)
        .next(".dropdown-menu")
        .hasClass("dropdown-open")
    ) {
      collapseThis = true;
      $(this)
        .next(".dropdown-menu")
        .slideUp()
        .removeClass("dropdown-open");
    }

    if (!collapseThis) {
      $(this)
        .next(".dropdown-menu")
        .slideDown()
        .addClass("dropdown-open");
    }
  });

  //accrodion
  $accordion.accordion();

  // product description
  $productdesc.accordion({
    heightStyle: "content"
  });

  // slide out menu on document click
  $body.on("click", function(e) {
    var target = e.target;
    var classList = e.target.classList;
    if (
      $navbar.hasClass("in") &&
      (!classList.contains("icon-bar") ||
        !classList.contains("navbar-toggle")) &&
      $(target).attr("href") !== "#"
    ) {
      $navbar.removeClass("collapse").addClass("collapsing");
      setTimeout(function() {
        $navbar.removeClass("in collapsing").removeAttr("aria-expanded");
      }, 300);

      $navBtn.removeAttr("aria-expanded");
    }
  });
})(jQuery);
