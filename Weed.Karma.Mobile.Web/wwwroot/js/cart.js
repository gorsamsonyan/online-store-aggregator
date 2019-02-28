$(document).ready(function () {
        $(".tell-number").mask("(000) 000-0000");
    });
    $(".wkBag ").click(function (e) {
        e.preventDefault();
        // if (localStorage.cart.length > 5) {
            $("body").toggleClass("scroll-lock");
            $("#popup").toggle(500);
        // }
        // else {
        //
        //     $(".bag-empti-button").toggle(1000);
        //     setTimeout(() => {
        //         $(".bag-empti-button").toggle(1000)
        //     }, 3000)
        // }

    });
    $(".checkout_close").click(function (e) {
        e.preventDefault();
        $("body").toggleClass("scroll-lock");
        $("#popup").toggle(500);
    });


    function localf() {


        $(".more").click(function (e) {
            e.preventDefault();

            count = parseInt(
                $(this)
                    .parent()
                    .find("input.shop-q")[0].value
            );
            count += 1;
            console.log(count);
            $(this)
                .parent()
                .find("input.shop-q")[0].value = count;
            addCountStorege($(this), count);
            priceAll($(this), count);
            // basketSum();
        });
        $(".less").click(function (e) {
            e.preventDefault();
            count = parseInt(
                $(this)
                    .parent()
                    .find("input.shop-q")[0].value
            );
            count -= 1;
            if (count < 0) {
                return;
            }
            $(this)
                .parent()
                .find("input.shop-q")[0].value = count;
            addCountStorege($(this), count);
            priceAll($(this), count);
        });

        function priceAll(element, count) {
            priceOne = parseInt(element
                .parents()
                .eq(1)
                .find(".price-one")
                .data("price-one"));
            var priceAll = priceOne * count;
            element
                .parents()
                .eq(1)
                .find(".price-all")
                .text(priceAll + "$");
            var cc = $("ul li .price-all");
            var basketSum = 0;
            for (var i = 0; i < cc.length; i++) {
                basketSum += parseInt(cc[i].innerText);
            }
            // console.log(basketSum);
            element
                .parents()
                .eq(4)
                .find(".basket_sum")
                .text(basketSum);
            element
                .parents()
                .eq(4)
                .find(".basket_total")
                .text(basketSum + "$");
        }

        $("input.shop-q").on("input", function () {
            count = parseInt(
                $(this)
                    .parent()
                    .find("input.shop-q")[0].value
            );
            if (isNaN(count) || count < 0) return;
            addCountStorege($(this), count);
            // console.log(array_index);
            priceAll($(this), count);

        });

        function addCountStorege(parent, count) {

            let parentElement = parent.parents("li");
            let id = parentElement.attr("data-product-id");
            let array_index = cart.findIndex(x => x.StoreProductId == id);
            cart[array_index].Quantity = count;
            cart[array_index].TotalPrice = count * cart[array_index].UnitPrice;

            saveCart();

        }


    }

    $(".to-order-button").on("click", function () {
        if ($("#PhoneNumber").val()!="") {
            $(".order-all-info").toggle();
            $(".products-order").toggle();
            $(".send-button").toggle();
            $("#clear_cart").toggle();
            $("#backToBasket").toggle();
            $("#allInfoTitle").toggle();
            $("#basketTitle").toggle();
            $(".tel-number-input").toggle();
            $(".phone-bumber-block").text($("#PhoneNumber").val());
            $(this).toggle();
        }

    });
    $("#backToBasket").on("click", function () {
        $(".order-all-info").toggle();
        $(".products-order").toggle();
        $(".send-button").toggle();
        $("#clear_cart").toggle();
        $("#allInfoTitle").toggle();
        $("#basketTitle").toggle();
        $(".to-order-button").toggle();
        $(this).toggle();
        $(".tel-number-input").toggle();
    });

    $("#toOrderSubmit").on("click",function () {
        // $("body").toggleClass("scroll-lock");
        $("#popup").submit(function(){
            $(this).toggle();
            $("#thankYouPopup").toggle();
        })

    });