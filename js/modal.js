$(".pop").on("click", function (e) {
    if (e.target.tagName == 'IMG') {
        var image = e.target.getAttribute("src");
    }
    const zoombackground = document.querySelector('.zoom');
    zoombackground.style.backgroundImage = "url('" + image + "')";
    $('#imagepreview').attr('src', image); // here asign the image to the modal when the user click the enlarge link
    var captionText = document.getElementById("modalLabel");
    captionText.innerHTML = $('.myImg').attr('alt');
    $.getJSON('./products.json', function (data) {
        "use strict";
        var products = data.products;
        products.forEach(e => {
            if (e.imageurl === image) {
                $("#product-id").html(e.id);
                $("#product-spec1").html(e.productspec1);
                $("#product-spec2").html(e.productspec2);
                $("#product-spec3").html(e.productspec3);
            }
        });
    });
    $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});

function zoom(e) {
    var zoomer = e.currentTarget;
    zoomer.ondragstart = function () {
        return false;
    };
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX / zoomer.offsetWidth * 100
    y = offsetY / zoomer.offsetHeight * 100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
}

//center popup
function centerModal() {
    $(this).css('display', 'block');
    var $dialog = $(this).find(".modal-dialog");
    var offset = ($(window).height() - $dialog.height()) / 2;
    // Center modal vertically in window
    $dialog.css("margin-top", offset);
}

$('.modal').on('show.bs.modal', centerModal);
$(window).on("resize", function () {
    $('.modal:visible').each(centerModal);
});