//variable types in js :-

// var (these variables can be changed and reassign)
// let (these variables can be changed and data types also fetch bt its own can't reassign)
// const (these are constant can't changed )

//checked js file is linked properly or not
console.log('working');

//-------------------------print "Hello World"-----------------------------------------------
console.log("Hello World");

//----------------------------- (ALERT) -----------------------------------------------------
alert('HELLO');
alert('WORLD');

//-------------------------------------"use strict"------------------------------------------

//"use strict";
let num = 3.24;
console.log(num);


//-----------------------variables-----------------------------------------------------------
//there are three types of variables "let" & "const" & "var"

let message;
message = "poulomi";
alert(message);

// let variables value can be changed............

let a;
a = 20;
a = 30
console.log(a);//output is 30 value changed

// const variables value cannot changed its constant.................
/*
const fruit = "apple";
fruit = "orange";
console.log(fruit);//uncaught TypeError: Assignment to constant variable.*/

//---------------------------------------data types------------------------------------------
//number (integer), bigInt, string , boolean , null

// bigInt -> the "n" at the end means its a bigInt

const number = 1225634587456625852152n; // its a bigInt value

// string -> must be surrounded by quotes "" or '' or ``....
let str = "java-script"; // this is a string 

//example

let person = "Taniya";
console.log(`Hello , ${person}!`);//embed a variable (output is -> Hello , Taniya!)


console.log(`The result is : ${2 + 5}`);// embed an expression (output is -> The result is : 7)

//boolean datatype its return true of false

let isSmaller = 9 < 5;
console.log(isSmaller);//false

let isGreater = 56 > 25;
alert(isGreater);// alert is true
// ---------------------null---------------------------------------------------------------
let age = null;
alert()//null means nothing so the alert is blank

//-------------------------undefined-----------------

let notDefined;
alert(notDefined);//alert is undefined...

let exp1 = 0;
console.log(" 0 : this is a ", typeof exp1, "datatype");//0 : this is a  number datatype

let exp2 = 1256n;
console.log("1256n : this is a ", typeof exp2, "datatype");//index.js:76 1256n : this is a  bigint datatype

let exp3 = true;
console.log("true : this is a ", typeof exp3, "datatype");//index.js:79 true : this is a  boolean datatype

let exp4 = "poulomi";
console.log("poulomi : this is a ", typeof exp4, "datatype");//index.js:82 poulomi : this is a  string datatype

//-----------------------------prompt--------------------------------
//it accepts two arguments

let yourAge = prompt('How old are you?',);
alert(`you are ${yourAge} years old !`);

let test = prompt("Test", '');

//------------------------------confirm------------------------------
//if the question is correct press ok it's returns true otherwise false

let isStudent = confirm("Are you a student ?");
alert(isStudent);

//----------------------------Type Conversions----------------------------
//---------------------------String Conversion---------------------------

let value = false;
console.log("It's a ", typeof value, "value"); //its a boolean value

value = String(value); // But now value is a string value....,  call the String(value) function to convert a value to a string:
console.log("But now it's a", typeof value, "value");

let value2 = 123;
console.log("It's a ", typeof value2, "value"); //It's a  number value

value2 = String(value2);
console.log("But now it's a", typeof value2, "value");// But now value is a string value

//----------------------------Numeric Conversion--------------------------

alert("6" / "2"); // strings are converted to numbers.. ans: 3


let str2 = "123";
console.log("'123' It's a ", typeof value2, "value");//'123' It's a  string value

let num2 = Number(str2); // string becomes a number 123
console.log("But now it's a", typeof num2, "value : 123"); // But now it's a number value : 123

//--------------------------------Boolean Conversion----------------------------

let boolean_value1 = Boolean(1);
console.log("in boolean datatype 1 means", boolean_value1);//in boolean datatype 1 means true

let boolean_value2 = Boolean(0);
console.log("in boolean datatype 0 means", boolean_value2);//in boolean datatype 0 means false

let boolean_value3 = Boolean("hello");
console.log("in boolean datatype 'hello' means", boolean_value3);//in boolean datatype 'hello' means true

let boolean_value4 = Boolean("");////empty string means false  
console.log("in boolean datatype '' means", boolean_value4);//in boolean datatype '' means false

let boolean_value5 = Boolean(" ");//in boolean datatype ' ' means true
console.log("in boolean datatype ' ' means", boolean_value5);// spaces, also true (any non-empty string is true)

//-----------------------Basic operators, maths-----------------------
//-------------------Terms: “unary”, “binary”, “operand”----------------------
//An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”. * it is operator

//The following math operations are supported:
// -> Addition +
// -> Subtraction -
// -> Multiplication *
// -> Division /
// -> Remainder %
// -> Exponentiation **
// -> assignment =

//--------------------------addition (+)--------------------------------

let y = 5;
let z = 7;
let total = (y + z);//addition operator
console.log("Addition of 5 + 7 is : ", total);// Addition of 5 + 7 is : 12

//--------------------------------subtraction (-)------------------------------

let p = 52;
let q = 34;
let sub = (p - q);//subtraction operator
console.log("Subtraction of 52 - 34 is : ", sub);// Subtraction of 52 - 34 is :  18

//------------------------------Multiplication (*)-----------------------------------

let b = 5;
let c = 10;
let mul = (b * c);//Multiplication operator
console.log("Multiplication of 5 * 10 is : ", mul); //Multiplication of 5 * 10 is :  50

//-------------------------------Division (/)-----------------------------------------
let e = 20;
let f = 5;
let div = (e / f);//Division operator
console.log("Division of 20 / 5 is : ", div); //Division of 20 / 5 is :  4

//-----------------------------------Remainder (%)--------------------------------------

let i = 22;
let j = 5;
let rem = (i % j);//Remainder operator
console.log("Remainder of 22 % 5 is : ", rem); //Remainder of 22 % 5 is :  2

//---------------------------------Exponentiation (**)----------------------------------

let k = 2;
let ans = (k ** k);// Exponentiation operator
console.log("Answer of 2² is : ", ans); //Answer of 2² is :  4

//Usually, the plus operator + sums numbers.
//But, if the binary + is applied to strings, it merges (concatenates) them:

let s = "my" + "string";
console.log(s); // mystring (concatenates my and string)

// if any of the operands is a string, then the other one is converted to a string too.

let m = "5";
let n = 1;
let ans2 = (m + n);
console.log(" '5' + 1 is : ", ans2);// '5' + 1 is :  51

//operators work one after another. The first + sums two numbers, so it returns 10, then the next + adds the string "2" to it, so it’s like 10 + '2' = '102'.

alert(5 + 5 + "2") //"102" not "552"

// the first operand is a string, the compiler treats the other two operands as strings too. The 5 gets concatenated to '5', so it’s like '5' + 5 = "55" and "55" + 2 = "552".

alert("5" + 5 + 2) // 552 not 57

//The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

alert(6 - '3'); // 3, converts '3' to a number
alert('6' / '3'); // 2, converts both operands to numbers

// ------------------------------No effect on numbers-------------------------------
let u = 5;
alert(+u); // 5

let v = -7;
alert(+v); // -7

//------------------------------Converts non-numbers-----------------------------

alert(+true); // 1
alert(+""); // 0
alert(+false); // 0

//The binary plus would add them as strings:

let apples = "2";
let oranges = "3";
console.log("apples = '2' \noranges = '3' \napples + oranges : ", (apples + oranges)); // "23", the binary plus concatenates strings

let bananas = "2";
let grapes = "3";
// both values converted to numbers before the binary plus
console.log("bananas = '2'\ngrapes = '3'\n+bananas + +grapes = ", (+bananas + +grapes)); //5

alert("" + 1 + 0);
alert("" - 1 + 0);

//---------------------------------------------- precedence table-------------------------

//      Precedence      Name	           Sign
//      …	            …	                …
//      14	            unary plus	        
//      14	            unary negati        -
//      13	            exponentiati        **
//      12	            multiplicati        *
//      12	            division	        /
//      11	            addition	        +
//      11	            subtraction	        -
//      …	            …	                …       
//      2	            assignment	        =
//      …	            …	                …

//assignment operator

let x = 2 * 2 + 1;
console.log("2 * 2 + 1 = ", x); // 5 

//Modify-in-place
// n=n+2 are same as n+=2

let g = 2;
g = g + 3;
console.log("g=g+3\ng =", g);

let h = 2;
h += 3;
console.log("h+=3\nh =", h);

// both works same 

//------------------------Increment/decrement------------------------

let count = 5;
count++;
alert(count);//6 [count++ means count=count+1]

let count2 = 5;
count2--;
alert(count2);//4 [count2-- means count2=count2-1]

//Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.

// ++n means first increment then return 
// n++ means first return then increment

let counter = 1;
let w = ++counter; //prefix
alert(w); // 2

let counter2 = 1;
let t = counter2++; // postfix //return 1 then increment is done 
alert(t); // 1

let counter3 = 0;
counter3++; // 0 becomes 1 , now counter3=1
++counter3; // 1 becomes 2 , now counter3= 2
alert(counter3); // result is 2

//Bitwise operators

//The list of operators:

// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )

//comma

let l = (1 + 2, 3 + 4); // the first expression 1 + 2 is evaluated and its result is thrown away. Then, 3 + 4 is evaluated and returned as the result.
alert(l); // 7 

//---------------------------Comparisons------------------

// Greater/less than: a > b, a < b.
// Greater/less than: a > b, a < b.
// Equals: a == b
// Not equals: !=

alert(4 > 1);  // true (correct)
alert(3 == 1); // false (wrong)
alert(2 != 1); // true (correct)

//--------------------String comparison------------------
//strings are compared letter-by-letter.

alert('p' > 'A'); // true
alert('Grow' > 'Grew'); // true
alert('Bee' > 'Be'); // true

//-----------------Comparison of different types--------------------------

alert('01' == 1); // true, string '01' becomes a number 1
alert(false == 0); // true

//------------------Strict equality--------------------
// === checks value with types both
// == check only value
alert(1 === true); //false , because the types are different
alert(null === undefined); // false
alert(null == undefined); // true

//Conditional branching: if, '?'
//------------------------The “if” statement------------------------------

let yourAgeIs = prompt('how old are you ?', '');
if (yourAgeIs >= 18) {
    console.log("you are eligible for vote!");
} else {
    console.log("you are not eligible for vote!");
}

//Conditional operator ‘?’

let independent;
let year = prompt('In which year did our country become independent', '');

if (year == 1947) {
    independent = true;
} else {
    independent = false;
}
alert(independent);

//========================Logical operators=======================

//There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).
//------------------------------ || (OR) ----------------------------------
// //the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.
console.log("true || true ) = ", true || true);   // true
console.log("false || true  = ", false || true);  // true
console.log("true || false  = ", true || false);  // true
console.log("false || false = ", false || false); // false

//--------------------------------&& (AND) ----------------------------------------

//AND returns true if both operands are truthy and false otherwise:

console.log("true & true ) = ", true && true);   // true
console.log("false & true  = ", false && true);  // false
console.log("true & false  = ", true && false);  // false
console.log("false & false = ", false && false); // false

// if the first operand is truthy,
// AND returns the second operand:
alert(1 && 0); // 0
alert(1 && 5); // 5

//------------------------------ ! (NOT) ---------------------------------------------
//return the oposite(inverse) value
console.log("!true = ", !true);

//---------------------------Nullish coalescing operator '??'---------------------

let user = "poulomi";
alert(user ?? "anonymous"); //poulomi (user is not null/undefined) , if user is undefined then return anonymous...

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

// -> || returns the first truthy value.
// -> ?? returns the first defined value.

let height = 0;

console.log("height || 100 = ", height || 100); // height || 100 = 100
console.log("height ?? 100 = ", height ?? 100); // height ?? 100 = 0

//-------------------------Loops: while and for----------------------------

//---------------------The “while” loop-------------------

let r = 0;
while (r < 5) {
    console.log(r);
    r++;
}

//-------------------The “do…while” loop---------------------

let no = 0;
do {
    console.log("numbers are : ", no);
    no = no + 2;
} while (no <= 10); //0 2 4 6 8 10

//--------------------The “for” loop---------------------------

for (let q = 0; q < 4; q++) {
    alert(q); // 0 1 2 3
}

// breaking the loop
for (let num2 = 0; num2 < 5; num2++) {
    if (num2 == 3) {
        break;
    }
    console.log("numbers are : ", num2);// 0 1 2
}
// Continue to the next iteration
for (let i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;

    alert(i); // 1, then 3, 5, 7, 9
}

//--------------The "switch" statement-----------------

let d = prompt("enter any number : ", '');

switch (d % 2) {
    case 0:
        console.log(d + " is a even number.");
        break;
    case 1:
        console.log(d + " is a odd number.");
        break;

    default:
        console.log("invalid input");
}

//--------------Functions----------------------------

//Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

//-----------------------------Local variables----------------------

//A variable declared inside a function is only visible inside that function.
function showMessage() {
    let message2 = "Hello, I'm Poulomi!"; // local variable

    alert(message2);
}

showMessage(); // Hello, I'm Poulomi!

//alert(message2); // <-- Error! The variable is local to the function

//---------------------------------Outer variables----------------------
//The function has full access to the outer variable. It can modify it as well.

let userName2 = 'Poulomi';

function showMessage2() {
    let message3 = 'Hello, ' + userName2;
    alert(message3);
}

showMessage2(); // Hello, Poulomi [can't see result bcz 496 line has a erroe]

//The outer variable is only used if there’s no local one.
let userName3 = 'John';

function showMessage3() {
    let userName3 = "Bob"; // declare a local variable

    let message4 = 'Hello, ' + userName3; //Hello,  Bob
    alert(message4);
}

// the function will create and use its own userName
showMessage3();

alert(userName3); // John //, unchanged, the function did not access the outer variable

//---------------------------Parameters-----------------------------------

function sum(num1, num2) {
    alert(num1 + num2);
}
sum(2, 5); // 7
sum(21, 5); // 26

//-----------------------------------------returning a value----------------

function multiply(n1, n2) {
    return n1 * n2;
}

let resultIs = multiply(5, 2);
alert(resultIs); // 10

//-----------------------function==comments----------------------
// .
// .
// .
// .
// .

//---------------------------Arrow functions, the basics-------------------

let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

alert(double(4)); // 8

//---------Multiline arrow functions--------------
let sum2 = (a, b) => {  // the curly brace opens a multiline function
    let result_is = a + b;
    return result_is; // if we use curly braces, then we need an explicit "return"
};

alert(sum2(1, 2)); // 3
//..........................................................................
//Variables
//Can be declared using:

// let
// const (constant, can’t be changed)
// var (old-style, will see later)
