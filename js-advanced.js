const arr = [2,5,7];

let tag = document.querySelector(".array-const");
tag.innerHTML = arr;
arr[0] = 3, arr[1] = 1; //even after the const datatype array is still mutable
//because reassignment is not possible but we can change the value directly
tag.innerHTML = arr;

// (...) rest parameter : it is used when e want to copy the whole object into another one
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }

console.log(sum(1,2,3,4,5));
console.log(sum(1,2,3,4,5,6,7,8,9));


//array destructuring : we can use it when we have2 elements and we wanted to swap it
//but if we use const then we can't change it. it gives undefined syntaxError
let [a, b, ...arr1] = [1, 2, 3,4];

console.log(a, b);
console.log(arr1);

//object destructuring
let obj = {
  firstName : "tucker",
  lastName : "dan",
  features:{
    tail :1,
    legs:4,
    ears:2,
  }
}
//extrating value from object
let {firstName,lastName} = obj;
console.log(obj.firstName);

//extracting value from object and assigning to new variable
let {firstName : objName,lastName : objSurname} = obj;
// above ine is same as
// let objName = obj.firstName

console.log(objName); // assigning the value of obj.firstName directly to objName

//it would be same for nested object as well
let {features:{tail:userTail,legs:userLegs}} = obj;
console.log(userTail+ "  " + userLegs);


//template literal
console.log(`the dog name is ${obj.firstName}. it has ${obj.features.tail} tails.      `)
