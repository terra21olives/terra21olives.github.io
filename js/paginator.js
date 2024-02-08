$(document).ready(function () {
  $('select').selectpicker();
});

$(function () {

  $('.pagination-inner a').on('click', function() {
		$(this).siblings().removeClass('pagination-active');
		$(this).addClass('pagination-active');
    })

	$('.example').rpmPagination({
	  domElement: '.item'
	});

})