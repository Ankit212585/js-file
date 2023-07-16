console.clear()
//parseInt


var num1 = 10.8 ;
console.log(num1.toFixed())

//split 

var str1 = "This is a split section"
console.log(str1.split(''))

//How to make clone array use to concat  and add more items

let str2 = ['item1','item2','item3']
console.log(str2)
 
var str3 = [].concat(str2);
console.log(str3)

var str3 = [].concat([str3,'item4','item5'])
console.log(str3)

//for loop in array

let fruits = ['apple','mango','graps','banana']
console.log(fruits[2])

for(let i =0; i < fruits.length; i++){
    console.log(fruits[i].toUpperCase())
} 

//for of loop in array

const str =['kivi','papaya','orange']
for(let str0 of str){
    console.log(str0)
}

//object is raference type
//arrays are good but not sufficient for real world data
//objects store key value pairs
//objects don't have index

//how to create object
const cars = {
    car: 'Maruti',
    model: '2023',
    speed: '240kmph',
    fule: 'petrol'

}
console.log(cars);
console.log(cars["model"]);

//how to iterate object

const person ={
    firstname: 'Ankit',
    lastname: 'panwar',
    age: 24,
    "perosn hobbies":['football','reading books','listening music']

}
console.log(person)
console.log(person["lastname"]);
console.log(person["perosn hobbies"[2]]);

//spread operators
const array1 = [1,2,2];
const array2 = [5,6,7];
const newarray = [array1,array2];
console.log(newarray)
console.log(...array1,...array2); 

//object destructuring

const band ={
    bandName: 'jai shree ram',
    famousSong: 'Ram shree Ram',

}
console.log(band);
console.log(band["bandName"]);
//and

const { bandName,famousSong } = band;
console.log(famousSong)


//object inside array

const users = [
    {user1:  1, firstname: "Ankit",lastname: "panwar", gender: "male"},
    {user1:  1, firstname: "Ravi",lastname: "saini", gender: "male"},
    {user1:  1, firstname: "Rohit",lastname: "gour", gender: "male"}
]
console.log(users)
//for of
for(let user of users){
    console.log(user);
    console.log(user.firstname)
    console.log(user.lastname)
}
  