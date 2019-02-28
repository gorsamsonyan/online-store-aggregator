// Stores filter switcher
// $(".wkShop__filtersSwitcher").on("click", function (e) {
//     e.preventDefault();
//     $(this).toggleClass("wkShop__filtersSwitcher--centered");
//     $(".wkStore__aside").toggleClass("wkStore__aside--opened");
// });
//
// // Stores dropdown switcher
// let optionsDropdownSwitcher = function () {
//     $(".wkOptions__switcherBtn").unbind("click");
//     if ($(window).outerWidth(true) < 992) {
//         $(".wkOptions__switcherBtn").on("click", function () {
//             $(this).toggleClass("wkOptions__switcherBtn--open");
//             $(".wkOptions__storePage").slideToggle("slow");
//         });
//     }
// };
// if ($("body").hasClass("storesPage")) {
//     optionsDropdownSwitcher();
//     $(window).resize(function () {
//         optionsDropdownSwitcher();
//     });
// }

// Store panel
$(".st-store__info").on("click", function (e) {
    e.preventDefault();
    $(this)
        .closest(".st-store")
        .addClass("st-store--opened");
});
$(".st-store__backBtn").on("click", function (e) {
    e.preventDefault();
    $(this)
        .closest(".st-store")
        .removeClass("st-store--opened");
});


$(".store-filters-mobile-button").on("click", function () {
    $(".store-filters").toggleClass("store-filters-open")
    $(".store-filters-section").toggleClass("open-filters")
});

$("#switchingCheckboxMap").change(function() {
    if(this.checked) {
        $(".wkPage--store").css("display","none")
        $(".mp-main").css("display","block")
    }
    else {
        $(".wkPage--store").css("display","block")
        $(".mp-main").css("display","none")
    }
});
$(".wkOptions__select").select2();
