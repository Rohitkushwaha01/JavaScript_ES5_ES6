const getJSON = function (url, errorMsg) {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

// Promise.race: The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/india`),
    getJSON(`https://restcountries.com/v3.1/name/australia`),
    getJSON(`https://restcountries.com/v3.1/name/japan`),
  ]);
  console.log(res[0]);
})();

// another example of Promise.race

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error("Request took too long"));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/japan`),
  timeout(2),
]);

// Promise.allSettled: The Promise.allSettled() method returns a promise that fulfills after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Error"),
  Promise.resolve("another Success"),
]).then((res) => console.log(res));

// Promise.all: The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will fulfill when all of the input's promises have fulfilled, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.
Promise.all([
  Promise.resolve("Success"),
  Promise.reject("Error"),
  Promise.resolve("another Success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Promise.any: it will returns only first fullfilled promise and rejected promise are ignored.
Promise.any([
  Promise.resolve("Success"),
  Promise.reject("Error"),
  Promise.resolve("another Success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
