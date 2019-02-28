var clearBaseUrl;
//var locations=[];
function getState(val, baseUrl) {
    clearBaseUrl = baseUrl;
    $.ajax({
        type: "POST",
        url: baseUrl + "/Region/GetStates",
        data: 'id=' + val,
        success: function (data) {
            data.forEach(function (i) {
                if (i.id == localStorage.selectState) {
                    $("#selectState").append("<option  selected value=" + i.id + ">" + i.regionName + "</option>");
                }
                else {
                    $("#selectState").append("<option  value=" + i.id + ">" + i.regionName + "</option>");
                }

            });

        }

    });
    $.ajax({
        type: "POST",
        url: clearBaseUrl + "/Region/GetCities",
        data: 'id=' + parseInt(localStorage.selectState),
        success: function (data) {
            $("#selectCity").empty()
                .append(" <option hidden disabled selected>City</option>");
            data.forEach(function (i) {
                if (i.regionAbbreviation == localStorage.RegionAbbreviation) {
                    $("#selectCity").append("<option selected value='" + i.regionAbbreviation + "'  data-city-name='" + i.regionName + "' data-city-id='" + i.id + "'>" + i.regionName + "</option>");
                }
                else {
                    $("#selectCity").append("<option value='" + i.regionAbbreviation + "'  data-city-name='" + i.regionName + "' data-city-id='" + i.id + "'>" + i.regionName + "</option>");

                }
            });

        }
    });
}
$('#selectState').change(function () {
    $.ajax({
        type: "POST",
        url: clearBaseUrl + "/Region/GetCities",
        data: 'id=' + $('#selectState').val(),
        success: function (data) {
            $("#selectCity").empty()
                .append(" <option hidden disabled selected>City</option>");
            data.forEach(function (i) {

                $("#selectCity").append("<option value='" + i.regionAbbreviation + "'  data-city-name='" + i.regionName + "' data-city-id='" + i.id + "'>" + i.regionName + "</option>");
            });

        }
    });
});

function GetBestOffers() {
    var regionId = localStorage.getItem("RegionId");
    var regionAbbreviation = localStorage.getItem("RegionAbbreviation");
    var callurl = clearBaseUrl + "/" + regionAbbreviation + "/Dispensaries/BestOffers/?id=" + regionId;
    if (regionId === null || regionAbbreviation === null) {
        $("#offersSection").hide();
        $("#noLocation").show();
    } else {
        $.ajax({
            type: "GET",
            url: callurl,
            success: function (data) {
                if (data.length < 1) {
                    $("#offersSection").hide();
                    $("#noLocation").show();
                } else {
                    $("#bestOfferDispensaries").empty();
                    data.forEach(function (i) {
                        $("#offersSection").show();
                        $("#noLocation").hide();
                        $("#bestOfferDispensaries")
                            .append('<div class=" row align-items-center store-item"><div class="col-lg-3"> <div class="store-logo"><img src="' + i.logoPath + '" alt=""></div></div><div class="col-lg-7 p-0"> <ul class="store-description"> <li class="store-description-item"> <div class="store-name">' + i.shopName + '</div><div class="store-reyting"><img src="img/store-img/reyting.png" alt=""></div></li><li class="store-description-item"> <div class="">Working Hours</div><div class="store-description-item-value">' + i.workingHoursFrom + '-' + i.workingHoursTo + '</div></li><li class="store-description-item"> <div class="">Delivery Time</div><div class="store-description-item-value">30-60 MIN</div></li><li class="store-description-item"> <div class="">Delivery Price</div><div class="store-description-item-value">' + i.deliveryTime.deliveryPrice + ' USD</div></li></ul> </div><div class="col-lg-2 p-5"> <a class="store-info" href="/Store/Products/' + i.id +'"><i class="far fa-arrow-alt-circle-right"></i> </a></div></div>');
                    });
                }
            }
        });
    }
}
function initRouting() {
    var routing = localStorage['RegionAbbreviation'];
    if (routing === null) {
        $('#item1').empty()
            .append(
            '<a href="/Dispensaries" class="footer-menu-item-link">' +
            '<img src = "/img/footer-menu/dispansery.png" alt = "Dispensary" > Dispensary' +
            '</a>');
        $('#item2').empty()
            .append('<a href="/Deals" class="footer-menu-item-link">' +
                '<img src = "/img/footer-menu/deals.png" alt = "Dispensary" > Hot Deals</a >');
        $('#item3').empty()
            .append('<a href="/Brands" class="footer-menu-item-link">' +
                '<img src = "/img/footer-menu/profile.png" alt = "Dispensary" > Brands</a >');
    } else {
        $('#item1').empty()
            .append(
            '<a href="/' + routing +'/Dispensaries" class="footer-menu-item-link">' +
                '<img src = "/img/footer-menu/dispansery.png" alt = "Dispensary" > Dispensary' +
                '</a>');
        $('#item2').empty()
            .append('<a href="/' + routing +'/Deals" class="footer-menu-item-link">' +
                '<img src = "/img/footer-menu/deals.png" alt = "Dispensary" > Hot Deals</a >');
        $('#item3').empty()
            .append('<a href="/' + routing +'/Brands" class="footer-menu-item-link">' +
                '<img src = "/img/footer-menu/profile.png" alt = "Dispensary" > Brands</a >');
        
    }
}

function initLeftMenuRouting() {
    var routing = localStorage['RegionAbbreviation'];
    if (routing === null) {
        $('#LeftMenuItem1').empty()
            .append(
            '<a href="/Dispensaries" class="menu-item-link display-flex align-items-center">' +
            '<img src = "/img/menu-item-icon/dispanseri.png" alt = "" > Dispensary</a >');
        $('#LeftMenuItem2').empty()
            .append('<a href="/Deals" class="menu-item-link display-flex align-items-center">' +
                '<img src = "/img/menu-item-icon/doctors.png" alt = "" > Deals</a>');
        $('#LeftMenuItem3').empty()
            .append(' <a href="/Brands" class="menu-item-link display-flex align-items-center">' +
                '<img src = "/img/menu-item-icon/wiki-karma.png" alt = "" > Brands</a>');
    } else {
        $('#LeftMenuItem1').empty()
            .append('<a href="/' + routing +'/Dispensaries" class="menu-item-link display-flex align-items-center">' +
                '<img src = "/img/menu-item-icon/dispanseri.png" alt = "" > Dispensary</a >');
        $('#LeftMenuItem2').empty()
            .append('<a href="/' + routing +'/Deals" class="menu-item-link display-flex align-items-center">' +
                '<img src = "/img/menu-item-icon/doctors.png" alt = "" > Deals</a>');
        $('#LeftMenuItem3').empty()
            .append('<a href="/' + routing +'/Brands" class="menu-item-link display-flex align-items-center">' +
                '<img src = "/img/menu-item-icon/wiki-karma.png" alt = "" > Brands</a>');

    }
}

function GetStoresByCityId(val, baseUrl) {
    clearBaseUrl = baseUrl;
    $.ajax({
        type: "POST",
        url: baseUrl + "/Dispensaries/GetStoresByRegion",
        data: 'cityCode=' + val,
        success: function (data) {
            if (data.length < 1) {
                $("#storeArea").hide();
                $("#noStoreArea").show();
                $("#choseRegionPopUp").hide();
                $("#storeArea").empty();
            } else {
                $("#storeArea").empty();
                $("#storeArea").show();
                $("#noStoreArea").hide();
                data.forEach(function (i) {
                    var deliveryPirce = i.deliveryTime.deliveryPrice <= 0
                        ? "Free"
                        : i.deliveryTime.deliveryPrice + " USD";
                    $("#storeArea").append('<div class=" row align-items-center store-item"> ' +
                        '<div class="col-lg-3">' +
                        '<div class="store-logo">' +
                        '<img src="' +
                        i.logoPath +
                        '" alt="">' +
                        '</div></div><div class="col-lg-7 p-0">' +
                        '<ul class="store-description">' +
                        '<li class="store-description-item">' +
                        '<div class="store-name">' +
                        i.shopName +
                        '</div>' +
                        '<div class="store-reyting">' +
                        '<img src="/img/store-img/reyting.png" alt="">' +
                        '</div>' +
                        '</li>' +
                        '<li class="store-description-item">' +
                        '<div class="">Working Hours</div>' +
                        '<div class="store-description-item-value">' +
                        i.workingHoursFrom +
                        '-' +
                        i.workingHoursTo +
                        '</div>' +
                        '</li>' +
                        '<li class="store-description-item"> ' +
                        '<div class="">Delivery Time</div>' +
                        '<div class="store-description-item-value">30-60 MIN</div>' +
                        '</li>' +
                        '<li class="store-description-item"> ' +
                        '<div class="">Delivery Price</div>' +
                        '<div class="store-description-item-value">' + deliveryPirce+ '</div>' +
                        '</li>' +
                        '</ul> ' +
                        '</div>' +
                        '<div class="col-lg-2 p-5"> ' +
                        '<a href="/Store/Products/'+i.id+'" class="store-info"> ' +
                        '<i class="far fa-arrow-alt-circle-right"></i> </a> </div></div>');

                });
                StorePanel();
            }
        }
    });
}
function Gen(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function GetBrandsByCityId(val, baseUrl) {
    clearBaseUrl = baseUrl;
    $.ajax({
        type: "POST",
        url: baseUrl + "/Brands/GetBrandsByRegion",
        data: 'cityCode=' + val,
        success: function (data) {
            if (data.length < 1) {
               
                $("#choseRegionPopUp").hide();
                $("#brands-area").empty();
            } else {

                $("#brands-area").empty();
                data.forEach(function (i) {

                    $("#brands-area").append('<div class="brands-slider-item-block"> ' +
                        '<a href=/Brands/Products/"'+i.id+'" class="brands-slider-item">' +
                        ' <div class="brands-slider-item-name"> '+i.name+' </div>' +
                        '<div class="brands-slider-item-img" style="background-image: url(' + i.logoPath+')"> </div>' +
                        '<div class="brands-slider-item-rating fx fx-center-v"> ' +
                        '<img src="img/store/ratingLeaf-green.png" alt=" brandImage" class="brand-ratingImg"> ' +
                        '<span class="brand-ratingIndex">+5</span> </div></a> </div>');
                });
            }
        }
    });
}

function GetStoresByRegionForMap(val, baseUrl) {
    clearBaseUrl = baseUrl;
    $.ajax({
        type: "POST",
        url: baseUrl + "/Dispensaries/GetStoresByRegionForMap",
        data: 'cityCode=' + val,
        success: function (data) {
            if (data.length < 1) {
                $("#storeArea").hide();
                $("#noStoreArea").show();
                $("#choseRegionPopUp").hide();
                $("#mpLeftShopList").empty();
            } else {
                $("#mpLeftShopList").empty();
                $("#storeArea").show();
                $("#noStoreArea").hide();
                data.forEach(function (i) {
                    $("#mpLeftShopList").append(
                        '<li class="mp-left-block-shop-item mp-aside__listItem fx fx-center-v" data-storeid="' + i.id + '" data-latitude="' + i.latitude + '" data-longitude="' + i.longitude + '">' +
                        '<div class="mp-left-block-shop-image"> <img src="' + i.logoPath + '" alt=""> </div><div class="mp-left-block-shop-description"> <div class="shop-name">' + i.shopName + '</div>' +
                        '<div class="shop-state">Los Angeles</div>' +
                        '<div class="shop-working-time"> ' +
                        '<span class="text">Working Hours</span> ' +
                        '<span class="value">' + i.workingHoursFrom + '-' + i.workingHoursTo + '</span> ' +
                        '</div>' +
                        '<div class="shop-delivery-price">' +
                        '<span class="text">Delivery</span> ' +
                        '<span class="value">' + i.deliveryTime.deliveryPrice + '</span> ' +
                        '</div><div class="shop-rating"> ' +
                        '<div class="st-store__rating"> ' +
                        '<img src="/img/store/ratingLeaf-green.png" alt="Store Rating Image" class="st-store__ratingImg">' +
                        '<span class="st-store__ratingIndex">+1</span>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '<a href="#" class="mp-left-block-shop-view-map-button mp-aside__viewMap">View Map</a> </li>'
                    );


                });
            }
            // mapping();
        }
    });
}