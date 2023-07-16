//we have an seven types of loop
//While Loop*
//For loop*
//Do while loop*
//foreach loop*
//for-in loop*
//for of loop*
//map loop*


//While Loop in JS
 /**
  * while(condition){
  *     code for execution
  * }
  * 
  */
var num= 0;

while(num <= 10){
  num++
  console.log(num)
}
ournum = num+num;
console.log(ournum)
  
//while loop
let friends = "1"
while(friends <= 5 ){
    friends++
    console.log(friends)
}
 /*
    for(intialization;condition;increment/decrement)
*/ 


 for(let k = 0; k <= 4; k++){
    console.log(k)
 }
 //for loop example

let total = 0;
let num10 = 10;
for(let k = 0; k <=num10; k++ ){
    total = total + k;
}
console.log(total)
// for loop example

for(let j = 0; j <=20 ; j++){
     
    total = total + j;
}
console.log(total)

//break keyword

for(let R=0; R <= 10; R++){
    if(R === 5){
        break;
    }
    console.log(R)
}
// continue keyword
 let no= 0;
 while(no <= 5){
    no++
    if(no === 3){
        continue;
    }
    console.log(no)
 }

/**
  * Do While Loop
  * do{
  *     code for execution
  * 
  * } while(condition)
  */

let L = 0;
do{
    console.log(L)
    L++
}while(L <= 3 ){
   
}
//Because fistly print the value and than conditions apply, when we write
let u = 10;
do{
    console.log(u)
    u++
}while(u <= 10){
   
}

//foreach loop in js, we use arrays

const arr = [100,200,300];
arr.forEach(val =>console.log(val));

//forEach loop example

const arrr = [500,700,900];
arrr.forEach(val => console.log(val));

//ForIn loop

const obj = {Firstname: "Ankit", LastName: "Panwar", Age: 24};
for(let prop in obj){
    console.log(prop+ ':' +obj[prop])
}

//forOf loop

const name = ["Ankit","sumit","Rohit"];
for(let prop of name){
    console.log(prop);
}

//Map loop in js

const mfriends = ["Khushi","sonali","jahalk"];
const temparr = mfriends.map(v => v+2);
console.log("temparr",temparr)







