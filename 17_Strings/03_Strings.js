// split method
console.log("a+very+nice+string".split("+")) // split up and store every thing in an array.{
const [firstname, lastname] = "Rohit kushwaha".split(" ");
console.log(firstname, lastname);


const capitalizeName = function(name){
    const splitName = name.split(' ');
    const newArray = [];
    for (let item of splitName) {
        item = item.toLowerCase();
        newArray.push(item.slice(0,1).toUpperCase() + item.slice(1))
    }
    const finalName = newArray.join(" ");
    return finalName;
}

console.log(capitalizeName('Rohit kushwaha'));
console.log(capitalizeName('Rohit chotelal kushwaha'));
console.log(capitalizeName('RoHit choTelal kusHwaha'));
console.log(capitalizeName("ROHIT KUshwahA ChoTELAL"));