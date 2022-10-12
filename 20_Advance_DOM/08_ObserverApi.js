const section1 = document.querySelector('#section--1');

const obsCallback = function(entries, observer){
    entries.forEach(entry => {
        console.log(entry.intersectionRatio);
    });
}

const obsOptions = {
    root: null,
    threshold: [0, 0.2] // invoke when 0% is complete and 20% is complete.
}

const observer = new IntersectionObserver(obsCallback, obsOptions);

observer.observe(section1);