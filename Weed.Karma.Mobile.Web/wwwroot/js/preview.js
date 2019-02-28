

$('.preview-slider').slick({
    dots: true,
    speed: 500,
    infinite: false,

});

$(".skip-button").click(function (e) {
    e.preventDefault();
    $('.preview-slider').slick('slickGoTo', 5);
    $('.preview-slider').slick.settings = "unslick";
    $('.preview-slider').slick.dots = false;
    // $('.preview-slider').slick({
    //     dots: false
    // });
    // $('.preview-slider').slick({
    //     settings: "unslick"
    // });

});
$('.your-element').on('afterChange', function (event, slick, currentSlide) {
    console.log(currentSlide);
});
// console.log($(".preview-slider"));
$(".submit-button").on("click", function () {
    $(".checking").toggle(300);
    setTimeout(function () { $("#previewForm").submit(); }, 1000);
    localStorage.setItem("tour", true);
    location.href = "/Account/Login";
    if ($("#selectCity").val() !== null && $("#selectState").val() !== null) {
        var selectCityVal = $("#selectCity").val();
        var selectCityName = $("#selectCity option:selected").data("city-name");
        var selectCityId = $("#selectCity option:selected").data("city-id");
        localStorage.setItem("RegionAbbreviation", selectCityVal);
        localStorage.setItem("RegionName", selectCityName);
        localStorage.setItem("RegionId", selectCityId);
      
    }
   
});


// $(document).ready(function() {
//     $("#selectState").select2();
//     $("#selectCity").select2();
// });

// $("#selectState").select2({
//     placeholder: "Select  State",
//     allowClear: true
// });
//
// $("#selectCity").select2({
//     placeholder: "Select City",
//     allowClear: true
// });