const array = ["Rohit", "Pooja", "Shubham", "Gaurav"];

// for (const [name,value] in array) {
//     console.log(name[0], value)
// }

let txt = "";
for (let x in array) {
  txt += array[x]; 
}
