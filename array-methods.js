const arr = [2,4,8,10];

//map method : mapping each element of array and doubling it
//msp mrthod also creates the new array of elements
const arr1 = arr.map(val => val*2);
console.log("with map method " + arr1);

//filter method : filter out the elements based on given condition
//create new array of elements which passes the test
const arr2 = arr.filter(val => val>8)
console.log("filter method " + arr2);

//reduce method :  reducing to one item of array as some of all elements
const arr3 = arr.reduce((preValue, currVAlue) => preValue+currVAlue);
console.log(arr3);