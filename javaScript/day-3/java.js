 

// and operator
let firstname= "ankit";
let age= '18';
if(firstname[0] === "a" && age>=18){
    console.log("name start with the first latter a and above age is 18");
}else{
    console.log("nothing else")
    
}

// or operator

let firstname1= "rohit";
let age2= '19';
if(firstname1[0] === "r" || age2>= 20){
    console.log("name start with the first latter r and above age is 18");
}else{
    console.log("nothing else")
    
}
// nested if else

 let winningNumber= 7;
 let userguess= prompt("Guess a number")

 if(userguess === winningNumber){
    console.log("you are right")
 }else{
    console.log("your guess is wrong")
 }