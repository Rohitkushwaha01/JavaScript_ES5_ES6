const bill = 40;
let tip = bill<=300 && bill>=50?bill*0.15:bill*0.2;
console.log(tip)

console.log(`The bill was ${bill}, the tip was ${tip},the total value ${bill + tip}`);

