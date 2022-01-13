var i;
console.log(i);
i = 1;
document.getElementById("name").innerHTML = "first var" + i;

let newLet;
newLet = 0; //initialization can be done later for var
document.getElementById("let").innerHTML += "<br>" + newLet;

function passValue() {
  let newLet = "hello there";
  document.getElementById("let").innerHTML += "<br>" + newLet;
}
passValue();
document.getElementById("let").innerHTML += "<br>" + newLet;

function hello() {
  let val = prompt("let me check whether your fav. num is even or odd?");
  console.log(typeof val);
  if (val == "") {
    alert("you don't want to say your fav num!!!");
  } else if (val % 2 != 0) {
    alert("your fav. num is odd.");
  } else {
    alert("your fav. num is even.");
  }
}
