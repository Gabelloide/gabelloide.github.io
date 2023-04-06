function toggleTheme() {
  var link = document.querySelector("link[id='theme-link']");
  var isLight = link.getAttribute("href") == "../common/css/light-style.css";

  if (isLight) {
    link.setAttribute("href", "../common/css/style.css");
    localStorage.setItem("theme", "dark");
  } else {
    link.setAttribute("href", "../common/css/light-style.css");
    localStorage.setItem("theme", "light");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var link = document.querySelector("link[id='theme-link']");
  var theme = localStorage.getItem("theme");

  if (theme == "light") {
    link.setAttribute("href", "../common/css/light-style.css");
  } else {
    link.setAttribute("href", "../common/css/style.css");
  }
});