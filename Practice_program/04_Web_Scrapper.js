const string = prompt('Enter Your String');

const links = document.links;

Array.from(links).forEach(link => {
    href = link.href;
    if(href.includes(string)){
        console.log(href)
    }
});