// Nullish coalescing operator(??): only includes null and undefined, does not inlcude 0 or ""(empty string).

// IN THE LOGICAL NULLISH OPERATOR ONLY NULL AND UNDEFINED ARE THE FALSY VALUES AND OTHERS SUCH AS 0, EMPTY STRINGS ARE NOT THE FALSY VALUES.

// AND IN CASE OF LOGICAL OR OPERATOR NULL, UNDEFINED, 0 AND EMPTY STRINGS ARE FLASY VALUES.

const guest = "";

let No_of_guest = guest || 10 ;
console.log(No_of_guest);

No_of_guest = guest ?? 10;
console.log(No_of_guest);
