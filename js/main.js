// set the item in localStorage on click
function catredir(text) {
  sessionStorage.setItem('cat', text);
};

$(document).ready(function () {
  $('select').selectpicker();
});

$(function () {

  $('.pagination-inner a').on('click', function() {
		$(this).siblings().removeClass('pagination-active');
		$(this).addClass('pagination-active');
})

  if ($('.owl-2').length > 0) {
    $('.owl-2').owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 20,
      smartSpeed: 1000,
      autoplay: true,
      nav: true,
      dots: true,
      pauseOnHover: false,
      responsive: {
        600: {
          margin: 20,
          nav: true,
          items: 2
        },
        1000: {
          margin: 20,
          stagePadding: 0,
          nav: true,
          items: 3
        }
      }
    });
  }

})