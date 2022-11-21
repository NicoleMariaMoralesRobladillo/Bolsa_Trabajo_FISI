const openModal2 = document.querySelectorAll(".button--apply");
const modal2 = document.querySelector("#modalContainer2");
const closeModal2 = document.querySelector("#button--cerrar2");

for (let i = 0; i < openModal2.length; i++) {
  openModal2[i].addEventListener("click", (e) => {
    e.preventDefault();
    modal2.classList.add("modalContainer--show");
  });
}

closeModal2.addEventListener("click", (e) => {
  e.preventDefault();
  modal2.classList.remove("modalContainer--show");
});
