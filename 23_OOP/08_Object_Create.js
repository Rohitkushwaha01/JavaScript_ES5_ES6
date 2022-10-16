const personProto = {
    calcAge(){
        console.log(2022 - this.birthYear);
    },

    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const rohit = Object.create(personProto);
console.log(rohit);
rohit.name = "Rohit Kushwaha";
rohit.birthYear = 2003;
rohit.calcAge();

console.log(rohit.__proto__ === personProto);

const pooja = Object.create(personProto);
pooja.init("Pooja Kushwaha", 2000);
pooja.calcAge();

