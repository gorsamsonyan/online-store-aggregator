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
