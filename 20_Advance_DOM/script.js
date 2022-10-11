'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////
// Learn more button

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1')

btnScrollTo.addEventListener('click', (e)=>{
  section1.scrollIntoView({behavior:'smooth'});
})

//////////////////////////////////////
// Navbar links

document.querySelector('.nav__links').addEventListener('click', (e)=>{
  e.preventDefault();

  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:"smooth"});
  }
});

//////////////////////////////////////
// Tabbed component

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

console.log(tabs);
console.log(tabsContainer);
console.log(tabsContent)

// Bad Practice: use event delegation.
// tabs.forEach((tab)=>{
//   tab.addEventListener('click', (e)=>{
//     // const activetab = tab.classList.contains('operations__tab--active');
//     // console.log(activetab);
//     if(tab.classList.contains('operations__tab--active')){
//       tab.classList.toggle('operations__tab--active');
//     }else{
//       tab.classList.toggle('operations__tab--active');
//     }
//     console.log(tab)
//   })
// })

tabsContainer.addEventListener('click', (e)=>{
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  if(!clicked) return;
  tabs.forEach((tab)=> tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // activate content area
  tabsContent.forEach((tab)=> tab.classList.remove('operations__content--active')); // removing all the class
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
})

