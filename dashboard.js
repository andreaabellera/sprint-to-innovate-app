(function init(){
  $(".nav-link").click(tabClicked);
  $(".bottom-nav").click(bottomNavClicked);
})();

function tabClicked(e){
  $(e.target)
    .closest("ul")
    .find("a.nav-link")
    .removeClass("active");
  $(e.target)
    .addClass("active");
}