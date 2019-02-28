$(".mobile-menu-icon").on("click", function () {
    $(".mobile-left-menu").toggleClass("left-menu-open")
});

$(".left-menu-close-icon").on("click", function () {
    $(".mobile-left-menu").toggleClass("left-menu-open")
});


// $(document).ready(function () {
//     $('.ul li a').click(function (e) {
//         // e.preventDefault();
//         let descriptionBlock=$(this).data('description');
//         let descriptionBlockClass="."+descriptionBlock;
//         $('.privacy-policy-body-description-items div').removeClass("active");
//         $('.privacy-policy-body-menu ul li a').removeClass("active");
//         $(this).addClass("active");
//         $(descriptionBlockClass).addClass("active");
//     });
// });

$(document).ready(function () {





    // Mobile Menu

    $(document).on('click', function (e) {
        if ($(".menu--open").css('left') == "0px") {
            if (!$(".menu--left").is(e.target) // если клик был не по нашему блоку
                && $(".menu--left").has(e.target).length === 0) {
                $(".mobileMenu__switcher").toggleClass("bars--open");
                $('.menu--left').toggleClass("menu--open");
                $("body").toggleClass("scroll-lock body-before");
            }
            e.stopPropagation();
        }
    });

    // Stores dropdown switcher
    let optionsDropdownSwitcher = function () {
        $(".wkOptions__switcherBtn").unbind("click");
        if ($(window).outerWidth(true) < 992) {
            $(".wkOptions__switcherBtn").on("click", function () {
                $(this).toggleClass("wkOptions__switcherBtn--open");
                $(".wkOptions__storePage").slideToggle("slow");
            });
        }
    };

});
