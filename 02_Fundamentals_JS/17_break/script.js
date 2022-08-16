// break keyword: break just check the condition if found false it will terminate immediately without checking the whole array 

const friends = ["Rohit", "Shubham", "Gaurav", "Pooja", "Ajit", 50, "Pankaj", 2003, "Sahil"];

for (let i = 0; i < friends.length; i++) {
    if(typeof(friends[i]) !== 'string'){
        break;
    };
    console.log(friends[i], typeof(friends[i]));
}