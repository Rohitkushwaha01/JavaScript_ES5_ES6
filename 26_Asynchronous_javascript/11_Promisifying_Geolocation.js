"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const whereAmI = function () {
  getPosition()
    .then((pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=74705996915185159246x74184`
      );
    })
    .then((response) => {
      if (!response.ok) throw new Error("Problem with Geocoding");
      return response.json();
    })
    .then((data) => {
      getCountryData(data.country);
      console.log(`You are in ${data.city}, ${data.country}`);
    })
    .catch((err) => console.log(err.message));
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (posititon) => resolve(posititon),
    //   (err) => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject); // the above code will work same as this line
  });
};

const renderCountry = function (data) {
  const html = `
          <article class="country">
              <img class="country__img" src="${data.flags.svg}" />
              <div class="country__data">
                  <h3 class="country__name">${data.name.common}</h3>
                  <h4 class="country__region">${data.region}</h4>
                  <p class="country__row"><span>👫</span>${(
                    +data.population / 1000000
                  ).toFixed(1)} people</p>
                  <p class="country__row"><span>🚩</span>${data.capital[0]}</p>
              </div>
      </article>
      `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);
    });
};

whereAmI()
