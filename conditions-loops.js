// conditional operator, loops

function switchWeeks() {
  let week = prompt("enter the number between 1-7");
  switch (week) {
    case "1":
      console.log("Monday");
      break;
    case "2":
      console.log("Tuesday");
      break;
    case "3":
      console.log("Wednesday");
      break;
    case "4":
      console.log("Thursday");
      break;
    case "5":
      console.log("Friday");
      break;
    case "6":
      console.log("Saturday");
      break;
    case "7":
      console.log("Sunday");
      break;
    default:
      console.log("Invalid number");
  }
}

let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

