function printHello(){
    console.log("still be the last hello");
}
setTimeout(printHello, 0);
//because of callback queue
console.log("Me first");