$(".offersSection .change-region").on("click",function () {
    $("#changeRegionMobilePopup").toggle(300)
});
$(".changeRegionMobile-header .back-button").on("click",function () {
    $("#changeRegionMobilePopup").toggle(300)
});
$(document).ready(function() {
    $("#changeRegionMobile-header-search").on("keyup", function () {
        let value = $(this).val().toLowerCase();
        console.log(value);
        $(".changeRegionMobile-body .city-list .city-list-item").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });

        // let my = setTimeout(function(){
        //     // console.log("fgh");
        // },1000);
        // clearTimeout(my);
    });
    $(".changeRegionMobile-body .city-list .city-list-item").on("click",function () {
        $("#changeRegionMobilePopup").toggle();
        var cityabbr = $(this).attr("data-abbreviation");
        var cityName = $(this).attr("data-city-name");
        var cityId = $(this).attr("data-city-id");
        localStorage.setItem("RegionAbbreviation", cityabbr);
        localStorage.setItem("RegionName", cityName);
        localStorage.setItem("RegionId", cityId);
        $("#choseRegionPopUp").hide();
        $("#bestOffer").html(localStorage.getItem("RegionName"));
        GetBestOffers();
        initRouting();
        GetStoresByCityId(localStorage.getItem("RegionAbbreviation"), '@baseUrl');
        GetBrandsByCityId(localStorage.getItem("RegionAbbreviation"), '@baseUrl');
    });
});