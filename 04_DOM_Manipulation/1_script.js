// DOM : Document object model

// Definition : DOM is a structured representation of HTML documents which allows javascript to access HTML elements And styles to Manipulate them.

// DOM is automatically created by the browers as soon as the HTML is loaded.

// It is stored in tree structure format. Each HTML element in the DOM is treated as object.

// HTML DOM power the javascript to create Dynamic HTML 
    // js can change all the HTML elements
    // js can change all the HTML Attributes
    // js can change all the styles of HTML page
    // js can remove existing HTML Elements
    // js can add new HTML Elements and Attributes
    // js can react to all existing HTML events
    // js can ceate new HTML events.

// Let's manipulate the DOM using Javascript

// First we need to select the object(i.e HTML element)

// document : The whole HTML document
// querySelector : This selects the element given in parenthesis.
// .textContent : gives the text of the selected Element.

const score = document.querySelector('.score').textContent; // To get the text of the element we use textContent.
console.log(score); 

// changing the value of score.
const ChangedScore = document.querySelector('.score').textContent = 4;

// setting a default value into the input field
const guessInput = document.querySelector('.guess').value = 50; // Eventhough we have defaultly added a value user can change it.
console.log(guessInput);