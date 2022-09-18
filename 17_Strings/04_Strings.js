const underscore = document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const camelCase = function(){
    const underScore_case = document.querySelector('textarea').value;
    // console.log(underScore_case)
    const lowerCase = underScore_case.toLowerCase();
    // console.log(lowerCase);
    const split = lowerCase.split('_');
    // console.log(split);
    const fcase = split[1].slice(0,1).toUpperCase();
    return split[0] + fcase + split[1].slice(1);
}

// console.log(camelCase("underscore_case"));
// console.log(camelCase("First_Name"));
// console.log(camelCase("Some_Variable"));
// console.log(camelCase("calculate_AGE"));
// console.log(camelCase("delayed_departure"));

document.querySelector('button').addEventListener('click', function(){
    const underScore_case = document.querySelector('textarea').value;
    const lowerCase = underScore_case.toLowerCase();
    const splitLowercase = lowerCase.split('\n');
    console.log(splitLowercase)
    for (let item of splitLowercase) {
        let splitItem = item.split('_');
        let sliceLastItem = splitItem[1].slice(0,1).toUpperCase();
        let join = splitItem[0] + sliceLastItem + splitItem[1].slice(1).trim();
        console.log(join.replaceAll(" ", ""));
    }
});