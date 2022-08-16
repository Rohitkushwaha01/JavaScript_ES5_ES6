// continue keyword: continue just check the condition if found false it will skip that element and continues it checking.

const friends = ["Rohit", "Shubham", "Gaurav", "Pooja", "Ajit", 50, "Pankaj", 2003, "Sahil"];

for (let i = 0; i < friends.length; i++) {
    if(typeof(friends[i]) !== 'string'){
        continue;
    };
    console.log(friends[i], typeof(friends[i]));
}
