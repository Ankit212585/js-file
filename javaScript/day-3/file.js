let temperture = 10;

if(temperture < 0){
    console.log("its cold")
}else if(temperture <= 16){
    console.log("its warm day")
}else if(temperture <= 30){
    console.log("it hot")
}else if(temperture <= 45){
    console.log("its too hot")}
else if(temperture <= 55){
    console.log("its normal temperture")
}else if(temperture <= 75){
    console.log("its too hot like fire")  
} 

 var num1= 10;
 var num2= 30;
 var num3= 40;

 num1 + 10;
 console.log(num1)


num1 += 10;
console.log(num1)

num1 += num2
console.log(num1)

num3 -= num2
console.log(num3)

num1 *= num2 
console.log(num1)

num1 += num2 -= num3
console.log(num1)

// comprasion and logical operators

//comprasion operators

if(5 === 5) {console.log(true)} else {console.log(false)}
if(5 === 7) {console.log(true)} else{console.log(false)}

// And operators

if(5 < 6 && 6 > 7) {console.log(true)} else {console.log(false)}
if(5 < 6 && 7 < 8) {console.log(true)} else {console.log(false)}

// Or operators

if(5 == 8 || 6 == 5) {console.log(true)} else {console.log(false)}
if(6 > 5 || 7 > 5) {console.log(true)} else {console.log(false)}
if(5 > 7 || 7 == 7) {console.log(true)}else {console.log(false)}
if(5 == 9 || 7 == 8){console.log(true)}else{console.log(false)}
// practic

var mystring= 'apple';
var num= 20;
var sum= (mystring +' '+ num)
console.log(sum)
console.log(typeof(sum))


// typeof string

var mystring= 'apple';
console.log(typeof(mystring))

//objects

var mycar= {
    "car" : "i20",
    "speed" : "240kmph",
    "model" : "2023",
    "manufacture" : "india",
}
console.log(mycar)

var mycar1= {
    "car" : "i20",
    "speed" : "240kmph",
    "model" : "2023",
    "manufacture" : "india",
}
console.log(mycar1.speed)
console.log(mycar1.manufacture)
console.log(mycar1.model)

var mystring1= 10.9;
console.log(parseFloat(mystring1))

 
let ankit = 'f';
switch(ankit){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
}if(ankit >= 'a' && ankit <= 'z'){
console.log(ankit+'', "is a constant")}
else if(ankit >= 'A' && ankit <= 'Z'){
console.log(ankit+'',"is a constant")
}
var myfriends = ['Ravi','rohit','Aryan','chahat']
console.log(myfriends)
console.log(myfriends[2])

//update list
 myfriends[4] = 'jyoti'
 console.log(myfriends)

 myfriends[myfriends.length] = 'vishal'
 console.log(myfriends)

 myfriends[10] = 'monika'
 console.log(myfriends)

 //push
 myfriends.push('mahadev')
 console.log(myfriends)

 //delet value
 myfriends.pop()
 console.log(myfriends)
 
//object Literals

student = {firstname: 'Ankit',Lastname: 'Panwar',Age:'24'}
console.log(student)
console.log(student.Age)

//object creating instance.

var principal = new Object();
principal.id = 10050;
principal.Name = "Ankit panwar"
principal.position = "Teacher"
principal.salary = "15 LPA"

console.log(principal)
console.log(principal.id,(principal.Name))

//by using constructor obj.

function ourinfo(id,Name,Age,Salary){
    this.id = id;
    this.Name = Name;
    this.Age = Age;
    this.Salary = Salary;
}
Rohit = ourinfo(10050,"Ankit panwar", 24 , 1500000)
console.log(Age+' '+ Name + ' ' + id + ' ' +Salary)

//Arrays section

var mytechers = ["Ankit","Priya","Neha","Sushma"]
console.log(mytechers)
console.log(mytechers[2])

//Array length

console.log(mytechers.length)

//Add items

mytechers[10] = "darla"
console.log(mytechers)

//we don't know the myteacher length and how to put a name in last

mytechers[mytechers.lenght] = 'jack';
console.log(mytechers)

//know we delet any name
mytechers.pop(2) 
console.log(mytechers)

//nested number if else
//prompt function

 let winningno= 12;
// let userguess = +prompt("Guess the number")
 
 if(userguess === winningno){
    console.log("your guess is right!!!");
   
 }else{
     if(userguess < winningno){
        console.log("your no. is too low!!!")
     }else{
        console.log("your no. is too high!!!")
     }  
 }
 
 document.write(userguess ===  winningno)