// Promise
// Promise function called executer function
// and this executer function takes two arguments resolve and reject.

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Loterry Draw is happening");
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("You Win!!🎉");
    } else {
      reject("You lost your money😂");
    }
  }, 5000);
});

// resolve goes to the response
// reject goes to err
lotteryPromise
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

// Promisisying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log("2 seconds passed");
    return wait(1);
  })
  .then(() => console.log("1 seconds passed"));
