console.clear()
//This is are veriables
// var sum number

var num1 = 10;
var num2 = 20;
var sum=  num1 + num2;

console.log(sum)
console.log(typeof(sum))

// var subtract number

var num3 = 90;
var num4 = 50;
var subtract= num3-num4;
console.log(subtract)
console.log(typeof(subtract))

//var devide number

var num5= 1050;
var num6= 8;
var devide= num5/num6;
console.log(devide)
console.log(typeof(devide))

//var multiplay number

var num7= 8;
var num8= 9;
var multiplay= num7*num8;
console.log(multiplay)
console.log(typeof(multiplay))

//There are three types of veriables
//camel veriable
//pascel veriable
//snake case veriable

//camel veriable
//all alphabat are small

var mystring= "This is my practic session"
console.log(mystring)
console.log(typeof(mystring))

//pascel veriable
//In this veriable we use 1st alphabat are capital all are the smaller

var Mysting= "This is javaScript and i'm practic the pascel veribale"
console.log(Mysting)
console.log(typeof(Mysting))

//Snake case veriable
//some keywords can't be understand , then we use the _ type to understand the keywords like Ankit_panwar

var my_string= "This is snake case veriable type"
console.log(my_string)
console.log(typeof(my_string))

//ParseInt numbers and toFixed value

var num= 10.5;
var thisstring= 10.9444656;

console.log(parseInt(num))
console.log(thisstring.toFixed())
console.log(thisstring.toFixed(3))

// String length

var firststring= "Hello my name is Ankit Panwar and this is my practic session of javaScript"
console.log(firststring.length)


//Indexof, we got the particular line length

var mystring1= "This is my visiual code software and i'm practic here"
console.log(mystring1.indexOf("software"))


//Slice says get a part your string start to end, and this is your choice to what is your starting point and which is your ending point

var mystring2= "Today i'm soo happy because today is someone birthday"
console.log(mystring2.slice(0,10))
console.log(mystring2.slice(8,35))
console.log(typeof(mystring2))
// slice is also take the nagativ value

console.log(mystring2.slice(-35,-10))

//Substr function

var myfirst= "this is our veriables in javaScript"
console.log(myfirst.length)
console.log(myfirst.substr(0,4))
console.log(myfirst.substr(5,15))
console.log(myfirst.substr(12))

// Day-2
//to_Upper_case
//to_lower_case

var varstring= "Hello Guys I'm Ankit"
console.log(varstring)
console.log(varstring.toUpperCase())
console.log(varstring.toLowerCase())


//concat string, it merge two or more diffrent strings

var varstring1= "Hello my name is Gourav"
var varstring2= "and my name is Ankit "
var varstring3= "we are childhood friends"
console.log(varstring1.concat(' ',varstring2,varstring3))
console.log(varstring1 + varstring2 + varstring3.toUpperCase())

  //charAt string, In any case you want to anyone single alphabat

  var extra= "This is my middle string"
  console.log(extra.trim())
  console.log(typeof(extra))
  console.log(extra.charAt(9))

  // Split() split string is using the argument passed

  var extra1= "This is my laptop and I'm working on javaScript"
  console.log(extra1)
  console.log(extra1.split())
  console.log(extra1.split(' '))

   //bolleans and comperisons
   //Bolleans defined only two values ture and false
   //Comperisons operators , compare the to numbers who is greater than or less than.
   //they are conected both of them

   var num50 = 80;
   var num49 = 68;
   console.log(num50 > num49)
   console.log(num50 < num49)

   //Arthmatic operators
   //Addition = '+'
   //Subtraction = '-'
   //Multiplaction = '*'
   //Devision = '/'
   //modules = '%'
   //Increment = '++'
   //decrement = '-'


   //Addition

   var num20 = 47;
   var num21 = 37;

   var sum = (num20 + num21)
   console.log(sum)

   //subtraction

   var num22 = 98;
   var num23 = 58;
   var subtraction = (num22 - num23)
   console.log(subtraction)

   //Devision

   var num24 = 500;
   var num25 = 5;
   var Devision = (num24 / num25)
   console.log(Devision)

   //Multiplaction

   var num26 = 8;
   var num27 = 9;
   var multiplay = (num26 * num27)
   console.log(multiplay)

   //Modules

   var num0 = 50;
   var num28 = 8;
   var modules = (num0 % num28)
   console.log(modules)
   
//Increment

var num29 = 80;
var num30 = 89;
//post
console.log(num29++)
console.log(num29)

//Pre
console.log(++num30)
console.log(num30)

 //Decrement

 var num31 = 87;
 var num32 = 78;

//post
 console.log(num31--)
 console.log(num31)

 //pre
console.log(--num32)
console.log(num32)

//Question no. 1

function findposition(array,target){
  for(let m = 0; m < array.length; m++){
    if(array[m] === target)
    return m

  }
  return -1
}
const myarray = [1,2,3,4,5,1,3];
const ans =findposition(myarray,5)  
console.log(ans)

const string = "Hello";
console.log(string.reverse)
 
//5 Question
const Name = "Hello";
const reversedName = Name.split("").reverse().join("");
prompt("write Hello").reversedName;
console.log(reversedName)

//5 question
 
  

 

 






 









