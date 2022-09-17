const sppu = new Map([
    ["University", "SPPU"],
    ["Courses", [
        "Electronics and Telecommunication",
        "Computer",
        "Mechcanical",
        "Electrical",
        "Civil"
        ]
    ]
])

for(const [key, value] of sppu){
    if(key == "university")console.log(`${key} to which we are affiliated is ${value}`);
    else console.log(`${key} which we offer are ${value}`);
}

// convert map to array
console.log([...sppu]);