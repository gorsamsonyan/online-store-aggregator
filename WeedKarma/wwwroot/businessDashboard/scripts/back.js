var clearBaseUrl;
var url
function getState(val, baseUrl) {
    clearBaseUrl = baseUrl;
    $.ajax({
        type: "POST",
        url: baseUrl + "/Region/GetStates",
        data: 'id=' + val,
        success: function (data) {

            data.forEach(function (i) {

                $("#selectState")
                    .append("<option value=" + i.id + ">" + i.regionName + "</option>");
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
                $("#selectCity")
                    .append("<option value='" + i.id + "'  data-city-name='" + i.regionName + "' data-city-id='" + i.id + "'>" + i.regionName + "</option>");

            });
        }
    });
});

$('#selectCity').change(function () {
    $.ajax({
        type: "POST",

        url: clearBaseUrl + "/Region/GetCities",
        data: 'id=' + $('#selectCity').val(),
        success: function (data) {
            $("#selectRegion").empty()
                .append(" <option hidden disabled >Choose Region</option>");

            data.forEach(function (i) {
                $("#selectRegion")
                    .append("<option value='" + i.id + "'  data-city-name='" + i.regionName + "' data-city-id='" + i.id + "'>" + i.regionName + "</option>");

            });
        }
    });
});

function GetBestOffers() {

    var regionId = localStorage.getItem("RegionId");
    var regionAbbreviation = localStorage.getItem("RegionAbbreviation");
    var callurl = clearBaseUrl + "//" + regionAbbreviation + "/Dispensaries/BestOffers/?id=" + regionId;
    if (regionId === null || regionAbbreviation === null) {
        $("#choseRegionPopUp").toggle(30);

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
                                '" class="wkProduct__more" aria-hidden="true" /> <div class="wkProduct__content"> <div class="wkProduct__front" style="background-image: url(' +
                                i.imageSrc +
                                ')"> <div class="wkProduct__inner"> <h2>' +
                                i.shopName +
                                '</h2> <label for="wkProduct_' +
                                i.id +
                                '" class="wkProduct__button" aria-hidden="true"> Details </label> </div> </div> <div class="wkProduct__back"> <div class="wkProduct__inner"> <div class="wkProduct__info"> <!-- <span>5</span> --> <div class="wkProduct__icon"> <img src="/img/product/2.png" alt=""> <p>THS%</p> </div> </div> <div class="wkProduct__info"> <!-- <span>4</span> --> <div class="wkProduct__icon"> <img src="/img/product/3.png" alt=""> <p>Type</p> </div> </div> <div class="wkProduct__info"> <!-- <span>3</span> --> <div class="wkProduct__icon"> <img src="/img/product/4.png" alt=""> <p>SIZE/GRAM</p> </div> </div> <div class="wkProduct__info"> <!-- <span>1</span> --> <div class="wkProduct__icon"> <img src="/img/product/5.png" alt=""> <p>VERIFY</p> </div> </div> <!-- <hr class="wProduct__separator" /> --> <div class="wkProduct__description"> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, accusamus. </p> <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates earum nostrum ipsam ullam, reiciendis nam consectetur? Doloribus voluptate architecto possimus perferendis tenetur nemo amet temporibus, enim soluta nam, debitis. </p> </div> <div class="wkProduct__price"><img src="/img/product/1.png" alt="">' +
                                i.deliveryPrice +
                                '</div> <label for="wkProduct_' +
                                i.id +
                                '" class="wkProduct__button wkProduct__return" aria-hidden="true"> <i class="fas fa-arrow-left"></i> </label> </div> </div> </div> </div>');
                    });
                }
            }
        });

    }
}
function getFullPath(baseUrl) {
    url = baseUrl;
}
$('#selectBrand').change(function () {

    console.log(url);
    $.ajax({
        type: "POST",
        url: url + "/Brands/BrandProductsByBrandId",
        data: 'id=' + $('#selectBrand').val(),
        success: function (data) {
            $("#selectProduct").empty()
                .append(" <option hidden disabled SELECTED >Choose Product</option>");

            data.forEach(function (i) {
                $("#selectProduct")
                    .append("<option value='" + i.id + "'  data-city-name='" + i.name + "' data-city-id='" + i.id + "'>" + i.name + "</option>");

            });
        }
    });
});
$('#selectBrand').change(function () {
    $('#BrandId').val($('#selectBrand option:selected').val());
});
$('#selectProduct').change(function () {
    $('#BrandProductId').val($('#selectProduct option:selected').val());
});
