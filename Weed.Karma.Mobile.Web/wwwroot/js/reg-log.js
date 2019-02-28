
$(".reg-input-text").live('change', function() {

    if(".reg-input-text:not(:empty)") {
        alert('not empty');
    }

    else if(".reg-input-text:empty") {
        alert('empty');
    }
});
// if($(".reg-input-text").val().length>0){
//     $(".reg-input-block").addClass("active")
// }

