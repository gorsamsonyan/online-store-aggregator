$(document).ready(function () {
    $('.terms-of-use ul li a').click(function (e) {
        e.preventDefault();
        let descriptionBlock=$(this).data('description');
        let descriptionBlockClass="."+descriptionBlock;
        $('.terms-of-use-body-description-items div').removeClass("active");
        $('.terms-of-use-body-menu ul li a').removeClass("active");
        $(this).addClass("active");
        $(descriptionBlockClass).addClass("active");
    });
});




