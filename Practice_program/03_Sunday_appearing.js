for (let year = 2000; year<=2050; year++) {
    const d = new Date(year, 0, 7);
    if(d.getDay() === 0){
        console.log("Sunday is in Year: " +  year);
    }
}