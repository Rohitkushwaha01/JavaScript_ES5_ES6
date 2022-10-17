class bank{
    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = []

        console.log(`Thanks for opening an account, ${this.owner}`)
    }

    deposit(val){
        this.movements.push(val);
    }

    withdraw(val){
        this.movements.push(-val);
    }

    approveLoan(val){
        return true;
    }

    requestLoan(val){
        if(this.approveLoan(val)){
            this.deposit(val);
            console.log('loan approved');
        }
        else{
            console.log("Not approved");
        }
    }

}

const account1 = new bank("Rohit Kushwaha", "INR", "5555");

// // bad practice
// account1.movements.push(100);
// account1.movements.push(-100);

account1.deposit(500);
account1.withdraw(-300);

console.log(account1.pin) // this should be private and not accessible we will learn in the next file.

// account1.approveLoan(5000); should not be accessible outside the class but it is accessible outside the class
account1.requestLoan(5000);
console.log(account1);