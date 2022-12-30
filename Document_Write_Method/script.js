let checkMarks = function(){
    let percent = document.getElementById('percent').value;
    console.log(typeof(percent));
    console.log(typeof(percent) !== "number")
    if(typeof(percent) !== "number"){
        document.write("<h1>Enter valid marks</h1>");
    }
    else{
        if(percent>=80){
            document.write("<h1>grade is A+</h1>")
        }
        else if(percent >=70 && percent<80){
            document.write("<h1>grade is B+</h1>");
        }
        else if(percent >=60 && percent<70){
            document.write("<h1>grade is C+</h1>");
        }
        else if(percent >=50 && percent<60){
            document.write("<h1>grade is D+</h1>");
        }
        else{
            document.write("<h1>fail!!!</h1>")
        }
    }
    
}