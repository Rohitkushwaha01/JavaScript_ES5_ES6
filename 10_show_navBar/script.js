let settingIcon = document.getElementById("setting");
let nav = document.querySelector("nav");

console.log(settingIcon);
console.log(nav);

nav.classList.add("hidden");

let angle = 0;
let left = 1;
let record = true;

settingIcon.addEventListener("click", function () {
  nav.classList.remove("hidden");
  if (record) {
    let set = setInterval(() => {
      if (angle == 360) {
        angle = 1;
      }
      settingIcon.style.transform = `rotate(${angle}deg)`;
      nav.style.left = `${left}px`;
      angle++;
      left++;
      console.log(left);
      if (left == 460) {
        nav.classList.remove("hidden");
        clearInterval(set);
      }
    }, 0.01);
    record = false;
  } else {
    let set = setInterval(() => {
      if (angle == 0) {
        angle = -1;
      }
      settingIcon.style.transform = `rotate(${angle}deg)`;
      nav.style.left = `${left}px`;
      angle--;
      left--;
      console.log(left);
      if (left == 0) {
        nav.classList.add("hidden");
        clearInterval(set);
      }
    }, 0.01);
    record = true;
  }
});
