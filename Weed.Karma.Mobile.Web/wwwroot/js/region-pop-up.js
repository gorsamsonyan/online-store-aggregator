$("#choseRegionPopUP-button").on('click', function () {
    $("#choseRegionPopUp").toggle(300)

});

$(".choseRegionPopUp-close").on('click', function () {
    $("#choseRegionPopUp").toggle(300)

});
$('#selectState').change(function(){
    // // window.location.hash=$('#selectState').val();
    //  console.log($('#selectState').val());
    localStorage.selectState=$("#selectState option:selected").val()
    // console.log($("#selectState option:selected").val());
    // $('#selectCity option').hide();
    // $('#selectCity option[value="'+$(this).val()+'"]').show()
});


$(document).ready(function() {
    $("#selectState").select2();
    $("#selectCity").select2();
});

$("#selectState").select2({
    placeholder: "Select  State",
    allowClear: true
});

$("#selectCity").select2({
    placeholder: "Select City",
    allowClear: true
});

// $(function () {
//     console.log("barev");
//     if (localStorage.selectState) {
//         let id=localStorage.selectState;
//         $('#selectState option[value="4"]').attr("selected", "selected");
//         console.log("assa");
//     }
// });