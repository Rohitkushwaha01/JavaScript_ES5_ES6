const image = document.querySelector(".images");
console.log(image);

const timeout = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      image.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(img);
    });
  });
};

let currentImg;

// createImage('img/img-1.jpg').then((res)=>{
//    currentImg = res;
//    console.log("1st image loaded");
//     return timeout(2);
// })
// .then((res)=>{
//     currentImg.style.display = 'none'
//     return createImage('img/img-2.jpg');
// })
// .then((res)=>{
//     currentImg = res;
//     console.log("2nd image loaded");
//     return timeout(2);
// })
// .then((res)=>{
//     currentImg.style.display = 'none'
//     return createImage('img/img-3.jpg');
// })
// .then((res)=>{
//     currentImg = res;
//     console.log("3nd image loaded");
//     return timeout(2);
// });

// PART 1
// Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
// loadNPause();
// Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

const loadNPause = async function () {
  try {
    const img1 = await createImage("img/img-1.jpg");
    await timeout(2);
    img1.style.display = "none";
    const img2 = await createImage("img/img-2.jpg");
    await timeout(2);
    img2.style.display = "none";
    const img3 = await createImage("img/img-3.jpg");
    await timeout(2);
  } catch (error) {
    console.log(error);
  }
};

// PART 2
// 1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
// 2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
// 3. Check out the 'imgs' array in the console! Is it like you expected?
// 4. Use a promise combinator function to actually get the images from the array 😉
// 5. Add the 'paralell' class to all the images (it has some CSS styles).
// TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.
const imgArr = ["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"];
const loadAll = async function (imageArray) {
  const imgs = imageArray.map(async (img) => await createImage(img));
  console.log(imgs);
  const imgsEl = await Promise.all(imgs);
  console.log(imgsEl);
  imgsEl.forEach((img) => img.classList.add("parallel"));
};

loadAll(imgArr);
