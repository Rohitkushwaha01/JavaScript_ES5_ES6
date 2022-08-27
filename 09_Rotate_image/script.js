let settingIcon1 = document.getElementById('setting-1');
let settingIcon2 = document.getElementById('setting-2');
let settingIcon3 = document.getElementById('setting-3');
let angle = 1;

setInterval(() => {
    settingIcon1.style.transform = `rotate(${angle}deg)`
    angle++;
}, 10);

setInterval(() => {
    settingIcon2.style.transform = `rotate(${angle}deg)`
    angle++;
}, 10);

setInterval(() => {
    settingIcon3.style.transform = `rotate(${angle}deg)`
    angle++;
}, 10);