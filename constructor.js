//constructor wih function name starting with capial letter
function User(name,age){
    this.name = name;
    this.age = age;

    //methods in constructor
    this.sayHi = function(){
        console.log("hello " + this.name);
    }
}

let john = new User("john",29);
alert(john.age);


let dan = new User("Dan",35);
alert(dan.name);
dan.sayHi();