const arr = [2,5,7];

let tag = document.querySelector(".array-const");
tag.innerHTML = arr;
arr[0] = 3, arr[1] = 1; //even after the const datatype array is still mutable
//because reassignment is not possible but we can change the value directly
tag.innerHTML = arr;

// (...) rest parameter
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }

console.log(sum(1,2,3,4,5));
console.log(sum(1,2,3,4,5,6,7,8,9));