const password = document.getElementById("password");
const background = document.getElementById("background");

const paswordInput = 0;

password.addEventListener("input", (e) => {
  const input = e.target.value;
  const length = input.length;

  const blurValue = 20 - length * 2;

  background.style.filter = `blur(${blurValue}px)`;
});