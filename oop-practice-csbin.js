/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/
/*** CHALLENGE 1 ***/
function makePerson(name, age) {
	// add code here
  let person = {};
  person.name = name;
  person.age = age;
  return person;
}
const vicky = makePerson('Vicky', 24);

// /********* Uncomment these lines to test your work! *********/
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24
/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/
/*** CHALLENGE 2 ***/

const personStore = {
	// add code here
greet : function(value){
  console.log("hello");
}

};
// /********* Uncomment this line to test your work! *********/
personStore.greet(); // -> Logs 'hello'

/*** CHALLENGE 3 ***/

function personFromPersonStore(name, age) {
	// add code here
  let person = Object.create(personStore);
  person.name = name;
  person.age = age;
  person.greet = personStore.greet;
  return person;
}
const sandra = personFromPersonStore('Sandra', 26);

// /********* Uncomment these lines to test your work! *********/
console.log(sandra.name); // -> Logs 'Sandra'
 console.log(sandra.age); //-> Logs 26
 sandra.greet(); //-> Logs 'hello'

/*** CHALLENGE 4 ***/

// add code here
personStore.introduce = function (){
  console.log("Hi, my name is "+  this.name)
}
sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 5 ***/

function PersonConstructor() {
	// add code here
	this.greet = function(){
    console.log("hello")
  }
}
// /********* Uncomment this line to test your work! *********/
const simon = new PersonConstructor;
simon.greet(); // -> Logs 'hello'

/*** CHALLENGE 6 ***/

function personFromConstructor(name, age) {
	// add code here
  let personObject = new PersonConstructor;
  personObject.name = name;
  personObject.age = age;
	return personObject;
}
const mike = personFromConstructor('Mike', 30);

// /********* Uncomment these lines to test your work! *********/
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'

/*** CHALLENGE 7 ***/
// add code here

PersonConstructor.prototype.introduce = function(){
  console.log("Hi, my name is " + this.name);
}
mike.introduce(); // -> Logs 'Hi, my name is Mike'
/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 8 ***/

class PersonClass {
	constructor(name) {
    // add code here
    this.name =  name;
	}
	// add code here
  greet = () => {
    console.log("hello");
  }

}

// /********* Uncomment this line to test your work! *********/
const george = new PersonClass;
george.greet(); // -> Logs 'hello'

/*** CHALLENGE 9 ***/

// add code here
class DeveloperClass extends PersonClass {
  constructor(name){
    super(name);
  }
  introduce = () => {
    console.log(`Hello World, my name is ${this.name}`);
  }
}
// /********* Uncomment these lines to test your work! *********/
const thai = new DeveloperClass('Thai', 32);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

const userFunctionStore = {
  sayType: function() {
    console.log("I am a " + this.type);
  }
}

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}

/*** CHALLENGE 10 ***/
  // add code here
  const adminFunctionStore = Object.assign({},userFunctionStore);
  
/*** CHALLENGE 11, 12, 13 ***/
const adminFactory = (name, score) =>  {
  // add code here
  const admin = Object.create(adminFunctionStore);
  admin.type = 'Admin';
  // return admin; //this is important
}

/*** CHALLENGE 14 ***/
/* Put code here for a method called sharePublicMessage*/
adminFunctionStore.sharePublicMessage = function() {
  console.log("Welcome users!")
}

const adminFromFactory = adminFactory("Eva", 5);

// /********* Uncomment these lines to test your work! *********/
adminFromFactory.sayType(); // -> Logs "I am a Admin"
adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"

