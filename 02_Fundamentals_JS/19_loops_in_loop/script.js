// loops in loops
for (let exercise = 1; exercise <= 5; exercise++) {
    console.log(`----------------Starting Exercise ${exercise}----------------`);
    for (let i = 1; i <= 5; i++) {
        if (exercise === 1) {
            console.log(`Exercise ${exercise}: Warm up`);
        }
        else if (exercise === 2) {
            console.log(`Exercise ${exercise}: Ligting Dumbells`);
        }
        else if (exercise === 3) {
            console.log(`Exercise ${exercise}: push Ups`);
        }
        else if (exercise === 4){
            console.log(`Exercise ${exercise}: Ligting Dumbells`);
        }
        else{
            console.log(`Exercise ${exercise}: Bench press`);
        }
    }
}