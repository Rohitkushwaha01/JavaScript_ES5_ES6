"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
// Callback Hell

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
                <p class="country__row"><span>🗣️</span>${data.languages[lan]}</p>
                <p class="country__row"><span>💰</span>${
                  data.currencies[cur].name
                } ${data.currencies[cur].symbol}</p>
            </div>
    </article>
    `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getCountryData = function (country, cur, lan) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(request.responseText);
    // console.log(data);)

    // render first country
    renderCountry(data, cur, lan);

    const [neighbour] = data.borders;
    // console.log(neighbour);

    const request2 = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request.send();

    request.addEventListener("load", function () {
      const [data1] = JSON.parse(request.responseText);
      console.log(data1)
      renderCountry(data1, 'BDT', 'ben');
    });
  });
};

getCountryData("india", "INR", "hin");

// Callback hell
setTimeout(()=>{
    console.log('1 second passed');
    setTimeout(()=>{
        console.log('2 second passed');
        setTimeout(()=>{
            console.log('3 second passed');
            setTimeout(()=>{
                console.log('4 second passed')
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)
