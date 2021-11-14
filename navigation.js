let _currentPage  = null;
(function init(){
  $("[target]").click(targetClicked);
  $(".next").click(nextClicked);
  $(".prev,.back").click(backClicked);
  $(".double-next").click(doubleNextClicked);
  initProgressBars();

  hideAllSections();
  _currentPage = $("[page=landing]").removeClass("d-none");
})();

function initCurrentPage(){
  let headerMessage = (!!_currentPage) ? _currentPage.find("header-message").text() : "";
  
  $("header")
    .empty()
    .append(`<span class=header-message>${headerMessage}</span>`);

  if (_currentPage.find("confetti").length==1){
    //https://www.kirilv.com/canvas-confetti/
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

function hideAllSections(){
  $("section").addClass("d-none");
}

function targetClicked(e){
  hideAllSections();
  let target = $(e.target).closest("[target]").attr("target");
  _currentPage = $(`[page=${target}]`).removeClass("d-none");
  initCurrentPage();
  
}

function nextClicked(e){
  hideAllSections();
  _currentPage = $(e.target)
    .closest("section")
    .next("section")
    .removeClass("d-none");
  initCurrentPage();
}

function backClicked(e){
  hideAllSections();
  _currentPage = $(e.target)
    .closest("section")
    .prev("section")
    .removeClass("d-none");
  initCurrentPage();
}

function doubleNextClicked(e){
  hideAllSections();
  _currentPage = $(e.target)
    .closest("section")
    .next("section")
    .next("section")
    .removeClass("d-none");
  initCurrentPage();
}

function initProgressBars(){
  $("progress-bar").each(function(i,e){
    let value = +$(e).text();
    if (typeof value !== "number") return;
    $(e).html(`<span><div style="width:${value}%"></div></span>
    <span>${value}%</span>`);
  });
}