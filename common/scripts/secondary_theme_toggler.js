function getThemedImageSrc(src, isLight) {
  if (isLight) {
    return /_light\.png(\?.*)?$/i.test(src)
      ? src
      : src.replace(/\.png(\?.*)?$/i, "_light.png$1");
  }

  return src.replace(/_light\.png(\?.*)?$/i, ".png$1");
}

function switchTopImageSmooth(image, nextSrc) {
  if (image.getAttribute("src") === nextSrc) {
    return;
  }

  image.classList.add("is-switching");

  var preloaded = new Image();
  preloaded.onload = function () {
    image.setAttribute("src", nextSrc);
    requestAnimationFrame(function () {
      image.classList.remove("is-switching");
    });
  };
  preloaded.onerror = function () {
    image.setAttribute("src", nextSrc);
    image.classList.remove("is-switching");
  };
  preloaded.src = nextSrc;
}

function updateTopImageTheme(isLight) {
  var image = document.getElementById("main_image");
  if (!image) {
    return;
  }

  var src = image.getAttribute("src");
  if (!src || !/\.png(\?.*)?$/i.test(src)) {
    return;
  }

  var nextSrc = getThemedImageSrc(src, isLight);
  switchTopImageSmooth(image, nextSrc);
}

function toggleTheme() {
  var link = document.querySelector("link[id='theme-link']");
  var isLight = link.getAttribute("href") == "../common/css/light-style.css";

  if (isLight) {
    link.setAttribute("href", "../common/css/style.css");
    localStorage.setItem("theme", "dark");
    updateTopImageTheme(false);
  } else {
    link.setAttribute("href", "../common/css/light-style.css");
    localStorage.setItem("theme", "light");
    updateTopImageTheme(true);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var link = document.querySelector("link[id='theme-link']");
  var theme = localStorage.getItem("theme");

  if (theme == "light") {
    link.setAttribute("href", "../common/css/light-style.css");
    updateTopImageTheme(true);
  } else {
    link.setAttribute("href", "../common/css/style.css");
    updateTopImageTheme(false);
  }
});