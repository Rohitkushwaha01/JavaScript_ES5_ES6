const runOnce = function(){
    console.log("This will never run again1");
}
runOnce();

// Immediately invoked function expression.
(function(){
    console.log("This will never run again2");
    const isprivate = 23;
})();

// console.log(isprivate); // not accessible.

(()=>{
    console.log("Arrow function is immediately invoked.")
})();

{
    const isprivate = true;
    var notprivate = true;
}

// console.log(notprivate); //accessible
// console.log(isprivate); //not accessible