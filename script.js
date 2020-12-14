//Loader
var loader = document.querySelector(".loader");
window.addEventListener("load", gone);
function gone() {
  loader.classList.add("gone");
}