$(document).ready(function() {
  // $(".ss__menuItem").each(function() {
  //   let submenuHeight = $(this)
  //     .find(".ss__subMenu")
  //     .outerHeight();
  //   $(this)
  //     .find(".ss__subMenu")
  //     .css("margin-top", "-" + submenuHeight + "px");
  //   $(this).on("mouseover", function() {
  //     $(this)
  //       .find(".ss__subMenuContainer")
  //       .find(".ss__subMenu")
  //       .css("margin-top", "0");
  //   });
  //   $(this).on("mouseleave", function() {
  //     $(this)
  //       .find(".ss__subMenuContainer")
  //       .find(".ss__subMenu")
  //       .css("margin-top", "-" + submenuHeight + "px");
  //   });
  // });

  $(".ss__menuItem").on("click", function() {
    $(".ss__menuItem").removeClass("ss__menuItem--active");
    $(this).addClass("ss__menuItem--active");
  });
});
