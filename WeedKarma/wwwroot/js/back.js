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

function GetBrandsByCityId(val, baseUrl) {
    clearBaseUrl = baseUrl;
    $.ajax({
        type: "POST",
        url: baseUrl + "/Brands/GetBrandsByRegion",
        data: 'cityCode=' + val,
        success: function (data) {
            if (data.length < 1) {

                $("#choseRegionPopUp").hide();
                $("#featuredBrands").empty();
            } else {
                $("#featuredBrands").empty();

                data.forEach(function (i) {
                    var num = Gen(1000000, 9999999);
                    //$("#featuredBrands").append('<div class="wkProduct"> <input type="checkbox" id="wkProduct_' +
                    //    num + '" class="wkProduct__more" aria-hidden="true"/> <div class="wkProduct__content"> <div class="wkProduct__front" style="background-image:
                    //    url(\'' + i.logoPath + '\')"> <div class="wkProduct__inner"> <h2>' + i.name + '</h2> <label for="wkProduct_' +
                    $("#featuredBrands").append('       <div class="wkProduct">\n' +
                        '                        <div class="wkProduct__content">\n' +
                        '\n' +
                        '                            <div  class="wkProduct__front">\n' +
                        '                                <div class="wkProduct__inner">\n' +
                        '                                   <a href="/Brands/Products/' + i.urlByName + '"> <h2>' + i.name + '</h2> </a></div>\n' +
                        '                                <a href="/Brands/Products/' + i.urlByName + '" class="wkProduct__image" style="background-image: url(' + i.logoPath + ')"></a>\n' +
                        '                                <div class="wkProduct__rating__block">\n' +
                        '                                    <img src="img/store/ratingLeaf-green.png" alt="Store Rating Image" class="st-store__ratingImg">\n' +
                        '                                    <span class="st-store__ratingIndex">+5</span>\n' +
                        '\n' +
                        '                                </div>\n' +
                        '                            </div>\n' +
                        '\n' +
                        '\n' +
                        '                        </div>\n' +
                        '                    </div>\n');
                });
            }
        }
    });
}

function GetBestOffers() {
    var regionId = localStorage.getItem("RegionId");
    var regionAbbreviation = localStorage.getItem("RegionAbbreviation");
    var callurl = clearBaseUrl + "//" + regionAbbreviation + "/Dispensaries/BestOffers/?id=" + regionId;
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
                            .append('<div class="wkProduct"> <input type="checkbox" id="wkProduct_' +
                                i.id +
                                '" class="wkProduct__more" aria-hidden="true" /> <div class="wkProduct__content"> <div class="wkProduct__front">' +

                                '<div class="wkProduct__inner">\n' +
                                '                                  <a href="/Store/Products/' + i.urlByName + '">  <h2>' + i.shopName + '</h2> </a>\n' +
                                '                                </div>\n' +
                                '                                <a href="/Store/Products/' + i.urlByName + '" class="wkProduct__image" style="background-image: url(' + i.logoPath + ')"></a>\n' +
                                '                                <div class="wkProduct__bottom-block fx fx-center-h fx-center-v">\n' +
                                '                                    <label for="wkProduct_' + i.id + '" class="wkProduct__button" aria-hidden="true">\n' +
                                '                                        Info\n' +
                                '                                    </label>\n' +
                                '                                </div>\n' +
                                '\n' +
                                '                            </div>' +
                                ' <div class="wkProduct__back"> <div class="wkProduct__inner">' +

                                ' <div class="st-store__infoBox fx fx-wrap">   <div class="st-store__infoItem st-store__infoItem1"><img src="/img/store/1.png" alt="" class="st-store__infoImg">\n' +
                                '        <h6 class="st-store__infoName">Working Hours</h6> <span class="st-store__infoData">09:00 - 21:30</span></div>\n' +
                                '    <div class="st-store__infoItem st-store__infoItem2"><img src="/img/store/2.png" alt="" class="st-store__infoImg">\n' +
                                '        <h6 class="st-store__infoName">Delivery Time</h6> <span class="st-store__infoData">30-60 min</span></div>\n' +
                                '    <div class="st-store__infoItem st-store__infoItem3"><img src="/img/store/3.png" alt="" class="st-store__infoImg">\n' +
                                '        <h6 class="st-store__infoName">Min. Order Amount</h6> <span class="st-store__infoData">100</span></div>\n' +
                                '    <div class="st-store__infoItem st-store__infoItem4"><img src="/img/store/4.png" alt="" class="st-store__infoImg">\n' +
                                '        <h6 class="st-store__infoName">Delivery Price</h6> <span class="st-store__infoData">20</span></div>\n' +
                                '    <hr class="st-store__line st-store__line--horizontal">\n' +
                                '    <hr class="st-store__line st-store__line--vertical">\n' +
                                '</div>' +
                                '</div> <label for="wkProduct_' +
                                i.id +
                                '" class="wkProduct__button wkProduct__return" aria-hidden="true"> <i class="fas fa-arrow-left"></i> </label> </div> </div> </div> </div>');
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
                '<img class="menu__item-img" src="/img/mobile_menu-icon/dispansery-icon.png"> <a href = "/Dispensaries" id = "topMenu1" class= "menu__link menu__link--active" > Dispensaries</a>');
        $('#item2').empty()
            .append(
                '<img class="menu__item-img" src="/img/mobile_menu-icon/deals-icon.png"> <a href = "/Brands" id = "topMenu1" class= "menu__link menu__link--active"> Brands</a>');
        $('#item3').empty()
            .append(
                '<img class="menu__item-img" src="/img/mobile_menu-icon/deals-icon.png"> <a href = "/Deals" id = "topMenu1" class= "menu__link menu__link--active" > Deals</a>');
        //$('#item4').empty()
        //    .append(
        //        '<img class="menu__item-img" src="/img/mobile_menu-icon/doctors-icon.png"> <a href = "/Doctors" id = "topMenu1" class= "menu__link menu__link--active" > Doctors</a>');
        $('#item5').empty()
            .append(
            '<img class="menu__item-img" src="/img/mobile_menu-icon/wiki-karma-icon.png">  <a href = "/WikiKarma" id = "topMenu1" class= "menu__link menu__link--active" > Wiki Karma</a>');
    } else {
        $('#item1').empty()
            .append(
                '<img class="menu__item-img" src="/img/mobile_menu-icon/dispansery-icon.png"> <a href = "/' + routing + '/Dispensaries" id = "topMenu1" class= "menu__link menu__link--active" > Dispensaries</a>');
        $('#item2').empty()
            .append(
                '<img class="menu__item-img" src="/img/mobile_menu-icon/deals-icon.png"> <a href = "/' + routing + '/Brands" id = "topMenu1" class= "menu__link menu__link--active"> Brands</a>');
        $('#item3').empty()
            .append(
                '<img class="menu__item-img" src="/img/mobile_menu-icon/deals-icon.png"> <a href = "/' + routing + '/Deals" id = "topMenu1" class= "menu__link menu__link--active" > Deals</a>');
        //$('#item4').empty()
        //    .append(
        //        '<img class="menu__item-img" src="/img/mobile_menu-icon/doctors-icon.png"> <a href = "/' + routing + '/Doctors" id = "topMenu1" class= "menu__link menu__link--active" > Doctors</a>');
        $('#item5').empty()
            .append(
            '<img class="menu__item-img" src="/img/mobile_menu-icon/wiki-karma-icon.png"> <a href = "/WikiKarma" id = "topMenu1" id = "topMenu1" class= "menu__link menu__link--active" > Wiki Karma</a>');

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
                $("#choseRegionPopUp").hide();
            } else {
                $("#storeArea").empty();
                data.forEach(function (i) {
                    $("#storeArea").append(
                        '<div class="st-store" ontouchstart="this.classList.toggle(\'hover\');"> <div class="st-store__wrapper"> <div class="st-store__front"> <div class="st-store__inner fx fx-between fx-center-v fx-column"> <a href="/Store/Products/'+ i.urlByName +'" class="st-store__name">' +
                        i.shopName +'</a>'+
                        '<a href="/Store/Products/'+ i.urlByName +'" class="st-store__logoWrapper" style="background-image: url(' + i.logoPath + ');"></a><a href="javascript:void(0)" class="st-store__info"> <i class="fa fa-info-circle st-store__infoIcon" aria-hidden="true"></i> </a> <div class="fx fx-between fx-center-v st-store__bottom"> <div class="st-store__rating"> <img src="/img/store/ratingLeaf-green.png" alt="Store Rating Image" class="st-store__ratingImg"> <span class="st-store__ratingIndex">+1</span> </div><a href="/Store/Products/' +
                        i.urlByName +
                        '" class="st-store__permalink"> <i class="fa fa-sign-in st-store__permalinkIcon" aria-hidden="true"></i> </a> </div></div></div><div class="st-store__back"> <div class="st-store__inner"> <div class="st-store__infoBox fx fx-wrap"> <div class="st-store__infoItem st-store__infoItem1"> <img src="/img/store/1.png" alt="" class="st-store__infoImg"> <h6 class="st-store__infoName">Working Hours</h6> <span class="st-store__infoData">' +
                        i.workingHoursFrom +
                        ' - ' +
                        i.workingHoursTo +
                        '</span> </div><div class="st-store__infoItem st-store__infoItem2"> <img src="/img/store/2.png" alt="" class="st-store__infoImg"> <h6 class="st-store__infoName">Delivery Time</h6> <span class="st-store__infoData">30-60 min</span> </div><div class="st-store__infoItem st-store__infoItem3"> <img src="/img/store/3.png" alt="" class="st-store__infoImg"> <h6 class="st-store__infoName">Min. Order Amount</h6> <span class="st-store__infoData">' +
                        i.deliveryTime.minOrderDelivery +
                        '</span> </div><div class="st-store__infoItem st-store__infoItem4"> <img src="/img/store/4.png" alt="" class="st-store__infoImg"> <h6 class="st-store__infoName">Delivery Price</h6> <span class="st-store__infoData">' +
                        i.deliveryTime.deliveryPrice +
                        '</span> </div><hr class="st-store__line st-store__line--horizontal"> <hr class="st-store__line st-store__line--vertical"> </div><a href="javascript:void(0)" class="st-store__backBtn"> <i class="fa fa-arrow-left st-store__backBtnIcon" aria-hidden="true"></i> </a> </div></div></div></div>');

                });
                StorePanel();
            }
        }
    });
}
function Gen(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function GetStoresByRegionForMap(val, baseUrl) {

    $.ajax({
        type: "POST",
        url: baseUrl + "/Dispensaries/GetStoresByRegionForMap",
        data: 'cityCode=' + val,
        success: function (data) {
            if (data.length < 1) {

                $("#choseRegionPopUp").hide();
                $("#mpLeftShopList").empty();
            } else {
                $("#mpLeftShopList").empty();
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
                        '<span class="st-store__ratingIndex">+5</span>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '<a href="#" class="mp-left-block-shop-view-map-button mp-aside__viewMap">View Map</a> </li>'
                    );


                });
            }
            mapping();
        }
    });
}