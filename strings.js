let str = "hello world";

//gives the length of string
console.log(str.length);

//converts string into upercse and lowercase
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//for...of iterator
for(let char of str){
    console.log(char);
}
console.log(str.indexOf("rld"));
console.log(~2);


//slicing the string
console.log(str.slice(1,4));
let str1 = "   hello world11   ";
console.log(str1.trim());