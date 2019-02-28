$(document).ready(function () {
    $('.contact-information-menu ul li a').click(function (e) {
        e.preventDefault();
        $('.contact-information-menu li a').removeClass("active");
        $(this).addClass("active");
    });

    let selectState = true;
    $('#selectState').change(function () {

if (selectState){
    $('.select-city').toggle();
    selectState=false
}

        $('#selectCity option').hide();
        $('#selectCity option[value="' + $(this).val() + '"]').show()
    });

let selectCity=true;
    $('#selectCity').change(function () {

        if (selectCity){
            $('.delivery-region-block').toggle();
            $('.address').toggle();
            selectCity=false
        }


    });

    $('#storeInformation .delivery-service input').on('change', function () {
        let value = $(this).val();
        if (value === "yes") {

            $(".delivery-all-block").addClass('delivery-all-block-active');
        }
        else if (value === "no") {
            $(".delivery-all-block").removeClass('delivery-all-block-active');
        }

    });


    $(".region-dropbtn").click(function () {

        $("#regionDropdown").toggle(300)
    });



    $("#selectState").select2({
        placeholder: "Select  State",
        allowClear: true
    });
    $("#selectCity").select2({
        placeholder: "Select  State",
        allowClear: true
    });
    $("#selectRegion").select2({
        placeholder: "Select  Regions",
        allowClear: true
    });


});

$(".img-download-block").change(function () {
    $(this).find(".insert-image").addClass("hide");
    $(this).find(".dowonloded-text").addClass("show");

});
// function fileDownloaded() {
//     let i = document.getElementsByClassName("insert-image")[0];
//     i.classList.add("hide");
//     let v = document.getElementsByClassName("dowonloded-text")[0];
//     v.classList.add("show");
// }