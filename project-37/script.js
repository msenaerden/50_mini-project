const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

listItems.forEach((item, idx) => {
  item.addEventListener("click", () => {
    removeAllcontents();
    removeAllItems();

    item.classList.add("active");
    contents[idx].classList.add("show");
  });
});

function removeAllcontents() {
  contents.forEach((content) => {
    content.classList.remove("show");
  });
}

function removeAllItems() {
  listItems.forEach((item) => {
    item.classList.remove("active");
  });
}
