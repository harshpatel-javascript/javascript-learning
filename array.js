//array initialization
let arr = [2, 3, 1, 4, 5, 6, 7, 8, 9, 10];

//array methods
console.log(arr.length);

//push method to enter the element in array at end
arr.push(12);
console.log(arr.length);
console.log(arr);

//delete the element from starting
arr.shift();
console.log(arr);

//delete the element from last
arr.pop();
console.log(arr);

//add element at starting of array
arr.unshift(2);
console.log(arr);

//sort method : because it compares the string of array
arr.sort();
console.log(arr);

//splice method : it inserts deletes and override 
let arr1 = ["I", "study", "JavaScript"];

//from index 0
//delete 2 element
let removed = arr1.splice(0,2);
alert(removed); // delted element would be "I" , "study"

// from index 2
// delete 0
// then insert "complex" and "language"
arr1.splice(2, 0, "complex", "language");

alert( arr1 ); // "I", "study", "complex", "language", "JavaScript"