"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

// let map, mapEvent;

class Workout {
  date = new Date();
  id = (Date.now() + "").slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this.type = "running";
  }

  calcPace() {
    // In min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this.type = "cycling";
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
  }
}

const run1 = new Running([39, -12], 5.2, 24, 178);
const Cycling1 = new Cycling([39, -12], 27, 95, 578);

console.log(run1);
console.log(Cycling1);
// Application Architecture;
class App {
  #map;
  #mapEvent;
  #workouts = [];

  constructor() {
    this._getPosition();
    form.addEventListener("submit", this._newWorkout.bind(this));
    inputType.addEventListener("change", this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert("could not get you position");
        }
      );
  }

  _loadMap(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);

    this.#map = L.map("map").setView([latitude, longitude], 15);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on("click", this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove("hidden");
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  }

  _newWorkout(e) {
    e.preventDefault();

    // Get the data from the form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;
    const inputValid = (...inputs) =>
      inputs.every((input) => Number.isFinite(input));

    const positiveValid = (...inputs) => inputs.every((input) => input > 0);

    // check valid for running, create running object
    if (type === "running") {
      const cadence = +inputCadence.value;
      if (
        !inputValid(distance, duration, cadence) ||
        !positiveValid(distance, duration, cadence)
      )
        return alert("please enter positive numbers");

      // Add new object to the workout array.
      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // check valid for cyling, create cycling object
    if (type === "cycling") {
      const elevation = +inputElevation.value;
      if (
        !inputValid(distance, duration, elevation) ||
        !positiveValid(distance, duration)
      )
        return alert("please enter positive numbers");

      workout = new Cycling([lat, lng], distance, duration, elevation);
      // Add new object to the workout array.
    }

    this.#workouts.push(workout);
    this._renderWorkoutMarker(workout);

    inputCadence.value =
      inputDistance.value =
      inputDuration.value =
      inputElevation.value =
        "";
    inputCadence.blur();
  }

  _renderWorkoutMarker(workout) {
    console.log(workout);
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(`${workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"}`)
      .openPopup();
  }
}

const app = new App();
