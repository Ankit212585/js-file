"use strict"
console.clear()

var num1= 5;
var num2= 6;
var num3= 10;
var num4= 45;

var sum= num1+num2+num3+num4; 

var firstname= "Ankit"
console.log(sum,firstname);

// use another variable

var value1= 10;
var value2= 20;

console.log(value1+value2-10);
 
// we can't use the space, we only use the dollar singh _ this singh we use 
var $firstname= "Gourav"
console.log($firstname)

//start with small letter and use camelcase

// let keywords connot be changed but variable are changeable
// this is veriable its changes the first name
var firstname1= "ankit"
 firstname1= "gourav"

console.log(firstname1);

//let cannot be changed

let first= "ankit"
let second= "mohit"

console.log(first)
console.log(second)


// string indexing

let firstnum1= "Ankitdfhiuasdhfiadfia"

// every letter have an index i can show you
//       A  n  k  i  t
//       0  1  2  3  4

// we know that the last index number is 4 ,but suppose we don't know what is the last index number
// so we can do this


console.log(firstnum1[3]) 
console.log(firstnum1[firstnum1.length-1])
console.log(firstnum1[firstnum1.length-7])

//  like this

// trim string this string remove the spaces and get the accurate length

var mynewstring="This is the trim string"

 mynewstring.trim();
console.log(mynewstring.length)

// toUpperCase()

var mymiddleString="ankit"

console.log(mymiddleString.toUpperCase());

// to lowercase()

console.log(mymiddleString.toLowerCase())


