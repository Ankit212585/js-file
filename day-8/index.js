//hoisting

hello()
function hello(){
    console.log("hello world");
}

//function inside function
function app(){
    const myfunk = () =>{
        console.log("hello my world")
    }
    const funk = () =>{
        console.log("this is my world")
    }
     myfunk()
     funk()
}
 app() 

//default perameters

function addtwo(a,b=0){
    return a+b;
}
const anm =  addtwo(4,5)
console.log(anm)

//rest perameters

 function addAll(...numbers){
    let total = 0;
for(let number of numbers){
    total = total + number;

}
return total;
}
const ans=  addAll(4,5,8,5);
console.log(ans);
 
//callback function

function mylock(k,h,g){
    console.log(k,h,g)
    console.log("Hello world")
}
function mylock2(){
    console.log("inside preview")
}
mylock(1,2,3);
mylock(mylock2())

 //for example

 function ankit(){
    console.log("Hello ankit")
 }
 function mohit(f){
    console.log(f)
    console.log("inside preview")
 }
ankit();
ankit(mohit(5))
mohit(5)

//function returning function

function myover(){
    return "a";
}
 const myvalue = myover();
 console.log(myvalue);

 //for example

 function allover(){
    return "hello world";

 }
 const thisover = allover()
 console.log(allover())
  
//important method of array
//foreach
//map
//filter
//reduce

const thisone = [4,5,6];

function value(thisone, index){
   console.log(thisone,index)
}
thisone.forEach(function(thisone,index){
    console.log("this is a array",thisone*2,"index is",index)
})

//for example

const users = [
    {firstname: "ankit", age: "24"},
    {firstname: "mohit", age: "21"},
    {firstname: "ravi", age: "30"},
    {firstname: "khushi", age: "17"}
]
//users.forEach(function(users){
 //   console.log("This is my firstname",users.firstname);
//})

for(let user of users){
    console.log("This is my firstname",user.firstname)
}

//map method
const what = [1,5,8,2,8,];

function square(what){
    return what*what;
}

what.map(square);
console.log(what)

//filter function is the array method
const array1 = [1,2,4,9,3,7];

const evennumber= array1.filter((number)=>{
    return number % 2=== 0;
    
});
const oddnumber =  array1.filter((number)=>{
    return number % 2 === 1;
});
console.log(evennumber);
console.log(oddnumber);
console.log(typeof(evennumber))



