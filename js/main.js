$(document).ready(function () {
    $('.menu-icon').on('click', function () {
        $('nav ul').toggleClass('showing');
    });
    $('.content').masonry({
        columnWidth: '.grid-sizer',
        itemSelector: '.content-item',
    });
})