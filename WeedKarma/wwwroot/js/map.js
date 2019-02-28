let gmarkers = [];
////let locations = [];
//function addmapMarker(obj) {
//    locations.push(obj);
//};
function initMap() {
    // Options
    let options = {
        zoom: 10,
        center: new google.maps.LatLng(34.027621, -118.2998421),
        mapTypeId: "roadmap",
        mapTypeControl: false,
        streetViewControl: false,
        gestureHandling: 'greedy'
    };
    let locations = [];
    (function GetStoresByRegionForMapMarker(val, baseUrl) {
            clearBaseUrl = baseUrl;
            $.ajax({
                type: "POST",
                url: baseUrl + "/Dispensaries/GetStoresByRegionForMap",
                data: 'cityCode=' + val,
                success: function (data) {
                    if (data.length < 1) {

                        $("#choseRegionPopUp").show();

                    } else {


                        data.forEach(function (i) {
                            locations.push(
                                {
                                    shopeId: i.id,
                                    latitude: i.latitude,
                                    longitude: i.longitude,
                                    shopName: i.shopName,
                                    delivery: i.deliveryTime.minOrderDelivery,
                                    workingHoursFrom: i.workingHoursFrom,
                                    workingHoursTo: i.workingHoursTo,
                                    logoPath: i.logoPath,
                                    deliveryPrice: i.deliveryTime.deliveryPrice
                                }
                            );
                            marker = new google.maps.Marker({
                                position: new google.maps.LatLng(i.latitude, i.longitude),
                                animation: google.maps.Animation.DROP,
                                map: map,
                                icon: iconBase
                            });
                            gmarkers.push(marker);
                            let infoWindowContainer = "style='display: flex;' class='asasa'";
                            // let
                            google.maps.event.addListener(marker, "click",
                                (function (marker, i) {
                                    return function () {

                                        infowindow.setContent(`
              <div ${infoWindowContainer}>
                <div class="mp-pin__logoWrapper">
                  <img
                    src="${i.logoPath}" width="50" height="50"
                    class="mp-pin__storeLogo"
                    alt="${i.shopName}"
                    title="${i.shopName}"
                  />
                </div>
                <div class="mp-pin__storeDetails">
                  <div class="">
                    <a href="/Store/Products/${
                                            i.id
                                            }" class="mp-pin__storeName">${
                                            i.shopName
                                            }</a>
                  </div>
                  <div class="mp-pin__workingHoursWrapper">
                    <div class="mp-pin__workingHours">${i.workingHoursFrom} - ${
                                            i.workingHoursTo
                                            }</div>
                  </div>
                  <div class="mp-pin__delivery">
                    Delivery
                    <span class="mp-aside__deliveryPrice">${
                                            i.deliveryTime.deliveryPrice
                                            }</span>
                  </div>
                </div>
              </div>
            `
                                        );
                                        infowindow.open(map, marker);
                                    };
                                })(marker, i)
                            );

                        });

                        mapping();
                    }

                }
            });
        }
    )(localStorage.getItem("RegionAbbreviation"), localStorage.getItem("baseUrl"));


    let iconBase = "/img/icons/wkpin.png";

    map = new google.maps.Map(document.getElementById("wkMap"), options);

    // Info Window
    let infowindow = new google.maps.InfoWindow();
    //   Marker


    google.maps.event.addListener(map, 'click', function () {
        infowindow.close();
    });

    let marker, i;
}

function mapping() {

    $(".mp-aside__viewMap").on("click", function () {
        $(".mp-aside").removeClass("mp-aside--open");
        $(".mp-aside__toggleBtn").removeClass("mp-aside__toggleBtn--open");
        setTimeout(() => {
            map.panTo({
                lat: $(this)
                    .closest(".mp-aside__listItem")
                    .data("latitude"),
                lng: $(this)
                    .closest(".mp-aside__listItem")
                    .data("longitude")
            });
        }, 200);

        let id = $(this).parents(".mp-left-block-shop-item").attr("data-storeid");
       
        google.maps.event.trigger(gmarkers[id - 1], 'click');
    });
}

$(".mp-aside__toggleBtn").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("mp-aside__toggleBtn--open");
    $(".mp-aside").toggleClass("mp-aside--open");

});