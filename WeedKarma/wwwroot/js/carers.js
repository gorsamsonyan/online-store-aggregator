

$(document).ready(function () {
    $('.open_positions-menu ul li a').click(function (e) {
        e.preventDefault();
        let descriptionBlock=$(this).data('content');
        let descriptionBlockClass="."+descriptionBlock;
        $('.open_positions-work-block').removeClass("open_positions-work-block-active");
        $('.open_positions-menu li a').removeClass("open_positions-menu-item-active");
        $(this).addClass("open_positions-menu-item-active");
        $(descriptionBlockClass).addClass("open_positions-work-block-active");
    });
});