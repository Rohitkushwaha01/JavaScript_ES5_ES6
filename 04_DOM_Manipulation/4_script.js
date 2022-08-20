// fetch link of a given keyword and display to the users

let str = prompt("Search url");
let links = document.links;

Array.from(links).forEach(Element=>{
    if (Element.href.includes(str)) {
        console.log(Element);
    }
})