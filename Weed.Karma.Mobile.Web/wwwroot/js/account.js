$(".usd1hide").on("click",function () {
    $(".usd1tip").css("display","none")
});

$(function() {
    $( "#dateOfByrd" ).datepicker({
        dateFormat : 'mm/dd/yy',
        changeMonth : true,
        changeYear : true,
        yearRange: '-100y:-21y',
        maxDate: '-21y'
    });
});

// $( function() {
// //     $( "" ).datepicker();
// // } );