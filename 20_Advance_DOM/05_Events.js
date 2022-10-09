const h1 = document.querySelector('h1');

const alertH1 = function(e){
    alert('The mouse is on H1');
}

// h1.addEventListener('mouseenter', alertH1);

// Another way of doing the same
// h1.addEventListener('mouseenter', function(e){
//     alert('The mouse is on H!:D');
// });

h1.onmouseenter = function(){
    alert('alert message you');
}
