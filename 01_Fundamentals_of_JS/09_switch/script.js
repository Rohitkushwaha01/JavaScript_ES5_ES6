let daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let date = new Date();
let day = date.getDay();

switch (day) {
  case 1:
    console.log(daysOfWeek[1]);
    break;
  case 2:
    console.log(daysOfWeek[2]);
    break;
  case 3:
    console.log(daysOfWeek[3]);
    break;
  case 4:
    console.log(daysOfWeek[4]);
    break;
  case 5:
    console.log(daysOfWeek[5]);
    break;
  case 6:
    console.log(daysOfWeek[6]);
    break;
  default:
    break;
}
