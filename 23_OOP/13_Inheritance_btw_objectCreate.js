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

const StudentProto = Object.create(personProto);

StudentProto.inti = function(firstName, birthYear, course){
    personProto.init.call(this,firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function(){
    console.log(`my name is ${this.firstName} and I am studying ${this.course}`);
}

const vishal = Object.create(StudentProto);
vishal.inti("Vishal", 2005, "Commerce");
vishal.introduce();
vishal.calcAge();