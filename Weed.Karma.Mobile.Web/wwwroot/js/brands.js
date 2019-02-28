$(document).ready(function () {
    $('.brands-navbar ul li a').click(function (e) {
        e.preventDefault();


        $('.brands-navbar ul li a').removeClass("active");
        $(this).addClass("active");

    });
});




