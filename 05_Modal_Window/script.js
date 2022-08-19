const showModal = document.querySelectorAll(".show-modal");
const modal = document.querySelectorAll(".modal");
const closeModal = document.querySelectorAll(".close-modal");
const addOverlay = document.querySelector(".add-overlay");

function show(i) {
  modal[i].classList.add("hidden");
  addOverlay.classList.add("overlay");
}

function close(i){
    modal[i].classList.remove("hidden");
    addOverlay.classList.remove("overlay");
}

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", () => {
    show(i);
  });

  closeModal[i].addEventListener("click", () => {
    close(i);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key == "Escape") {
      if(modal[i].classList.contains('hidden')){
        close(i);
      }
    }
  });
}
