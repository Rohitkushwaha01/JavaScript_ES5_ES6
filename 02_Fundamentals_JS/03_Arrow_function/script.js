// Arrow function
// Arrow function is like function expression

// one liner
const calcAge1 = birthYear => 2022 - birthYear;
console.log(calcAge1(2003));

// multiple calculation wrap into curly_braces {}.
const yearLeftUntilRetirement = birthYear =>{
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearLeftUntilRetirement(2003));

// multiple parameters wrap into Brackets ()
const nameYearLeftUntilRetirement = (birthYear, Name) =>{
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${Name} retire in ${retirement} years`;
}
console.log(nameYearLeftUntilRetirement(2003, "Rohit"));

