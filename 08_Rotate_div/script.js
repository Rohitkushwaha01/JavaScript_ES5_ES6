const div = document.getElementById('rotate');
// const item = document.getElementById('item')
let angle = 1;

setInterval(() => {
    if(angle == 360){
        angle = 1;
    }
    div.style.transform = `rotate(${angle}deg)`;
    angle++;
}, 50);

// let negativeAngle = -50
// setInterval(() => {
//     item.style.transform = `rotate(${negativeAngle}deg)`;
//     console.log(negativeAngle)
// }, 50);
