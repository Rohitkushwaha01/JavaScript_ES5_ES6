"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
// Consuming Promise
const renderCountry = function (data, cur, lan) {
  const html = `
          <article class="country">
              <img class="country__img" src="${data.flags.svg}" />
              <div class="country__data">
                  <h3 class="country__name">${data.name.common}</h3>
                  <h4 class="country__region">${data.region}</h4>
                  <p class="country__row"><span>👫</span>${(
                    +data.population / 1000000
                  ).toFixed(1)} people</p>
                  <p class="country__row"><span>🗣️</span>${
                    data.languages[lan]
                  }</p>
                  <p class="country__row"><span>💰</span>${
                    data.currencies[cur].name
                  } ${data.currencies[cur].symbol}</p>
              </div>
      </article>
      `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => {
      console.log(response);
      if (!response.ok) throw new Error(`Country not found ${response.status}`);

      return response.json();
    })
    .then((data) => {
      // Rendering first country.
      renderCountry(data[0], "INR", "hin");

      // Country 2
      const neighbour = data[0].borders[0];
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((response) => {
      if (!response.ok) throw new Error(`Country not found ${response.status}`);

      return response.json();
    })
    .then((data) =>
      // Rendering 2 country.
      renderCountry(data[0], "BDT", "ben")
    )
    .catch((err) => {
      console.error(err);
      renderError(`Something went wrong ${err.message}. Try Again!`);
    })
    .finally(() => {
      console.log("Whethere success or error I will execute always");
    });
};

btn.addEventListener("click", function () {
  getCountryData("india");
});
