const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.pageX; //tıklandığı noktanın x ve ye koordinatlarını paylaşır
    const y = e.pageY;

    const buttonTop = e.target.offsetTop; //buttonun koordinatları
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);

    console.log(x, y, xInside, yInside);
  });
});
