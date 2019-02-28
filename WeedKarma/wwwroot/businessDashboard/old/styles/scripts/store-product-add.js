$(".add-product-button,.product-item-edit").on( "click",  function() {
    $("#addProductForm").toggle(200);
});

$(".add-size-button,.product-item-edit").on( "click",  function() {
    $(".size-price-add-block").toggle(200);
})