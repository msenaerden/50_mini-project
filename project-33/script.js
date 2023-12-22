const nums = document.querySelectorAll(".nums");
const btn = document.getElementById("replay");
const counter = document.querySelector(".counter");
const final = document.querySelector(".final");

runAnimation();

function runAnimation() {
  nums.forEach((num, idx) => {
    num.classList.add("in");
    num.classList.remove("in");
    num.classList.add("out");
  });
}
