// init Isotope
var $grid = $('#product-list').isotope({
  // options
});
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
    const bouton = document.getElementById(filterValue.substring(1));
    $(bouton).addClass('active');
    sessionStorage.clear();
  }
});

//window.onload = activeAll();

function activeAll() {
  const buttonAll = document.getElementById('filterall');
  $(buttonAll).addClass('active');
}