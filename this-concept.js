let user1 = {
    name :"mika",
    legs:4,
    tails:1,
    friends:["tucker","bryan","chat"],
    //method
    sayHi : function() {
        console.log(this.name);
    }
}; 

let admin = user1;
user1 = null;

admin.sayHi(); // it gives us TypeError : cannot read property of null if we don't use "this"
//if we use "this" in method then we can access method  through any reference 


//arrrow function have no "this"
//they take reference from outer normal function like,
let user2 = {
    firstName: "Tucker",
    sayHi() {
      let arrow = () => console.log(this.firstName);
      arrow();
    }
  };
  
  user2.sayHi();  // "tucker"