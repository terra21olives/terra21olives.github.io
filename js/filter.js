// init Isotope
var $grid = $('#product-list').isotope({
  // options
});

//var $grid = $('#product-list');

$(window).on('load', function () {

  $grid.imagesLoaded(function () {
    $grid.isotope({
      itemSelector: '.block-member',
      layoutMode: 'masonry'
    });
  });
});

//window.onload = activeAll();

// filter items on button click
$('.filter-button-group').on('click', 'button', function () {
  $(this).closest('div').find('button').not(this).removeClass('active');
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({
    filter: filterValue
  });
});

$(function () {
  // get the item 
  if (sessionStorage.getItem('cat') !== null) {
    var filterValue = sessionStorage.getItem('cat');
    $grid.isotope({
      filter: filterValue
    });
    var bouton = document.getElementById('filterall');
    if (filterValue !== '*') {
      $(bouton).removeClass('active');
      var bouton = document.getElementById(filterValue.substring(1));
    }
    $(bouton).addClass('active');
    sessionStorage.clear();
  }
});

function activeAll() {
  const buttonAll = document.getElementById('filterall');
  $(buttonAll).addClass('active');
}

//function reloadGrid() {
//  $grid.isotope('reloadItems').isotope();
//}