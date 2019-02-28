$(document).ready(function () {
    $('.about-us-navbar ul li a').click(function (e) {
        e.preventDefault();
        let descriptionBlock=$(this).data('description');
        let descriptionBlockClass="."+descriptionBlock;
         $('.about-us-description-text div').removeClass("about-us-description-active");
        $('.about-us-navbar ul li a').removeClass("about-us-link-active");
        $(this).addClass("about-us-link-active");
        $(descriptionBlockClass).addClass("about-us-description-active");
    });
});
