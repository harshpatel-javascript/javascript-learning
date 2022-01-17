function helloWorld(message) {
  //(parameters)
  console.log(message);
}
helloWorld("helloworld"); //arguments

//imediate onvocation with anonymous function
(function () {
  console.log("hello world1111");
})();

//arroew function
let fun = () => {
  console.log("this is from fun variable");
};

fun();

//call by value and call by reference
let person = {
  firstName: "harsh",
  lastName: "Patel",
  age: 25,
};
function callByRef(obj) {
  obj.age += 1;
  console.log(obj.firstName + " " + obj.lastName + " " + obj.age);
}

function callByVal(variable) {
  variable += 1;
  console.log(variable);
}
callByVal(person.age);
console.log(person.age);
callByRef(person);
console.log(person);
