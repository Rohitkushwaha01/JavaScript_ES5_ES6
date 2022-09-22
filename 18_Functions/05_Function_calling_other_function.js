
// oneWord function returns string with no space;
const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}

// uppercase function returns one word of the string to uppercase.
const uppercase = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher-order function
const tranformer = function(str, fn){
    console.log(`Original string ${str}`);
    console.log(`tranformed string: ${fn(str)}`);
    console.log(`transformed string by : ${fn.name}`);
}

// uppercase is a callback function in transformer.
tranformer("Javascript is Awesome!!", uppercase);
tranformer("Java Script", oneWord);