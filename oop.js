var house = {
    color: "brown",
    size : "huge",
    expensive : true
}
var bike = {
    age : 2,
}
//prototype property is only present for functions not 
//for simple objects as above
console.log(house.prototype);
//while __proto__ is an actual object within every object 
//that points out the prototype 
console.log(house.__proto__);

//for prototype propert with function
function add(a,b){
    return a + b;
}
console.log("prototype property : "+add.prototype);
console.log(add.__proto__);

//setting the property of bike to house object
Object.setPrototypeOf(house,bike);
console.log("it doesn't have it's own prototype property it has only reference of it through __proto__  "+house.hasOwnProperty('prototype'));
console.log(house.age);