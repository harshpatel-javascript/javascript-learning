// let user  =  new Object() //object constructor
let user = {
    name :"mika",
    legs:4,
    tails:1,
    friends:["tucker","bryan","chat"]
}; //object literal

// if we want to access the object properties : 1st way
const userName = user.name;
const userFriends = user.friends;
console.log(userName);
//:2nd way
const userLegs = user['legs'];
console.log("user has " + userLegs + " legs");

//updating the value
user.name = "mika the husky";
console.log(user.name);

//adding the new properties same way we are accessing them
user.bark = "woof";
console.log(user);

//deleting the properties
delete user.tails;
console.log(user);

//in operator
console.log("name" in user);

// for...in operator
for(let key in user){
    console.log(key + " : " + user[key])
}