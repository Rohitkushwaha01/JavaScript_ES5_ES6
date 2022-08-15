const mark = {
    name: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBmi: function(){
        this.bmi = this.mass/this.height**2;
        return this.bmi;
    }
}

const john = {
    name: "John Smith",
    mass: 92,
    height: 1.95,
    calcBmi: function(){
        this.bmi = this.mass/this.height**2;
        return this.bmi;
    }
}

mark.calcBmi();
john.calcBmi();

// console.log(mark.bmi, john.bmi)
// console.log(john.bmi)

if(mark.bmi > john.bmi){
    console.log(`${mark.name}'s BMI (${mark.calcBmi()}) is higher than ${john.name}'s (${john.calcBmi()})`);
}
else{
    console.log(`${john.name}'s BMI (${john.calcBmi()}) is higher than ${mark.name}'s (${mark.calcBmi()})`);
}
