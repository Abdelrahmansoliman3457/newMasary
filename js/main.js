// loader
$(window).on("load", function () {
  setTimeout(function () {
    $(".loader").fadeOut("slow", function () {
      $(".loader").remove();
    });
  }, 1000);
});

// toggle sidebar
let allLinks = document.querySelector(".links");
let toggleBtn = document.querySelector(".coll-icon");
let navLayer = document.querySelector(".nav-layer");

if (allLinks) {
  toggleBtn.addEventListener("click", function () {
    navLayer.classList.toggle("slideto");
    allLinks.classList.toggle("slideto");
    this.classList.toggle("active");
  });
  navLayer.addEventListener("click", function () {
    toggleBtn.classList.remove("active");
    allLinks.classList.remove("slideto");
    this.classList.remove("slideto");
  });
}

let header = document.querySelector(".header");
window.onscroll = function () {
  if (header) {
    if (window.pageYOffset > 20) {
      header.classList.add("bg-header");
    } else {
      header.classList.remove("bg-header");
    }
  }
};

// toggle drop-down in header
let myBtndrop = document.querySelector(".flex-profile-d");
let drop = document.querySelector(".my-drop-now");

if (drop) {
  myBtndrop.addEventListener("click", function (e) {
    drop.classList.toggle("show-drop");
    e.stopPropagation();
  });
  document.body.addEventListener("click", function () {
    drop.classList.remove("show-drop");
  });
  drop.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}
// toggle drop-down in header
let myBtndrop2 = document.querySelector(".flex-profile-d2");
let drop2 = document.querySelector(".my-drop-now2");

if (drop2) {
  myBtndrop2.addEventListener("click", function (e) {
    drop2.classList.toggle("show-drop2");
    e.stopPropagation();
  });
  document.body.addEventListener("click", function () {
    drop2.classList.remove("show-drop2");
  });
  drop2.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}
//  add active class to cuurent link
$(".links li a").each(function () {
  if (window.location.href.includes($(this).attr("href"))) {
    $(this).addClass("active");
  }
});
