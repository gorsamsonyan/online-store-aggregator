$(document).ready(function () {
    // Fix header on scroll
    let wkHeader = $(".wkHeader");
    let wkBanner = $(".wkBanner");

    if ($(window).scrollTop() >= $(wkBanner).outerHeight(true)){
        wkHeader.addClass("wkHeader--fixed");
        $(".menu--left").addClass("menu-open-scrolled");
        wkHeader.next().css("marginTop", wkHeader.outerHeight(true) + "px");
    }
    else {
        wkHeader.removeClass("wkHeader--fixed");
        $(".menu--left").removeClass("menu-open-scrolled");
        wkHeader.next().css("marginTop", wkHeader.outerHeight(true) + "px");

        // console.log(wkHeader.outerHeight(true));
    }
    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= $(wkBanner).outerHeight(true)) {

            wkHeader.addClass("wkHeader--fixed");
            $(".menu--left").addClass("menu-open-scrolled");
            wkHeader.next().css("marginTop", wkHeader.outerHeight(true) + "px");
        } else {
            wkHeader.removeClass("wkHeader--fixed");
            $(".menu--left").removeClass("menu-open-scrolled");
            wkHeader.next().css("marginTop", wkHeader.outerHeight(true) + "px");
        }
    });



    // Map Page Filter Dropdowns
    $(".mp-filters__dropdownBtn").on("click", function (e) {
        e.preventDefault();
        // $(".mp-aside").removeClass("mp-aside--open");
        // $(".mp-aside__toggleBtn").removeClass("mp-aside__toggleBtn--open");
        $(this)
            .find(".mp-filters__dropdownIcon")
            .toggleClass("mp-filters__dropdownIcon--opened");
        $(this)
            .next()
            .toggleClass("mp-filter__dropdownPanel--open");
        // if ($(window).outerWidth(true) < 768) {
        //   $(this)
        //     .parent()
        //     .siblings()
        //     .find(".mp-filter__dropdownPanel")
        //     .removeClass("mp-filter__dropdownPanel--open");
        // }
    });

    // Map type change
    $(".mp-filters__type").on("change", function () {
        $(this)
            .siblings("input")
            .prop("checked", false);
    });

    // Map filters switcher for mobile
    $(".mp-filters__switcher").on("click", function () {
        $(this).toggleClass("mp-filters__switcher--open");
        $(".mp-filters").toggleClass("mp-filters--open");
        if (
            $(".mp-filter__dropdownPanel").hasClass("mp-filter__dropdownPanel--open")
        ) {
            $(".mp-filter__dropdownPanel").removeClass(
                "mp-filter__dropdownPanel--open"
            );
        }
    });

    let popupsArray = document.getElementsByClassName("wkPopup");
    let openPopup = function (element, popup, popupClass) {
        $(element).on("click", function () {
            $(popup).toggleClass(popupClass);
        });
    };
    let closeAllPopups = function (popup) {
        $.each(popupsArray, function (index, el) {
            $(el).fadeOut();
        });
    };
    openPopup(".wkSearch", ".searchPopup", "open-search-pop-up");
    openPopup(".wkAccount", ".accountPopup", "open-account-pop-up");

    // let openQuantityPopup = function () {
    //
    //     $(".quantityPopup").fadeIn(10);
    // };
    let closeQuantityPopup = function () {
        $(".quantityPopup").fadeOut(10);
    };

    // Change banner background image position on mousemove
    const moveBackground = function (selector) {
        const wkBanner = document.querySelector(selector);

        wkBanner.addEventListener("mousemove", e => {
            wkBanner.style.backgroundPositionX = -e.offsetX + "px";
            wkBanner.style.backgroundPositionY = -e.offsetY + "px";
        });
    };
    // moveBackground(".wkBanner");

    // Change variation
    // $(".singleProduct__quantity").text($(this)
    //     .parents(".singleProduct__relatedItem")
    //     .find(".ss-store__variation--selected").data("price"));
    // console.log($(".singleProduct__quantity").parents(".singleProduct__relatedItem")
    //     .find(".ss-store__variation--selected").data("price"));

    // $(".quantityPopup__cost").text(
    //     $(".ss-store__variation--selected").data("price")
    // );

    $(".quantityPopup__costSummary").text(
        $(".ss-store__variation--selected")
            .closest(".singleProduct__relatedItem")
            .find(".quantityPopup__incDec + input")
            .val() * $(".ss-store__variation--selected").data("price")
    );


    // let chooseSize = function() {
    //   let productSizes = $(".singleProduct__relatedItem").data("sizes");
    //   $("body").on("change", "#selectSize", function() {
    //     // $(".singleProduct__relatedItem").data(
    //     //   "price",
    //     //   productSizes.$(this).val()
    //     // );
    //     console.log(JSON.parse(productSizes));
    //     console.log($.parseHTML(productSizes));
    //     console.log($.parseHTML(productSizes)[0].data);
    //     console.log(typeof $.parseHTML(productSizes));
    //   });
    // };
    // chooseSize();
    // let calculatePrice = function() {
    //   // console.log("calculatePrice called");
    //   $(".singleProduct__relatedItem").each(function(index, el) {
    //     let productPrice = $(this).data("price");
    //     // console.log(productPrice);
    //     let productCount = $(this)
    //       .find("#quantityPopup__input")
    //       .val();
    //     // $(this)
    //     //   .find(".singleProduct__cost")
    //     //   .text(productPrice);
    //     console.log("This: ", $(this).find(".singleProduct__cost"), productPrice);
    //     $(this)
    //       .find(".quantityPopup__cost")
    //       .text(productPrice);
    //     $(this)
    //       .find(".singleProduct__quantity")
    //       .text(productCount);
    //     $(this)
    //       .find(".quantityPopup__costSummary")
    //       .text(productPrice * productCount);
    //   });
    // };
    // calculatePrice();
    // $("body").on("change", "#quantityPopup__input", function() {
    //   calculatePrice();
    // });
    // $("body").on("keyup", "#quantityPopup__input", function() {
    //   calculatePrice();
    // });

    // Close quantity popup on "X" buttom click

    // Close quantity popup on "OK" buttom click
    $(".quantityPopup__countSubmit")
        .off("click")
        .on("click", function () {
            let parent_element = $(this).parents(".singleProduct__relatedItem");
            parent_element.find(".quantityPopup").fadeOut(10);
        });







        $("body")
        // .off("click", ".singleProduct__basket")
        // .on("click", ".singleProduct__basket", function () {
        //     $(".basketPopup").addClass("basketPopup--open");
        // });

    // Mobile Menu
    $(".mobileMenu__switcher").on("click", function () {
        $(this).toggleClass("bars--open");
        $("body").toggleClass("scroll-lock body-before");
        $(this)
            .next()
            .toggleClass("menu--open");
        $(this)
            .find("svg")
            .toggleClass("mobileMenu__leaf--open");
    });
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
    // Stores filter accordion

        //$(".st-accordion").accordion({
        //    active: false,
        //    collapsible: true,
        //    heightStyle: "content"
        //});

    // Stores filter switcher
    $(".wkShop__filtersSwitcher").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("wkShop__filtersSwitcher--centered");
        $(".wkStore__aside").toggleClass("wkStore__aside--opened");
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

        optionsDropdownSwitcher();
        $(window).resize(function () {
            optionsDropdownSwitcher();
        });


    // Store panel

});
function StorePanel(){


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
}
