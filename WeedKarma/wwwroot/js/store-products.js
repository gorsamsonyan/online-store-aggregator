if ($(".singleProduct__relatedItem").data("iseach") === "each"){
    $("").find( $(".ss-store__variationsContainer").toggle())


}

$(".quantityPopup__incDec")
    .off("click")
    .on("click", function () {
        let parent_element = $(this).parents(".singleProduct__relatedItem");
        let quantity = parseInt(parent_element.find(".quantityPopup__input").val());
        console.log(quantity);
        // let singleProductQuantity = parent_element.find(".quantityPopup__cost--usd").text();
        // let quantityCount = parseInt(quantity);
        if ($(this).hasClass("quantityPopup__plus")) {
            quantity += 1;
        }
        if ($(this).hasClass("quantityPopup__minus")) {
            if (quantity == 1) {
                return;
            } else {
                quantity -= 1;
            }
        }
        parent_element.find(".quantityPopup__input").val(quantity);
        // calculatePrice();
    });

$(".ss-store__variation").on("click", function () {
    let parent_element = $(this).parents(".singleProduct__relatedItem");
    let selectedVariationPrice = $(this).data("price");
    parent_element.find(".ss-store__variation").removeClass("ss-store__variation--selected");
    $(this).addClass("ss-store__variation--selected");
    parent_element.find(".singleProduct__cost--usd").text(selectedVariationPrice)

    // $(this)
    //     .closest(".singleProduct__relatedItem")
    //     .find(".quantityPopup__cost")
    //     .text($(this).data("price"));
});

// $(".quantityPopup__close")
//     .off("click")
//     .on("click", function () {
//         closeQuantityPopup();
//     });
// // Open quantity popup
// $(".singleProduct__quantity")
//     .off("click")
//     .on("click", function () {
//         let parent_element = $(this).parents(".singleProduct__relatedItem");
//         let selected_price = parent_element.find(".ss-store__variation--selected").data("price");
//         console.log(selected_price);
//         parent_element.find(".quantityPopup__cost").text(selected_price);
//         parent_element.find(".quantityPopup").fadeIn(10);
//     });



$(".quantityPopup__incDec + input").on("change, keyup", function () {
    let quantity = $(this).val();
    let parent_element = $(this).parents(".singleProduct__relatedItem");
    let singleProductQuantity = parent_element.find(".quantityPopup__cost--usd").text();
    parent_element.find(".singleProduct__quantity").text(quantity);
    let Product_summary = quantity * singleProductQuantity;
    // Summary
    parent_element.find(".quantityPopup__costSummary--usd").text(Product_summary);
    parent_element.find(".singleProduct__cost--usd").text(Product_summary)
    // singleProductQuantity.text(
    //     quantity *
    //     $(this)
    //         .closest(".ss-store__details")
    //         .find(".ss-store__variation--selected")
    //         .data("price")
    // );
});

