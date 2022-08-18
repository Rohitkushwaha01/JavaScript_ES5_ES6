const showModal = document.querySelectorAll(".show-modal");
const modal = document.querySelectorAll(".modal");
const closeModal = document.querySelectorAll(".close-modal");
const addOverlay = document.querySelector(".add-overlay");


for (let i = 0; i < showModal.length; i++) {

    showModal[i].addEventListener('click', ()=>{
        modal[i].classList.add('hidden');
        addOverlay.classList.add('overlay');
    });

    closeModal[i].addEventListener("click", ()=>{
        modal[i].classList.remove('hidden');
        addOverlay.classList.remove('overlay');
    })
}


