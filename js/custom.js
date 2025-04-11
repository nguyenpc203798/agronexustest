(function ($) {
  "use strict";

  // PRE LOADER
  $(window).load(function () {
    $(".preloader").fadeOut(1000); // set duration in brackets
  });

  // MENU
  $(".navbar-collapse a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  $(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

  // SLIDER
  $(".owl-carousel").owlCarousel({
    animateOut: "fadeOut",
    items: 1,
    loop: true,
    autoplayHoverPause: false,
    autoplay: false,
    smartSpeed: 1000,
  });

  // PARALLAX EFFECT
  // $(window).stellar({
  //   verticalOffset: 50, // Điều chỉnh độ trễ cuộn dọc
  // });

  // MAGNIFIC POPUP
  $(".image-popup").magnificPopup({
    type: "image",
    removalDelay: 300,
    mainClass: "mfp-with-zoom",
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it

      duration: 300, // duration of the effect, in milliseconds
      easing: "ease-in-out", // CSS transition easing function

      // The "opener" function should return the element from which popup will be zoomed in
      // and to which popup will be scaled down
      // By defailt it looks for an image tag:
      opener: function (openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is("img")
          ? openerElement
          : openerElement.find("img");
      },
    },
  });

  /*
    // CONTACT FORM
    $("#contact-form").submit(function (e) {
      e.preventDefault();
      var name = $("#cf-name").val();
      var email = $("#cf-email").val();
      var subject = $("#cf-subject").val();
      var message = $("#cf-message").val();
      var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

      function isValidEmail(emailAddress) {
          var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
          return pattern.test(emailAddress);
      };
      if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
          $.ajax({
              type: "POST",
              url: "email.php",
              data: dataString,
              success: function () {
                  $('.text-success').fadeIn(1000);
                  $('.text-danger').fadeOut(500);
              }
          });
      }
      else {
          $('.text-danger').fadeIn(1000);
          $('.text-success').fadeOut(500);
      }
      return false;
    });

*/

  // SMOOTHSCROLL
  // $(function() {
  //   $('.custom-navbar a, #home a').on('click', function(event) {
  //     var $anchor = $(this);
  //       $('html, body').stop().animate({
  //         scrollTop: $($anchor.attr('href')).offset().top - 49
  //       }, 1000);
  //         event.preventDefault();
  //   });
  // });

  // WOW ANIMATION
  new WOW({ mobile: true }).init();

  // Lấy tất cả phần tử có class .parent
  const parents = document.querySelectorAll(".parent");

  // Hàm tính toán chiều cao của phần tử cha theo tỷ lệ của phần tử con
  function setParentHeight() {
    // Lặp qua tất cả các phần tử cha
    parents.forEach((parent) => {
      const child = parent.querySelector(".child"); // Lấy phần tử con của phần tử cha hiện tại
      const childHeight = child.offsetHeight; // Lấy chiều cao của phần tử con

      // Kiểm tra kích thước màn hình
      const screenWidth = window.innerWidth;

      // Áp dụng tỷ lệ chiều cao khác nhau tùy theo chiều rộng màn hình
      let parentHeight;
      if (screenWidth <= 432) {
        parentHeight = childHeight * 1.06; // Nếu màn hình <= 432px, chiều cao của phần tử cha là childHeight * 1.05
      } else if (screenWidth <= 700) {
        parentHeight = childHeight * 1.5; // Nếu màn hình > 432px và <= 700px, chiều cao của phần tử cha là childHeight * 1.5
      } else if (screenWidth <= 1024) {
        parentHeight = childHeight * 2.2; // Nếu màn hình > 700px và <= 1024px, chiều cao của phần tử cha là childHeight * 2.2
      } else {
        parentHeight = 800; // Nếu màn hình > 1024px, chiều cao của phần tử cha là 800px
      }

      parent.style.height = `${parentHeight}px`; // Cập nhật chiều cao của phần tử cha
    });
  }

  // Gọi hàm tính toán chiều cao khi trang được tải
  window.onload = setParentHeight;

  // Gọi lại hàm khi kích thước màn hình thay đổi
  window.onresize = setParentHeight;
})(jQuery);
