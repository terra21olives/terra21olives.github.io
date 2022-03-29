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

function zoom(e) {
  var zoomer = e.currentTarget;
  if ($(window).width() > 768) {
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX / zoomer.offsetWidth * 100
    y = offsetY / zoomer.offsetHeight * 100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
  } else {
    e.stopPropagation();
  }
}

//window.onload = activeAll();

function activeAll() {
  const buttonAll = document.getElementById('filterall');
  $(buttonAll).addClass('active');
}