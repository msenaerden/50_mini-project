const nav = document.querySelector(".nav");

window.addEventListener("scroll", navBg);

function navBg() {
  if (window.scrollY > nav.offsetHeight + 200) {
    //window.scrollY > nav.offsetHeight + 150 ifadelerini öğrenmen lazım
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
}
