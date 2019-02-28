var cart = [];
$(function () {
    if (localStorage.cart) {
        // load cart data from local storage
        cart = JSON.parse(localStorage.cart);
        showCart();  // display cart that is loaded into cart array
    }
});

function addToCart(productitem) {
    let parentElement = productitem.parents(".product-item");
    let price = parseInt($.trim(parentElement.find(".product-price-coast").attr('data-price-coast')));
    let size = parentElement.find(".size-item input:checked").attr("data-size");
    let name = $.trim(parentElement.find(".product-item-name").text());
    let storeId = $.trim(parentElement.attr("data-store-id"));
    let productId = $.trim(parentElement.attr("data-product-id"));
    let totalPrice = $.trim(parentElement.find(".price-all").text());


    // update Qty if product is already present
    for (let i in cart) {
        if (cart[i].StoreProductId == productId && cart[i].Size == size) {
            // cart[i].Qty = qty;  // replace existing Qty
            //
            //
            ++cart[i].Quantity;
            saveCart();
            showCart();
            return;
        }

    }

    let item = {
        ProductName: name,
        UnitPrice: price,
        Size: size,
        StoreProductId: productId,
        StoreId: storeId,
        Quantity: 1,
        TotalPrice: price
    };

    cart.push(item);
    saveCart();
    showCart();
}

function dealAddToCart(productitem) {
    let parentElement = productitem.parents(".deal-product-item");
    let price = parseInt(productitem.attr('data-deal-item-price'));
    let storeId = $.trim(parentElement.attr("data-store-id"));
    let productId = $.trim(parentElement.attr("data-product-id"));
    let name = $.trim(parentElement.find(".deal-product-name").text());
    let size="Deal";


    // update Qty if product is already present
    for (let i in cart) {
        if (cart[i].StoreProductId == productId) {
            // cart[i].Qty = qty;  // replace existing Qty
            //
            //
            ++cart[i].Quantity;
            saveCart();
            showCart();
            return;
        }

    }

    let item = {
        ProductName: name,
        UnitPrice: price,
        Size: size,
        StoreProductId: productId,
        StoreId: storeId,
        Quantity: 1,
        TotalPrice: price
    };

    cart.push(item);
    saveCart();
    showCart();
}
function saveCart() {
    if (window.localStorage) {
        localStorage.cart = JSON.stringify(cart);
    }
}
function showCart() {
    $(".user_basket__list").empty();

    for (let i in cart) {
        let item = cart[i];

        // console.log(item.Product);
        let row = "<li data-product-id=\"" + item.StoreProductId + "\">\n" +
            "<a href=\"#\" class=\"close\">\n" +
            "<i class=\"fas fa-times\"></i>\n" +
            "</a>\n" +
            "<div class=\"product_info\">\n" + item.ProductName + "  " + item.Size +

            "</div>\n" +
            "<div class=\"value\">\n" +
            "<a href=\"javascript:void(0);\" class=\"less\"><i class=\"fas fa-minus\"></i></a>\n" +
            "<input class=\"shop-q\" type=\"number\" value=\"" + item.Quantity + "\" maxlength=\"2\" min=\"0\" name=\"\">\n" +
            "<a href=\"javascript:void(0);\" class=\"more\"> <i class=\"fas fa-plus\"></i></a>\n" +
            "\n" +
            "</div>\n" +
            "<div class=\"price\">\n" +
            "<div class=\"price-one\" data-price-one=\"" + item.UnitPrice + "\">" + item.UnitPrice + " <span\n" +
            "class=\"ptrouble\">$</span>\n" +
            "</div>\n" +
            "<div class=\"price-all\">" + parseInt(item.UnitPrice) * item.Quantity + " <span class=\"ptrouble\">$</span></div>\n" +
            "</div>\n" +
            "</li>";


        $(".user_basket__list").append(row);

    }
    localf();

    deleteCartItem();
    totalSum();
}

function totalSum() {
    let totalSum = 0;
    if (localStorage.cart) {
        for (let i in cart) {
            totalSum += parseInt(cart[i].UnitPrice) * cart[i].Quantity;

        }
    }
    $(".basket_sum").text(totalSum);
    $(".basket_total").text(totalSum + "$");
    $("#BasketTotalPrice").attr("data-baskettotalprice", totalSum);

}
$("#clear_cart").on("click", function () {

    cart = [];
    saveCart();
    showCart();
});
function deleteCartItem() {
    $(".close").on("click", function (e) {
        // console.log("cxvxcv")
        e.preventDefault();
        let parentElement = $(this).parents("li");
        let id = parentElement.attr("data-product-id");
        let array_index = cart.findIndex(x => x.StoreProductId == id);
        cart.splice(array_index, 1);
        saveCart();
        totalSum();
        parentElement.remove();



    });

}


function unique() {
    var result = [];
    for (let i in cart) {
        let oo= parseInt(cart[i].StoreId);
        if ($.inArray(oo, result) == -1) result.push(oo);
    }
    
    return result;
};

$("#toOrderSubmit").on("click", function () {
    $("#CartData").val(localStorage.getItem("cart"));
    $("#CartTotalPrice").val($("#BasketTotalPrice").attr("data-baskettotalprice"));


    let jj = unique();
    j1 = JSON.stringify(jj);
    console.log(jj);

    localStorage.count=j1;


     var updaterConnection;
    openConnection();

    function openConnection() {
        $("#msg").html("Preparing...");
        updaterConnection = new signalR.HubConnection("/orderHub");
        updaterConnection
            .start()
            .then(() => {
                var count = JSON.parse(localStorage.count);
                for (var i = 0; i < count.length; i++) {
                    updaterConnection.invoke("NewOrders", parseInt(cart[i]), notificationCount);
                    updaterConnection.invoke("Order", parseInt(cart[i]));
                }


            })
            .catch(() => {
                alert("Error while establishing connection");
            });
    }


});

