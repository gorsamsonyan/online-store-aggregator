$(document).ready(function() {
  var percent = 0,
    interval = 20, //it takes about 6s, interval=20 takes about 4s
    bar = $(".transition-timer-carousel-progress-bar"),
    crsl = $("#myCarousel");
  $(".carousel-indicators li, .carousel-control").click(function() {
    bar.css({ width: 0.5 + "%" });
  });
  /*line above just for showing when controls are clicked the bar goes to 0.5% to make more friendly, 
	if you want when clicked set bar empty, change on width:0.5 to width:0*/
  crsl
    .carousel({
      //initialize
      interval: false,
      pause: true
    })
    .on("slide.bs.carousel", function() {
      percent = 0;
    }); //This event fires immediately when the bootstrap slide instance method is invoked.
  function progressBarCarousel() {
    bar.css({ width: percent + "%" });
    percent = percent + 0.5;
    if (percent >= 100) {
      percent = 0;
        crsl.carousel("next");
    }
  }
  var barInterval = setInterval(progressBarCarousel, interval); //set interval to progressBarCarousel function
  if (!/Mobi/.test(navigator.userAgent)) {
    //tests if it isn't mobile
    crsl.hover(
      function() {
        clearInterval(barInterval);
      },
      function() {
        barInterval = setInterval(progressBarCarousel, interval);
      }
    );
  }
});
$(".dl-header__viewBtn")
    .off("click")
    .on("click", function () {
        var cart = $('.wkBag');
        var dealproduct=$(this).parents('.dl-carousel').find(".active").eq(0);


        if (dealproduct) {
             let dealproductclone = dealproduct.clone()
                 .offset({
                     top: dealproduct.offset().top,
                     left: dealproduct.offset().left
                 })
                 .css({
                     'opacity': '0.5',
                     'position': 'absolute',
                     'height': '150px',
                     'width': '150px',
                     'z-index': '1000000',
                     'color':'black'

                 })
                 .appendTo($('body'))
                 .animate({
                     'top': cart.offset().top + 10,
                     'left': cart.offset().left + 10,
                     'width': 75,
                     'height': 75
                 }, 2000, 'easeInOutExpo');

             setTimeout(function () {
                 cart.effect("shake", {
                     times: 1
                 }, 200);
             }, 2500);

             dealproductclone.animate({
                 'width': 0,
                 'height': 0
             }, function () {
                 $(this).detach()
             });
         }

        // if (!$(this).hasClass("singleProduct__order--ordered")) {
        //     $(this).addClass("singleProduct__order--ordered");
        //     $(this).text("Added");
        //     // $(".addedToCart").addClass("addedToCart--open");
        //     // setTimeout(() => {
        //     //     $(".addedToCart").removeClass("addedToCart--open");
        //     // }, 4000);
        // }
    });


$(".deal-order-button").on("click",function () {
    dealAddToCart($(this));
    console.log("barev")
    let cart = $('.wkBag');
    let imgtodrag = $(this).parents('.ss__product-item').find(".ss-store__bgImage").eq(0);
    let dealproduct = $(this).parents('.dl-carousel').find(".active").eq(0);
    if (imgtodrag) {
        let imgclone = imgtodrag.clone()
            .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
            .css({
                'opacity': '0.5',
                'position': 'absolute',
                'height': '150px',
                'width': '150px',
                'z-index': '1000000',
                'color': 'black'

            })
            .appendTo($('body'))
            .animate({
                'top': cart.offset().top + 10,
                'left': cart.offset().left + 10,
                'width': 75,
                'height': 75
            }, 2000, 'easeInOutExpo');

        setTimeout(function () {
            cart.effect("shake", {
                times: 1
            }, 200);
        }, 2500);

        imgclone.animate({
            'width': 0,
            'height': 0
        }, function () {
            $(this).detach()
        });
    }
});