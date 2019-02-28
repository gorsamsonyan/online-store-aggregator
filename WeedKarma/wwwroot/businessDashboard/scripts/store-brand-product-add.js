$("#selectCategory").on("change", function () {
    if ($("#selectCategory option:selected").attr("data-product-size") == "True") {
        $(".product-size-g").hide();
        $(".product-size-each").show();
    }
    else {
        $(".product-size-g").show();
        $(".product-size-each").hide();
    }
});
$('#producMetaKey').tagsinput({
    maxTags: 20,
    tagClass: 'big'
});

$(".product-sizes-block-item .input-checkbox").on("click", function () {
    let parent_element = $(this).parents(".product-sizes-block-item");
    // console.log($(this).prop('checked', true));
    console.log("1");
    if ($(this).prop("checked") == true) {
        console.log("sdfsd");
        parent_element.find(".product-size-price").prop('disabled', false);
        parent_element.find(".product-size-price").prop('required', true)

    } else {
        parent_element.find(".product-size-price").prop('disabled', true);
        parent_element.find(".product-size-price").prop('required', false);
        parent_element.find(".product-size-price").val(null);


    }



});