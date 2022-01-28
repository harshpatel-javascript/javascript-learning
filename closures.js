function makeCounter() {
    let count = 0;
  
    function incrementCounter() {
      return count++;
    }
    return incrementCounter;
}
  
const counter = makeCounter();
  
console.log("closures output: "+counter()); // output : 0
console.log(counter()); // output : 1
console.log(counter()); // output: 2


