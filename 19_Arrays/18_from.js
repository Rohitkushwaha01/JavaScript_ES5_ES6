const y = Array.from({length:10}, () => 1);
console.log(y);

const z = Array.from({length: 10}, (_, i) => i+1);
console.log(z);