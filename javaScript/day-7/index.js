console.clear()
//main topic function
//function decleration
function number(num1,num2){
    return num1*num2
}
console.log(number(8,5))

function threevalue(num3,num4,num5){
    return num3 + num4 + num5;
}
const returnvalue = threevalue(4,8,5);
console.log(returnvalue);

//if even number function

function iseven(number1){
if(number / 5 === 5){
return true}
else if(number1 / 5 === 7){
    return true;
}else{
    return false;
}
}
console.log(iseven(35))

//function
//input: string
//output : firstcharacter

function firstcharacter(anystring){
    return anystring[0];
}
console.log(firstcharacter("Ankit"));

//function
//input: array, any taget (number)
//output: index of target if target present in array

function findtarget(array1,taget){
    for(let i = 0; i < array1.length;i++ )
    if(array1[i] === taget){
        return i;
    }
    return -1;
}
const myarray= [1,2,5,8,9,7]
const ans= findtarget(myarray,8)
console.log(ans);

//function expression
const hanuman = function(){
    console.log("Happy mahashivratri")
}
hanuman();

//arrow functions

 const threevalue1= (num3,num4,num5) =>{
    return num3 + num4 + num5;
}
const returnvalue1 = threevalue1(4,4,5);
console.log(returnvalue1);


const findtarget1 =(array1,taget) => {
    for(let i = 0; i < array1.length;i++ )
    if(array1[i] === taget){
        return i;
    }
    return -1;
}
const myarray1= [1,2,5,8,9,7]
const ans1= findtarget(myarray1,8)
console.log(ans1);

//functions inside function

const app = () =>{
    const myname = () => {
        console.log("My name is ankit")
    }
    const mynumber1 = (num,num0) =>{
         return num*num0;
    }
    console.log("inside app");
    myname();
    console.log(mynumber1(7,8));
}
app();

//block scop vs function scope
//let or const are block scop
//var is function scope
 
//{
  //  let myheading ="Hy my name is ankit"
//}
//console.log(myheading)

{
    var myheading1 = "hey this is manisha how are you"
}
console.log(myheading1)
//because let or const are the block level scope and the var is gobal scope function


 

