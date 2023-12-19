const addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => addNewNote());

function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
    <div class="note">
        <div class="tools">
            <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="edit"><i class="fa-solid fa-delete-left"></i></button>
        </div>
        <div class="hidden"></div>
        <textarea></textarea>
    </div>
    `;
}

return text();
