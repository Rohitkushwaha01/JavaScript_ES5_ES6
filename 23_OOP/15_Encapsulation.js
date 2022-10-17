// Encapsulation: protected properties and methods, private class fields and methods.

// 1) public fields
// 2) private fields
// 3) public methods
// 4) private methods
// (there is also the static version)

class bank{
    // 1) public fields
    locale = navigator.language;

    // 2) private fields
    #movements = [];
    #pin;

    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // Protected property.
        // this.movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${this.owner}`)
    }

    // 3) public methods.
    getMovements(){
        return this.#movements;
    }

    deposit(val){
        this.#movements.push(val);
        return this;
    }

    withdraw(val){
        this.#movements.push(-val);
        return this;
    }

    #approveLoan(){
        return true;
    }

    requestLoan(val){
        if(this.#approveLoan(val)){
            this.deposit(val);
            console.log('loan approved');
            return this;
        }
        else{
            console.log("Not approved");
        }
    }

}

const account1 = new bank("Rohit Kushwaha", "INR", "5555");

account1.deposit(500);
account1.withdraw(-300);

account1.requestLoan(5000);
console.log(account1);

// console.log(account1.#movements); // cannot access
// console.log(account1.#approveloan()); // cannot access
// console.log(account1.pin) // It is private and not accessible.

account1.deposit(50).deposit(3000).withdraw(1000).requestLoan(250000).withdraw(20000);
console.log(account1.getMovements());