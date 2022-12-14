// slide

const slides = document.querySelectorAll(".slide");
const btnSliderLeft = document.querySelector('.slider__btn--left');
const btnSliderRight= document.querySelector('.slider__btn--right');

// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.4) translateX(-800px)';
// slider.style.overflow = 'visible';
slides.forEach((s, i)=>{
  s.style.transform = `translate(${100*i})`;
})

let curslide = 0;

// -100%, 0%, 100%, 200%
// -200%, -100%, 0%, 100%
// -300%, -200%, -100%, 0%

btnSliderRight.addEventListener('click', ()=>{
  if(curslide == 3){
    curslide = 0;
  }else{
    curslide++;
  }

  slides.forEach((slide, i)=>{
    slide.style.transform = `translateX(${100*(i - curslide)}%)`;
    console.log(slide);
  })
});

btnSliderLeft.addEventListener('click', ()=>{
  if(curslide == 0){
    curslide = 3;
  }else{
    curslide--;
  }

  slides.forEach((slide, i)=>{
    slide.style.transform = `translateX(${100*(i - curslide)}%)`;
    console.log(slide);
  })
})

// 0%, 100%, 200%, 300%
// -100%, 0%, 100%, 200%
// -200%, -100%, 0%, 100%
// -300%, -200%, -100%, 0%
