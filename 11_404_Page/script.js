let rocket = document.getElementById("rocket");
let earth = document.getElementById("earth");
let rocketAngle = 1;
let earthAngle = 1;

let anlgeTrue = true;

setInterval(() => {
  if (anlgeTrue) {
    if (rocketAngle < 360) {
      rocket.style.transform = `rotate(${rocketAngle}deg)`;
      rocketAngle++;
      console.log(rocketAngle);
      if (rocketAngle == 360) {
        rocketAngle = 0;
        anlgeTrue = false;
      }
    } else {
      console.log("rocket angle is 360");
    }
  } else {
    earth.style.transform = `rotate(${earthAngle}deg)`;
    earthAngle++;
    if (earthAngle == 360) {
      earthAngle = 0;
      anlgeTrue = true;
    }
  }
}, 10);
