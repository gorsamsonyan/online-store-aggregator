// $(".add-product-button,.product-item-edit").on( "click",  function() {
//     $("#addProductForm").toggle(200);
// });
//
// $(".add-size-button,.product-item-edit").on( "click",  function() {
//     $(".size-price-add-block").toggle(200);
// });
$('#producMetaKey').tagsinput({
    maxTags: 20,
    tagClass: 'big'
});


document.querySelector(".input-file").addEventListener("change", function () {
    if (this.files[0]) {
        let fr = new FileReader();
        console.log(this.files[0].mozFullPath);
        fr.addEventListener("load", function () {
            document.querySelector(".downloaded-product-image").style.backgroundImage = "url(" + fr.result + ")";
            document.querySelector(".downloaded-product-image").style.height = "90px";
            document.getElementById("Image").value = fr.result;
        }, false);
        fr.readAsDataURL(this.files[0]);
    }

});

// $(".input-file").on("change", function (e) {
//     if ($(this).get(0).files[0]) {
//         let fr = new FileReader();
//
//         fr.on("load", function (e) {
//             $(".downloaded-product-image").css({"backgroundImage": "url(" + fr.result +")", "heigt": "90px"});
//         }, false);
//
//         fr.readAsDataURL(this.files[0]);
//     }
// });

$(".img-download-block").change(function () {

    $(this).find(".insert-image,.img-download-button-icon").addClass("hide");
    $(this).find(".dowonloded-text").addClass("show");

});


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