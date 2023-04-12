// console.log('hello world')


// 1.values and variables in javascript
// var myName = 'giridhari jha';
//  here we have var as a variable and myName as a name  and giridhari jha as a value

// var var = 26;  //we can't use already declared library in naming
// var myAge = 20;

// console.log(myAge);


//  2.challenge  naming practice
// var _myName = "giridhari";
// var 1myName  = "kumar";
// var _1my__Name = "bahadur";
// var $myName = "giridhari jha 3m";

// console.log()
// the second answer is wrong .

// 3. data types in javascript
// * undefined : typeof instance == "undefined"
// * boolean: typeof instance == "boolean"
// * Number : typeof instance == "number"
// * string : typeof instance == "bigint"
// * symbol : typeof instance == "symbol"

// var myName = "giridhari";
// console.log(myName) 

// var myAge = 20;
// console.log(myAge)

// var iAmGiridhari = true;
// console.log(iAmGiridhari);

// typeof operator
// console.log(typeof(myAge));

// 4. datatype practice
// *console.log(10 + "20"); = 1020
// *console.log(9- "5"); = 4 //(it's a bug)
// *console.log("java" + "script"); = javascript
// *console.log(" " + " "); = empty
// *console.log(" " + 0); = 0
// *console.log("vinod" - "thapa"); = NaN (not a number)
// *console.log(true + true); = 2 (true=1 ,false =0)
// *console.log(true + false); = (1)
// *console.log(false + true); = 1
// *console.log(false - true);= -1


// 5. interview question
// *difference between null and undefined?

var iAmUseless = null;
console.log(iAmUseless);
console.log(typeof(iAmUseless)); // 2 its a bug because its null can not be an object


var iAmStandBy;
// means that cannot be used or can be used further
console.log(iAmStandBy);
console.log(typeof(iAmStandBy));


// * what is NaN?
//  NaN is a property of the global object.
// it is also a variable in global scope.
// the initial value of NaN is Not-A-Number.

// 6.Expression and Operators
// ( 5 + 25)  here 5 and 25 = operand , + = operator and all combined  makes an Expression
// *a . Assignment operators
// an assignment operator assigns a value to its left operand
// based on the value of its right operand Assignment
// the simplest assignment operator is equal (=)


var x = 5;
var y = 5;

console.log("is both the x and y are equal or not" + x == y);

// *b. Arithmetic operators
// an arithmetic operator takes numerical values
// returns a single numerical value
 
// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*6);

// console.log("Remainder operator" + 27%4);


// *c string concatenation(operator)
// the concatenation operator (+) concates two string together
// returning another string that is the union of the string

// console.log("Hello world");
// console.log("hello " + " world");

// var myName = "giridhari"
// console.log(myName + "kumar");
// console.log(myName + " kumar jha");


// * challenge time
// what will be the output of 3**3?
console.log(3**3); //27
// what will be a output when we add a number and a string?
console.log(10 + "20"); //1020
// write a program to swap two numbers?
var a =10;
var b= 20;
// var c = a;
// a= b;
// b=c;

// console.log("the value of a is " + a);
// console.log("the value of b is " + b);
//* write a program to swap two numbers without using third variable?
a = a+b ; // a = 30
b = a-b; // b = 10
a = a-b; //a = 20
console.log("the value of a is " + a);
console.log("the value of b is " + b);

// *interview questions
// what is difference between == vs ===?
// as we know that == only checks the value but === checks the value as well as data types .
var num1 = 5;
var num2 = '5';

console.log(typeof(num1));
console.log(typeof(num2));
console.log(num2);

console.log(num1 == num2);
console.log(num1 === num2);


// 7. CONTROL STATEMENT AND LOOPS
//  *a .if...else
// the if statement executes a statement if a specified condition is truthy.
// if the statement is falsy, another statement can be executed.


// var tomr = 'sunny';
// if(tomr = 'sunny'){
//     console.log ('take a raincoat');    
// }else{
//     console.log('no need to take a raincoat');
// }

// // challenge tym
// // write a program that works out whether if a given year is a leap year or not?

// var year = 2020;
// if(year % 4 === 0){
//     if(year % 100 === 0){
//         if(year % 400 ===0){

//             console.log("The year is " + year + " is a  not leap year");
         
//         }   
//     else{
//         console.log("The year is " + year + " is a  not leap year");

//     }
//     }
// else{
// console.log("The year is " + year + " is a  leap year");

// }
// }
// else{ 
// console.log("The year is " + year + " is a  not leap year");
   
// }


// * what is truthy and falsy values in javascript'
// we have total 5 falsy valuzes = (0, "", NaN , null, False** is falsy )
// if we use any of the 5 values to anywhere then it will be false values

// *b. CONDITIONAL TERNERY OPERATOR 
// the conditional ternery operator is the only javascript operator which takes three operand
// #syntax = variablename = (condition) ? value1 : value2

var age = 18 ;
console.log((age>= 18)? "you can see adult movie": "you can't see adult movie");

// *c. SWITCH STATEMENT
// evaluates an expression , matching the expression value to a case clause, and executes statements associates with that case.
var area = "cubiod";
var PI = 3.142 , l = 5, b= 4,h=9, r = 3;

switch(area){
    case 'circle':
        console.log("the area of the circle is :" + PI*r**2);
        //*c. break
        // terminates the current loop,or label statement and transfer data
        //program control to the statement following the terminated statement.
        break;
        case 'cubiod':
        console.log("the area of the cubiod is :" + (l*b*h));
        break;
    case 'rectangle':
        console.log("the area of the rectangle is :" + (l*b));
        break;
    default:
        console.log("please enter a valid data")


}

// *d WHILE LOOP
// the while statement creates a loop that executes a specified statement
// as long as the test condition evaluates to true.

// var num = 10 ;
// // block scope - matlb agr condition sahi hai tabhi bracket k under jayega
// while(num <= 100)
// {
//     console.log(num);
//     num++;
// }
// *e. DO WHILE LOOP
// isme pahla output aane k bad condition check hota hai agr condition galat v hua to aayega hi
var num = 20;
do{
    console.log(num);
    num++;
}while (num <= 10);

// *f. FOR LOOP
// syntax 
// from above example of while loop
// for(var num = 0; num <= 10; num++){
//     console.log(num);
// }
// challenge- print a table for given number (8,9,12,15) using for loop?
for (var num = 1 ; num <= 10 ; num++ ){
    var tableof = 15;
    console.log(tableof*num);

}

// 8. FUNCTIONS IN JAVASCRIPT
// it is a block of code designed to perform a particular Task
// we have to define a function and then after a function consists of functions keyword
// the name of the functions.
// a list of parameters to the functions , enclosed in paranthesis and seperated by commas and defined under {..}

// function sum(){
//     var a = 10, b = 40;
//     var total = a + b;
//     console.log(total);
// }

// sum();

// *A.INTERVIEW QUESTION? FUNCTIONS PARAMETER VS FUNCTION ARGUMENTS
// parameter are the names listed in the function's definitions
// arguments are the real values passed to the functions

function sum(a,b){
    var total = a +b;
    console.log(total)
}
sum(20,34);

// WHY WE USE FUNCTIONS?
// YOU CAN REUSE CODE:  DEFINE THE CODE ONCE AND USE MANY Times 
// can use many times with different arguments


// *b. FUNCTIONS EXPRESSIONS 
// "IT MEANS CREATE  a fnctions and put into the variable"
function sum(a,b){
    var total = a +b;
    console.log(total)
}
var funExp = sum(20,44);


// *C. RETURN KEYWORD
// when javascript reaches a return statement,
// the function will stop executing. 

// function often compute a return value .
// the return value is returned back to the "caller".

function sum(a,b){
    return total = a+b;

}

var funExp = sum(5,25);

console.log('the sum of the two no is ' + funExp);

// *D.  ANONYMOUS FUNCTIONS
// a function expression is similar to and has the same syntax
// as a function declaration one can define "named"
// function expressions(where the name of the functions might be used in the call stack for example)
// or "anonymous function" expression

var funExp = function(a,b){
    return total = a+b;
}
var sum = funExp (15,12);

console.log('the sum of the two no is' + sum);


//9. ECMASCRIPT - FEATURES OF ECMASCRIPT 2015 IS ALSO KNOWN AS ES6
// TEMPLATE LITERALS (template strings)
// javascript program to print table for given number(8)
for(let num = 1; num<= 10; num++){
    let tableof = 12;
    // we need not to use commas
    console.log(`${tableof}* ${num} = ${tableof*num}`);
}

// 10. DEFAULT PARAMETERS
// default func parameter allow named parameters to be initialized
// with default values if no value or undefined is passed.
// ye hame default values dega .. agar ham bad mkoi aur value pass na v krega to koi bat nahi
function mult(a,b=5){
    return a*b;
}

console.log(mult(5));

// 10. FAT ARROW FUNCTION- very useful function
// normal way of writing 
// console.log(sum());

// function sum(){
//     let a = 5; b= 6;
//     let sum= a+b;
//     return `the sum of the two number is ${sum}`;
// }


// *way of writing fat arrow function
// syntax 
// const sum = () => { 

// }
// we can write only in one line using fat arrow
// const sum= () => `{the sum of the two number is ${(a=5) *(b=7)}`;

// console.log(sum());

// 10.ARRAYS IN JAVASCRIPT
// *IF WE WANNA to store multiple data in one variable then we use Array. 
// *we can store different data type in same array in javascript ...but in another language we can only store only one datatype
// *var myFriend = ['tripti',22,female,'aditi',20,female, 'vishal',true 23];
    // index :       0     ,   1,  2    ,  3   , 4 , 5   ,   6     ,  7  , 8
          //    lower index                                        upper index                                                  



// *A. TRAVERSAL IN ARRAY
// IF WE ANNA TO GET SINGLE DATA AS WELL AS TO CHANGE THE DATA
var myFriend = ['vinod','ramesh','arjun','giridhari']
console.log(myFriend[1]); // if we wanna get data of 1th index

console.log(myFriend[myFriend.length-1]); //if we wanna get last element as a output

// if we want to check the length of element of an array
console.log(myFriend.length);


//*B. difference between for loop ;for in loop ; and for of loop;
var mySon = ['saurav','ramesh','arjun','giridhari']

// for (let i=0 ; i<mySon.length ;i++){
//     console.log(mySon[i]);
// }

// * FOR IN LOOP - it tells about the index of the element present in the array
for(let elements in mySon){
    console.log(elements);
}

// * FOR of LOOP - it tells about the content of the element present in the array
for (let element of mySon){
    console.log(element);
}

// *C. ARRAY.PROTOTYPE.forEach()
// call a function for each element in the array.

var myDog = ['saurav', 'yash','prakash'];
myDog.forEach(function(element, index,array){
    // console.log(element + " index: " + index + ": " + array);
    console.log(`${element} ,index number :${index} of ${array}`);
});




// *D. Array.prototype.push()
// the push() method adds one or more elements to the end of an array and returns the new length of the array.
const animal = ['buffalo','cow','goat','lion'];

// const count = animal.push('chicken');
// console.log(count);
animal.push ('girrafe','elephant','monkey');
console.log(animal);

// *E. UNSHIFT METHOD() = LIKE PUSH METHOD , UNSHIFT METHOD ALSO ADD ADD ELEMENT BUT FROM STARTING OF THE ARRAY
const animals = ['pigs', 'goat','turtle'];
animals.unshift('chicken', 'cats','cow');
console.log(animals);

// *F . POP()= removes the last element from an array and returns that element. this method also changes the length of the array
const plants = ['broccoli', 'cauliflower','kale', 'tomato', 'cabbage'];
console.log(plants);
console.log(plants.pop());
console.log(plants);

// CHALLENGE TIME 
let month = ['jan','march','april','june','july'];
// A.add dec at the end of an Array? using splice method
let newMonth = month.splice(month.length,1,"Dec"); // ( index of array lenght , the index which u wanna delete,the item which u wana update)
console.log(month)

// splice method example

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 3, add 2 elements:
fruits.splice(3, 0, "Lemon", "Kiwi");
//B. what is the return value of splice method?
// it returns the data which u wanna delete in the form of array


// C. update march to March (update)?
// const months = ['jan','march','april','june','july'];
//* const updateMonth = months.splice(1,1,'March');
//* console.log(months);
// const indexOfMonth = months.indexOf('march');

// if(indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth,1,'March');
//     console.log(months);
// }else{
//     console.log('NO such data found');
// }

// D.Delete June from an array?
const monthEnd = ['jan','march','april','june','july'];
// *const newMonthEnd = monthEnd.splice(3 , 1);
// *console.log(monthEnd);

// const indexOfMonth = monthEnd.indexOf('june');
// if(indexOfMonth != -1){
//     const updateMonth = monthEnd.splice(indexOfMonth,1);
//     console.log(monthEnd);
// }else{
//     console.log('NO such data found');
// }

// 10. G. MAP(),REDUCE () AND fILTER() METHOD
// *let newArray = arr.map(callback(currentValue[, index[, array]]){
//     return element for newArray , after executing something 

// }[, thisArg]);
// *returns new array containing the results of calling a 
// function on every element in this array. 
// const array1 = [1, 4, 9, 16, 25];
// let newArray = array1.map((curElem, index , arr) => {
//     return `Index no = ${ index } and the value is ${ curElem } belongs to ${arr} `
// }).reduce().filter() 
// console.log(newArray);
//* CHALLENGE TIME 
// 1. FIND THE SUARE ROOT OF EACH ELEMENT IN AN ARRAY?
// let arr = [25,36,49,64,81];

// let newArr = arr.map((curElem) => {
//     return  Math.sqrt(curElem) ;
// });
// console.log(newArr);

// 2. multiply each element by 2 and return only those elements which is greater than 10?
// let arr = [2,3,4,5,6,8];

// let newArr = arr.map((newElem) => {
//     return  2*newElem;
// } ).filter((newElem) => {
//     return newElem >10;
// })
// console.log(newArr);

// * we can write above code in one line from fat arrow
// let newArr = arr.map((newElem) => 2*newElem ).filter((newElem) => newElem >10);
// console.log(newArr);


// 10.H. REDUCE METHOD
// flatten an array means to convert the 3d or 2d array into a single  dimensional array

// the reduce () method executes a reducer function (that you provide)
// on each element of the array, resulting in single output value .

// the reducer function takes four arguments :
// Accumulator - like a box when some task perform  all task stored in it. 
// current value
// current index
// source array 

// Initial Value - if any data already you have .

let arre = [5,6,3];

let newSum = arre.reduce((accumulator, curElem)=>{
    return accumulator +=  curElem;
},8)
console.log(newSum);


// * how to fattern an array
// converting 2d and 3d array into one dimensional array
const arr = [
    ['zone_1', 'zone_2'],
    ['zone_3', 'zone_4'],
    ['zone_5', 'zone_6'],
    ['zone_7', 'zone_8'],

];

let flatArr = arr.reduce((accum, curVal) =>{
    return accum.concat(curVal);
});
console.log(flatArr);
// if we have array under array then we can reduce method by ES8  

// const arr = [
//     ['zone_1', 'zone_2'],
//     ['zone_3', 'zone_4'],
//     ['zone_5', 'zone_6'],
//     ['zone_7', ['zone_8',['zone_9','zone_10']]]

// ];

// let flatArr = arr.reduce((accum, curVal) =>{
//     return accum.concat(curVal);
// });
// console.log(arr.flat(1))//if we have 1 array under array
// .if we have 2 or more than two array under array we use flat(infinity)
// console.log(arr.flat(Infinity));


// 11. STRINGS IN JAVASCRIPT
// A JAVASCRIPT STRING IS ZERO OR MORE CHARACHTERS written inside quotes.
// it is used to store and manipulating Texts .
// you can use single or double quotes . 
// strings can be  created as primitive . 
//* from string literals , or as objects, using the string () constructor.  

// let myName = "giridhari jha";
// let myChannelName = " Giridhari Jha 3M";

// console.log(myName);
// console.log(myChannelName);


// 11.a . HOW TO FIND THE LENGTH OF THE STRING. STRING.Prototype.length
// reflects the length of the string,

// let myName = 'giridhari jha';
// console.log(myName .length);

// 11. B. ESCAPE CHARACTER
// let anySentence = " we are the so-called "vikkings"  from the north". ; //*this will be wrong but if we use \ slash than it will be right
// let anySentence = " we are the so-called \"vikkings\"  from the north" ;
// console.log(anySentence);

// // if you dont want to mess , simply use the alternate quotes.
let anySentence = ' we are the so-called "vikings" from the north';
console.log(anySentence);

// 11.c.  FINDING A STRING IN A STRING
// String.prototype.indexOf(searchValue[,fromIndex])

// the indexOf() method returns the index of ( the position  of ) the first 
// occurence of a specified text in a string 

const myBiodata = 'i am giridhari kumar jha';
console.log(myBiodata.indexOf("giridhari"));


// 11. D. the search() method searches a string for a specified value and returns the position of the match
const myBiodata1 = 'i am giridhari kumar jha';
let sData = myBiodata1.search("kumar");
console.log(sData);

// the search method cannot take a second start position argument.

// 11. D . EXTRACTING STRING PARTS
// there are three  method for extracting a part of string:

// slice(START , END)
// SUBSTRING(START, END)
// SUBSTR(START, LENGTH)

//1. THE SLICE() METHOD : - tukra 
// SLICE( ) EXTRACTS A PART OF A STRING AND RETURNS THE EXTRACTED PART IN A NEW STRING. 

// THE METHOD TAKES 2 PARAMETERS: THE START POSITION ,
// AND THE END POSITION (END NOT INCLUDED). 
// *** the slice() method selects the element from starting ,given starting 
// argument, and ends at, but does not include, the given end argument.

// note: the origional array will not changed.
// var str  = "apple, jackfruit, kiwi";
// // let res = str.slice(0, 5);
// let res = str.slice(5,-2); //index:5 se last k 2 letter ko chhor k sab aa jayega
// // let res = str.slice( 5); // index:5 se last k sara element tak pura likh dega

// console.log(res);


// CHALLENGE TIME
// DISPLAY ONLY 280 CHARACTERS OF A STRING LIKE ONE USED IN TWITTER?
// let myTweet = " hey twiteer i m giridhari jha , i write this tweet for  the people added in my tweeter account so that i can thank to them to be the member of my family , i can  start a chat from making a group so that everyone can get together in that so thank ypu for being a part of our life huhfudgugughjfuyrd jjhtg."
// let myActualTweet = myTweet.slice (0, 280);
// console.log(myActualTweet);

//2. the substring() Method
// substring() is similar to slice() 

// the difference is that substring() cannot accept negative indexes.
// if we give negative value then the characters are counted from 0th pos 

// var stri = " bannana, guava, mango";
// let rest = stri.substring(0,8);
// console.log(rest);

// 3.THE SUBSTR() METHOD;
// substr () is similar to slice().
// the difference is that the second parameter specifies the length of the extracted part . 

// var stri = " bannana, guava, mango";
// let rest = stri.substr(10); // 10th index se sara text ko extract kar lega
// console.log(rest);


//11.C. REPLACE METHOD ()
// the replace()  method replaces a specified vale with another value in a String. 
// with another value in a String.

// points to remember
// 1: The Replace() method does not change the string 
//  it is called on . It returns a new string. 
// 2: by default, the replace() method replaces only the first match 
// 3: By Default , the replace() method is case sensitive . writing GIRIDHARI (with upper-case) will not work


 
// let myAbout = `i am giridhari kumar jha`;

// let replaceData = myAbout.replace('giridhari', 'GIRIDHARI');
// console.log(replaceData);

// 11. E. EXTRACTING STRING CHARACTERS

// THERE are three methods for extracting string characters: 
//1. CharAt(position)
// 2.charCodeAt(position)
// 3.property access[ ]


// 1.the CharAt() method 
//  the CharAt()  method returns the character at a specified index(position) in a string 

// let stri = "Giridhari jha";

// console.log(stri.charAt(7));

// 2.THE charCodeAt() Method
// the charCodeAt() method returns the unicode of the character at a 
// specified index in a string: 
// the method returns a UTF-16 code 
// (an integer between 0 and 65535). 

// * the unicode standard provides a unique number for every character,no matters the platfor,
// device , application or language. UTF-8 is a popular unicode encoding which has 88-bit code units.


var str = "HELLO WORLD";
console.log(str.charCodeAt(4));



// CHALLENGE TIME:-
// RETURN THE UNICODE OF THE LAST CHARCTER IN A STRING 
let code= "HELLO WORLD"
let newCode = code.charCodeAt(code.length-1);
console.log(newCode);


// 11.F. other useful methods
let myName = " Giridhari Jha";
console.log(myName.toUpperCase());// letter ko capital karne k liye
console.log(myName.toLowerCase());// letter ko small karne k liye 

//11.G. The CONCAT() METHOD
// concat() joins two or more strings

let fName = "Giridhari";
let lName = " jha";
console.log(fName.concat(lName));
console.log(fName.concat(" " , lName));

// 11.H. string.trim()
// the trim() method removes whitespaces(faltu ka space) from both sides of a string 
var str = "     hello myLOve      "
console.log(str.trim());

// CONVERTING A STRING TO AN ARRAY
// A STRING CAN BE  CONVERTED TO AN ARRAY WITH THE split() method

var txt = "a,b, c d , e"; // string
console.log(txt.split(","));       // split on commas
console.log(txt.split(" "));       // split on spaces
console.log(txt.split("|"));       //split on pipe

// 12. DATE METHODS (GET AND SET)
// javascript date objects represents a single moment in time in a platform-independent
// format. date object contain a number that represents milliseconds since 1 january 1970 utc.

// creating date objects
// there are 4 ways to create a new date object: 
// new Date()
// new Date (year, month,day, hours, minutes, seconds, milliseconds)
// // it takes 7 arguments
// new Date(milliseconds)
// // we cannot avoid month section
// // new Date(date String)

// 12.A. new Date()
// DATE OBJECTS are created with the new date() constructor. 

// let curDate = new Date();
// console.log(curDate);

// console.log(new Date());
// console.log(new Date().toLocaleString()); // 9/11/2022 , 1:25: 01 pm
// console.log(new Date().toString()); // wed sep 11 2022 13:24:01 GMT + 0700

// 12.B . Date now()
// returns the numeric value corresponding to the current time-the Number 
// milliseconds elasped since january 1 , 1970 00:00:00 UTC 


// console.log(Date.now());

// 12. C. NEW DATE (YEAR,MONTH,...)
//  7 number specify year, month, day, hour , minute,second , and millisecond (in that order )
// NOte: javascript counts months from 0 to 11.

// january is 0 . dec is 11.
// var d = new Date(2021, 11, 24,10,33,30,0);
// console.log(d.toLocaleString());


// new Date(date string)
// new Date (datestring) creates a new date object from a  date string

// var d = new Date("october 13, 2021 11:13:00");
// console.log(d);


// new Date(milliseconds)
// new Date (milliseconds) creates a new date objects as zero time plus milliseconds

// var d = new Date(0);
// var d = new Date(10000000000);
// var d = new Date (86400000*2);
// console.log(d.toLocaleString());

// 12.D. DATES METHOD
const curDate = new Date();

// // how to get individual date
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());
// console.log(curDate.getDate());
// console.log(curDate.getDate());


// HOW TO SET INDIVIDUAL DATE
// console.log(curDate.setFullYear(2022));
// // the setFullYear() method can optionally set month and day.
// console.log(curDate.setFullYear(2022,10,5));
// console.log(curDate.setMonth(10)); // 0-11 jan to dec
// console.log(curDate.setDate(5));
// console.log(curDate.toLocalestring());



// 13. time method

const curTime = new Date();

// how to get an individual time
console.log(curTime.getTime());
// the getTime()  method returns the number of milliseconds
// since january 1, 1970 
console.log(curTime.getHours());
// the getHours() method returns the hours of a date as a number (0-23)

console.log(curTime.getMinutes());
console.log(curTime.getSeconds());
console.log(curTime.getMilliseconds());

// // 13.A.HOW TO SET AN INDIVIDUAL TIME:
// let curTime= new Date();
// // console.log(curTime.setTime());
// // the setTime() method retuns number of milliseconds since january 1, 1970
// console.log(curTime.setHours(5));
// // the setHours() methods returns the hours of a date 
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));



// // PRACTICE TIME
// new Date().toLocaleTimeString(); //11:18:48 AM
// new Date().toLocaleDateString(); //11/16/2015
// new Date().toLocaleString(); // 11/16/2015 , 11:18:48 PM


// CHALLENGE TIME NOT DECIDED YET
// (function(){
//     setInterval(() => {
//         console.log(new Date().toLocaleDateString());
//     },2)
// })();

// ********14. MASTH OBJEC IN JAVASCRIPT****
// the javascript math object allows you to perform diffrent math operations

// console.log(Math.PI);

// Math.round()
// returns the value of x rounded to its nearest number

// let numb = 10.2565;
// console.log(Math.round(numb));

//14.b. Math.pow()
// Math.pow(x,y) returns the value of x to the power of y

// console.log(Math.pow(2,3));
// console.log(Math.pow(2,5));


// 14. B. Math.sqrt()
// Math.sqrt(x) returns the square root of x 

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(625));
// console.log(Math.sqrt(66));

// 14.C. Math.abs()
// Math.abs(x) returns the absolute (positive) value of x 

// console.log(Math.abs(-55));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955));

// // 14.D. Math.ceil()
// // Math.ceil(x) returns the value of x rounded up to its nearest integer 
// console.log(Math.ceil(4.5));
// console.log(Math.ceil(99.1));
// console.log(Math.round(99.1));

// // 14.E.Math.floor()
// // Math.floor(x) returns the value of x rounded down to its nearest integer

// console.log(Math.floor(4.7));
// console.log(Math.floor(89.1));

// //14. F. Math.min() 
// // Math.min() can be used to find the lowest value in a list of argument
// console.log(Math.min(0,150, 30, 21, -8, -200));

// //14. G. Math.max() 
// // Math.min() can be used to find the lowest value in a list of argument
// console.log(Math.max(0,150, 30, 21, -8, -200));


// // 14.H. Math.random()
// // math.random() returns a random number between 0(inclusive) and 1(exclusive) 

// console.log(Math.random()*10);
// console.log(Math.floor(Math.random()*10));


//14. I. Math.trunc()
// the Trunc() method returns the  integer part of a number 

// console.log(Math.trunc(4.6));

// PRACTICE TIME - 
// IF the argument is a +ve No. , Math.trunc() is equivalent to 
// Math.floor(). 
// otherwise Math.trunc() is equivalent to Math.ceil().

// 15. DOM IN JAVASCRIPT 
// 15.A. WINDOWS VS Document IN JAVASCRIPT
// windows is the main container or we can say the global objects and any 
// operations related to entire browser winows can be part of window object 

// 2. all the member like objects , methods or properties. if they are the part of the window object then we do not refer the window object,

// 3. windows  has the methods , properties and objects . ex setTimeout() or setInterval() are the methods , where as documents is the objects 
// of the window and it also has a screen object with properties describing the physical display. 

//       *****document*****

// *** document obj model ka kam hai ki html element ko render karwana

// 1. dom is the child of the windows .
// 2. in  the dom we need to refer the document , if we want to use use the document objects, methods or properties      

// * window has method , properties and object. 
// ex setTimeout() or setInterval() are the methods
// where as document is the object of the window and 
// It also has a screen object with properties 
// describing the physical display. 

// window object properties 
// innerWidth 
// innerHeight and many more 


// 15.B.  ***********DOM VS BOM **********
//  the dom is the document object model , which deals with the document, 
//  the html elements themselves , e.g., document and all traversal you would do in it , events ,etc . 

//  For Ex:
// change the background color to red 
// document.body.style.background= "red";

// the bom is the browser object model , which deals with the browser components 
// aside from the document(document k kaam ko chhor k sabka kam karta hai) , like history , location , navigator and screen 
// (as well as some others that vary by browser). or
// all the windows operation which comes under BOM are performed using BOM 


// lets see more practical on history object 
// function alert/confirm/prompt are also a part of BOM .
//  they are directly  not related to the document .
//  but represents pure browser methods of communicating with the User . 

// alert(location.href); // show current Url
// if (confirm("want to visit giridhari jha page")){
//     location.href = "https://www.youtube.com/@giridharijha8599";
// }

// 15. C. SECTION 3 : NAVIGATE THROUGH THE DOM
// refer navigate.html

// 1.  document.documentElement
// // returns the element that is the root element of the document. matlb html element
// 2: document.head 
// 3: document.body 
// 4: document.body.childNodes(include tableof, enter and whitespace-faltu space )
// // list of the directed children only
// 5: document.children (without text nodes , only regular Elements)
// 6: document.childNodes.length  


// PRACTICE TIME 
// how to check whether an element has child nodes or not?
// we will use hasChildNodes()
// document.body.hasChildNodes()


// PRACTICE TIME
// by default we have to write document.body
// how to find the child in DOM tree? 
// firstChild vs firstElementChild
// firstChild - it returns text part after div because we use space before making div
//  firstElementChild --it only returns the div or container 

// lastChild vs LastElementChild 
// lastChild -it returns the text ..because after script tag we use space before body tag ..and it counts as a text
//  LastElementChild - it returns the script tag


// const data = document.body.firstElementChild;- ye store kar dega ek variable data me
// undefined 
// data - ham call kar rahe hai
// data.firstElementChild - data k baad child ko call  karnge
// data.firstElementChild.firstElementChild
// *** esse jo niche code likha gaya  hai usko css document style code bolte hai
// data.firstElementChild.firstElementChild.style.color = "red";
// vs 
// document.querySelector(".child-two").style.color = "yellow"; - direct search krega child-two ko aur usme lga dega


// // * how to find the parent nodes
// document.body.parentNode
// document.body.parentElement

// // how to find or access the siblings
// document.body.nextSibling - body k niche agar koi tag hoga to
// document.body.nextElementSibling
// document.body.previousElementSibling - direct head tag dikhayega
// document.body.previousSibling - body k upar agar koi tag hoga to lekin text dikhayega because of space


// 15:D: searching and refrence
// refer Navigate.html page 












// ***** 16. EVENTS IN JAVASCRIPT ******

// *****************refer event.html********

// html events are "things" that happens to html element . 
// when javascript is used in HTML pages , javascript can "react" on these events . 


// HTML EVENTS
// an html event can be something the browser does , or something a user does. 

// here are some examples of html events:

// an html web page has finished loading
// an html input field was changed 
// an html was clicked
// often, when events happen, you may want to do something. 

// javascript lets you executes code when events was detected. 
// html  allow event handler attributes , with javascript code , to be added to an html element 


// 16.A. 4 WAYS OF WRITING EVENT IN JAVASCRIPT
// 1: using alert();
// 2: bt calling a function (we already seen and most common way of writing )
// 3: using INline EventSource(Html onclick = "" property and element.onclick)
// 4: using Event listeners (addEventListener and IE's attachEvent )

// 16.B. what is event object?
// event object is the parent object of the event object 
// for example 
// MouseEvent,FocusEvent, KeyboardEvent etc . 
//  example: if we have to check any event of any website 
// const fourtWay = document.getElementById('fourtWay');

// const checkEvent = () => {
//     alert('hum dekh rhe hai event object');
//     console.log(event);
//     console.log(event.target);
//     console.log(event.type);
// }
// fourtWay.addEventListener('click', checkEvent);



//16.c. MOUSEEVENTS IN JAVASCRIPT
// ****************refer mouseEvents.html***********
// the task or anything which can  be performed by mouse 
// events that occur when the mouse interacts with the html document belongs to the mouseEvent objects. 
// there is two function called mouseDown() and mouseUp()
// function mouseDown(){ // if we click mouse then the sentence in the id color chnages
//     document.getElementById("myp").style.color = "#F8B627";

// }

// function mouseUp(){ // when mouse is Up  it returns to the origional color
//     document.getElementById("myp").style.color = 'red';

// }

// // as we enter the section the background color will changes into pink
 
// MOUSEeNTER AND MOUSELEAVE()
// *****************refer mouseEvents.html********

// const mEnter= document.getElementById('box');
// mEnter.addEventListener('mouseenter', () => {
//     mEnter.style.backgroundColor = 'red';
//     console.log('Mouse Enter Bro');
// });
// // as we leave the section the background color will changes into pink
// mEnter.addEventListener('mouseleave', () => {
//     console.log('Mouse leasve bro');
//     mEnter.style.backgroundColor  = 'pink';
// });

// 16. D. keyboardEvent in javascript
// events that occur when user presses a key on the keyboard ,
// belongs to the KeyboardEvent object .

// onkeypress , onkeydown, onkeyup are the three events performed by keyboard 


 
// CHALLENGE TIME 
// what is difference between addEventListner and onclick ?
// this is because addEventListener does not overwrite existing event handlers,
// whereas onclick overrides any existing onclick = fn event handlers . 

// the other significant difference , of Course, is that onclick will always Work, 
// whereas addEventListener does not work in Internet Explorer before version 9 


// 16.E.  InputEvents in javascript 
// ************refer onchange.html**********
//  the onchange event occurs when the value of an element has been changed . 

//  for radiobuttons and checkboxes , the onchange event occurs when the checked has been changed . 


// // 17. JAVASCRIPT TIMING EVENTS 
// ****************refer html page**********
// the window object allows execution of code at specified time intervals . 
// these time intervals are called timing events . 

// the two key method to use in javascript . 

// * setTimeout((function , millisecond ) => {
    
// }, 
