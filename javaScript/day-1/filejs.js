"use strict"

console.clear()

//Return the length of the string

var myFirstString= " I    a     This is a String for javascript string functions"
console.log(myFirstString.length)

// Find the Index of a string inside another string

console.log(myFirstString.indexOf("javascript"));
console.log(myFirstString.indexOf('I'))
console.log(myFirstString.indexOf("This"))
console.log(myFirstString.indexOf("Ankit"))


//Get a part of our string slice

console.log(myFirstString.slice(0,6))
 
console.log(myFirstString.slice(2,10))

//Get sub string function-substr(start-position,length)

console.log(typeof(myFirstString).substr(0,10))

console.log(myFirstString.substr(5,8))

// trim string this string remover the spaces

var mynewstring="This is the trim string"
console.log(mynewstring.length);
console.log(myFirstString.trim())

