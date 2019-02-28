$(document).ready(function () {
    $('.privacy-policy-body-menu ul li a').click(function (e) {
        e.preventDefault();
        let descriptionBlock=$(this).data('description');
        let descriptionBlockClass="."+descriptionBlock;
        $('.privacy-policy-body-description-items div').removeClass("active");
        $('.privacy-policy-body-menu ul li a').removeClass("active");
        $(this).addClass("active");
        $(descriptionBlockClass).addClass("active");
    });
});




