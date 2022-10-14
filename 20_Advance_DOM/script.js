'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1')

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

const nav = document.querySelector('.nav');
///////////////////////////////////////
// Modal Window

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
  if(!clicked) return;
  tabs.forEach((tab)=> tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // activate content area
  tabsContent.forEach((tab)=> tab.classList.remove('operations__content--active')); // removing all the class
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

//////////////////////////////////////
//Menu fade animation.

// this function is too correct but use another one best practice

// const handleHover = function(e, opacity){
//   if(e.target.classList.contains('nav__link')){
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if(el !== link) el.style.opacity = opacity;
//     });
//     logo.style.opacity = opacity;    
//   }
// }

// nav.addEventListener('mouseover', function(e){
//   handleHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function(e){
//   handleHover(e, 1);
// });

const handleHover = function(e){
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;    
  }
}

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//////////////////////////////////////
// Sticky navigation

// Don't use the below code bad practice.

// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function(){
//   if(window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// })

const header = document.querySelector(".header");

const stickyNav = function(entries){
  const [entry] = entries;

  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(stickyNav, {root: null, threshold: 0, rootMargin: "-90px"});

headerObserver.observe(header);

//////////////////////////////////////
// Revealing section on Scoll
const allSection = document.querySelectorAll('.section');

const reavealSection = function(entries, observer){
  const [entry] = entries;
  if(!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(reavealSection, {root:null, threshold: 0.15});

allSection.forEach(function(section){
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

//////////////////////////////////////
// lazing loading Images

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function(entries, observer){
  const [entry] = entries;
  if(!entry.isIntersecting) return;
  // replacing src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function(){
    entry.target.classList.remove('lazy-img');
  });
}

const imgObserver = new IntersectionObserver(loadImg, {root:null, threshold:0, rootMargin:'200px'});

imgTargets.forEach(img=>imgObserver.observe(img));




