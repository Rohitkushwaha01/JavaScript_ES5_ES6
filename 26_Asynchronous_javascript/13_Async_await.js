"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

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
                    <p class="country__row"><span>🚩</span>${
                      data.capital[0]
                    }</p>
                </div>
        </article>
        `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject); // the above code will work same as this line
  });
};

const whereAmI = async function(){
    // Geoloaction
    const position = await getPosition();
    const {latitude: lat, longitude: lng} = position.coords;

    // Reverse Geocoding
    const resGeoCode = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=74705996915185159246x74184`);
    const dataGeo = await resGeoCode.json();

    // Country data
    const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
    const data = await res.json();
    renderCountry(data[0]);
}


btn.addEventListener('click', whereAmI);