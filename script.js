//Loader
var loader = document.querySelector(".loader");
window.addEventListener("load", gone);
function gone() {
  loader.classList.add("gone");
}

//navigation
var $menu, $body, $pages;
  $(document).ready(function() {
    $menu = $(".menu a");
    $body = $("body,html");
    $pages = $(".pages > div");

    $menu.click(function() {
      var index = $menu.index(this);
      var offset = $pages.eq(index).offset().top;

      $body.animate({scrollTop : offset}, 500);

      return false;
    });
    $(document).trigger("scroll");
  });
$(document).scroll(function() {
  var index = Math.round($(this).scrollTop()/$(window).height());
    $menu.removeClass("active");
    $menu.eq(index).addClass("active");
})




//contact form
const inputs = document.querySelectorAll(".input");
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}
function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");}
}
inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});