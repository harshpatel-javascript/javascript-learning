function helloWorld(message) {
  //(parameters)
  console.log(message);
}
helloWorld("helloworld"); //arguments

//imediate invocation with anonymous function
(function () {
  console.log("hello world1111");
})();

//arrow function
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
console.log("pass by value : "+person.age);
callByRef(person);
console.log(person);


//functions and closures
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();

alert(counter()); // output : 0
alert(counter()); // output : 1
alert(counter()); // output: 2

let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi();