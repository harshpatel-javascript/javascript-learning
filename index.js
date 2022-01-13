var i;
i = 1;
document.getElementById("name").innerHTML = "first var" + i;

var newLet;
newLet = 0; //initialization can be done later for var
document.getElementById("let").innerHTML += "<br>" + newLet;

function passValue() {
  let newLet = "hello there";
  document.getElementById("let").innerHTML += "<br>" + newLet;
}
passValue();
document.getElementById("let").innerHTML += "<br>" + newLet;
