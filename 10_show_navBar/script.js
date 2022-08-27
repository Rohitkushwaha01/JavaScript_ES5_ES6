let settingIcon = document.getElementById('setting');
console.log(settingIcon);
let angle = 0;

settingIcon.addEventListener('click', function(){
    setInterval(() => {
        if(angle == 360){
            angle = 1;
        }
        settingIcon.style.transform = `rotate(${angle}deg)`;
        angle++;
        console.log(angle)
    }, 10);
    
})

