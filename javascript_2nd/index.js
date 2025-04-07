console.log('working');

//JavaScript Comparison Operators
//Comparison operators compare two values and return a boolean value (true or false).

const a = 3, b = 2;
console.log("a = 3 , b = 2 \n a > b = ", a > b);

//Commonly Used Comparison Operators
// ___________________________________________________________________________
// |  Operator	  |      Meaning	             |        Example            |
//-|--------------|------------------------------|---------------------------|
// |   ==         |   Equal to	                 |     3 == 5  // false      |
// |   !=         |   Not equal to	             |     3 != 4  // true       |
// |   ===        |   Strictly equal to          |     3 === "3"  // false   |
// |   !==        |   Strictly not equal to      |     3 !== "3"  // true    |
// |   >          |   Greater than	             |     4 > 4  // false       |
// |   <          |   Less than	                 |     3 < 3  // false       |
// |   >=         |   Greater than or equal to   |     4 >= 4  // true       |
// |   <=         |   Less than or equal to	     |     3 <= 3  // true       |
// |_________________________________________________________________________|

// JavaScript Equal To Operator
// same value, same type
console.log("5==5 = ", 5 == 5);  // true

// same value, different type
console.log("2 == '2' = ", 2 == "2");  // true

// different values, same type
console.log("'hello' == 'Hello' = ", "hello" == "Hello");  // false

// Not Equal To Operator

// same value, same type
console.log("(2 != 2) = ", 2 != 2);  // false

// same value, different type
console.log("(2 != '2') = ", 2 != "2");  // false

// different value, same type
console.log("(2 != 3) = ", 2 != 3);  // true

// Strict Equal To Operator
// *true if both the values and the types of the operands are the same.
// *false if either the values or the types of the operands are not the same.

// same value, same type
console.log("(2 === 2) =", 2 === 2);  // true

// same value, different type
console.log("(2 === '2') = ", 2 === "2");  // false

// *The == (equality) operator only checks the values of the operands and not their types.
// *However, the === (strict equality) operator checks both the values and types of the operands.

// Strict Not Equal To Operator
// same value, same type
console.log("(2 !== 2) = ", 2 !== 2);  // false

// same value, different type
console.log("(2 !== '2') = ", 2 !== "2");  // true

// different value, same type
console.log("('Hello' !== 'World') = ", "Hello" !== "World");  // true

//Commonly Used Logical Operators 
//-|---------------------|-------------------------------|------------------------------------------------------------|
// |      Operator	     |         Syntax	             |               Description                                  |
// |---------------------|-------------------------------|------------------------------------------------------------|
// |    && (Logical AND) |   expression1 && expression2	 |   true only if both expression1 and expression2 are true   |
// |    || (Logical OR)	 |   expression1 || expression2	 |   true if either expression1 or expression2 is true        |
// |    ! (Logical NOT)	 |   !expression	             |   false if expression is true and vice versa               |
// |_____________________|_______________________________|____________________________________________________________|

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//JavaScript if...else &  if...else if   Statement
const score = prompt("Enter your score: ");

if (score > 90) {
    console.log("Grade A");
}

else if (score > 75) {
    console.log("Grade B");
}
else {
    console.log("Grade C");
}
console.log("pass");
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Nested if...else Statement
//When we use an if...else statement inside another if...else statement, we create a nested if...else statement. For example,

let marks = 85;
// outer if...else statement
// student passed if marks 40 or above
// otherwise, student failed
if (marks >= 40) {
    // inner if...else statement
    // Distinction if marks is 80 or above
    if (marks >= 80) {
        console.log("Distinction");
    }
    else {
        console.log("Passed");
    }
}
else {
    console.log("Failed");
}
// Output: Passed

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// for loop
var n = 10;
for (let i = 0; i <= n; i += 2) {
    console.log(i);
}

var n = 10;
for (let i = 1; i <= n; i += 2) {
    console.log(i);
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// do...while Loop
let sum = 0, num = 0;

do {
    // add all positive numbers
    sum += num;
    num = parseInt(prompt("Enter a number: "));
    // loop terminates if num is negative
} while (num >= 0);
// display sum
console.log(`The sum is ${sum}`);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//continue ststement
//The continue statement skips the current iteration of the loop and proceeds to the next iteration.

for (let i = 1; i < 6; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//switch...case Statement
//switch...case statement executes different blocks of code based on the value of a given expression.

var day = parseInt(prompt("Enter the number of day : "));

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//JavaScript Function and Function Expressions
//A function is an independent block of code that performs a specific task, while a function expression is a way to store functions in variables.
// function with a parameter called 'name'
function greet(name) {
    console.log(`Hello ${name}`);
}
// pass argument to the function
greet("Sir");
// Output: Hello Sir

// function to add 2 numbers
function addNo(num1, num2) {
    var sum = num1 + num2;
    console.log(`sum is : ${sum}`);
}
addNo(5, 9);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//JavaScript Library Function
// Math.sqrt() computes the square root
let squareRoot = Math.sqrt(4);//2
console.log("Square Root of 4 is", squareRoot);

// Math.pow() computes the power
let power = Math.pow(2, 3);//8
console.log("2 to the power of 3 is", power);

// toUpperCase() converts text to uppercase
let band = "Iron Maiden";
let bandUpper = band.toUpperCase();
console.log(`Favorite Band: ${bandUpper}`);//IRON MAIDEN
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Function Expressions (In JavaScript, a function expression is a way to store functions in variables. )

// store a function in the cubing variable
var cubing = function (num) {
    return num * num * num;
};
console.log(cubing(2));  // Output: 8
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//JavaScript Variable Scope(In JavaScript, the scope of a variable determines where it can be accessed within the code.)

//Variables can be declared in different scopes:
// 1. Global Scope (a variable that declared outside any function or in the global scope is known as a global variable.)
// 2. Local (Function) Scope (When variables are declared inside a function, they have a local scope and are accessible only within that function.)
// 3. Block-Level Scope (Block-level variables are accessible only within the block {} they are defined in, which can be smaller than a function's scope)

//Global Scope & Local Scope variable example
var message = "Hello"; // declare global variable
function greet() {
    console.log(`Local: ${message}`); //Local: Hello
}
greet();
console.log(`Global: ${message}`); //Global: Hello

// Block-Level Scope example
function display_scopes() {
    // declare variable in local scope
    let message = "local";
    if (true) {
        // declare block-level variable
        let message = "block-level";
        console.log(`inner scope: ${message}`); //inner scope: block-level
    }
    console.log(`outer scope: ${message}`); //outer scope: local
}
display_scopes();
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Hoisting in JavaScript
// There are generally two types of hoistings in JavaScript:
// 1. Variable Hoisting
// 2. Function Hoisting

//example for 1[Variable Hoisting]

//Hoisting With 'var'
console.log(message);
// variable declaration using var keyword
var message; // Output: undefined
//_________________________________________________________________________________________
//Hoisting With 'let' and 'const'
console.log(message);
// variable declaration using let keyword
//let message; //output : ReferenceError: Cannot access 'message' before initialization

// Example for 2 [Function Hoisting]
// function call
greeting(); //In JavaScript, function hoisting allows us to call the function before its declaration.
// function declaration
function greeting() {
    console.log("Welcome to my code."); //Output : Welcome to my code.
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//JavaScript Recursion [Recursion is a programming technique where a function calls itself repeatedly to solve a problem.]

//Find Factorial of a Number
// recursive function
function factorial(num) {
    if (num > 1) {
        return num * factorial(num - 1);
    }
    else {
        return 1;
    };
};

var x = parseInt(prompt("enter a positive number : "));
// store result of factorial() in variable y
var y = factorial(x);
console.log(`The factorial of ${x} is ${y}`);
//-----------------------------------------------------------------------------------------------------------------------------------------
//JavaScript Objects [JavaScript object is a variable that can store multiple data in key-value pairs.]

//--------------------------------JavaScript Objects--------------------------------------------------------------------------------
//[JavaScript object is a variable that can store multiple data in key-value pairs.]

// student object
var student = {
    firstName: "Jack",
    rollNo: 32
};
console.log(student);// Output: { firstName: 'Jack', rollNo: 32 }
//Here, student is an object that stores the first name and the roll number of students as key-value pairs.
//-----------------------------------------------------------------------------------------------------------------------
//Access Object Properties [You can access the value of a property by using its key.]
var dog = {
    name: "Rocky",
};
// access property
console.log(dog.name);//Using Dot Notation // Output: Rocky
//-------------------------------------------------------------------------------------------------------------------------------------------------------
var cat = {
    name: "Luna",
};
// access property
console.log(cat["name"]); // Using Bracket Notation // Output: Luna
//-----------------------------------------------------------------------------------------------------------------

//Add Object Properties

var student = {
    name: "John",
    age: 20,
};
// add properties
student.rollNo = 14;
student.faculty = "Science";
console.log(student); // Output: { name: 'John', age: 20, rollNo: 14, faculty: 'Science' }

//Delete Object Properties
var student = {
    name: "joy",
    age: 11,
    rollNo: 24
};
// delete object property
delete student.rollNo // rollNo key is deleted
console.log(student); //{name: 'joy', age: 11}
//-----------------------------------------------------------------------------------------------------------------------------------
//JavaScript Object Methods [We can also include functions inside an object]
var person = {
    name: "Bob",
    age: 30,

    // use function as value
    greet: function () {
        console.log("Bob says Hi!");
    }
};

// call object method
person.greet();  // Bob says Hi!
console.log(person); //{ name: 'Bob', age: 30, greet: [Function: greet] }
//-------------------------------------------------------------------------------------------------------------------
//Nested Objects

// outer object student
var student = {
    name: "John",
    age: 20,
    // contains another object marks
    marks: {
        science: 70,
        math: 75
    }
};
// display student
console.log(student);// Output: { name: 'John', age: 20, marks: { science: 70, math: 75 } }
console.log(student.marks.science);  // 70
console.log(student["marks"]["math"]);  // 75
//-------------------------------------------------------------------------------------------------------------------------------------
//----------------JavaScript this Keyword----------------------------------------------------------------

var person = {
    name: "Poulomi",
    age: 21,
    // method
    introduce: function () {
        console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
    }
};
// access the introduce() method
person.introduce();// Output: My name is Poulomi and I'm 21 years old.

//Add Methods to an Object

// student object
var student = {
    name: "John"
};
// add new method
student.greet = function () {
    console.log("Hello");
};
// access greet() method
student.greet();// Output: Hello
console.log(student);
//-----------------------------------------------------------------------------------------------
//JavaScript Built-In Methods
//----------------------------------------------------------------------------------------------------------|
// |   Method	    |     Object	     |                       Description                                |
//-|----------------|--------------------|------------------------------------------------------------------|
// | console.log()	|    Console	     |       Displays messages or variables in the browser's console.   |
// | prompt()	    |    Window	         |       Displays a dialog box that prompts the user for input.     |
// | concat()	    |    String	         |       Concatenates the arguments to the calling string.          |
// | toFixed()	    |    Number	         |       Rounds off a number into a fixed number of digits.         |
// | sort()	        |    Array	         |       Sorts the elements of an array in specific order.          |
// | random()	    |    Math	         |       Returns a pseudo-random float number between 0 and 1.      |
//-----------------------------------------------------------------------------------------------------------

//JavaScript concat() Method Example
var firstName = "Poulomi ";
var lastName = "Saha";
// built-in string method concat()
// join lastName to the end of firstName
var fullName = firstName.concat(lastName);
console.log(fullName);// Output: Poulomi Saha
//------------------------------------------------------------------------------------------------------------------------
//JavaScript Constructor Function[ a constructor function is used to create and initialize objects.]
//Create Multiple Objects With Constructor Function
// constructor function
function Person() {
    this.name = "John",
        this.age = 23,

        this.greet = function () {
            console.log("hello");
        }
}
// create objects
var person1 = new Person();
var person2 = new Person();//created two objects (person1 and person2) using the same constructor function person.
// access properties
console.log(person1.name);  // John
console.log(person2.name);  // John
console.log(person2.age);  // 23
console.log(person1.age);  // 23

//---------------------------------------------------------------------------------------------------------
//JavaScript Constructor Function Parameters
//You can also create a constructor function with parameters.

// constructor function with parameters
function anyone(person_name, person_age, person_gender) {

    // assign parameter values to the calling object
    this.name = person_name,
        this.age = person_age,
        this.gender = person_gender,

        this.greet = function () {
            console.log(`Hi ${this.name}`);
        }
}

// create objects and pass arguments
var person3 = new anyone("John", 23, "male");
var person4 = new anyone("Sam", 25, "female");

// access properties
person4.greet();//Hi Sam
console.log(person3.name); // John
console.log(person4.name); // Sam

//-------------------------------------------------------------

//JavaScript Getter and Setter
//JavaScript, there are two kinds of object properties:
// 1. Data properties
// 2. Accessor properties
//JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords:
// * get - to define a getter method to get the property value
// * set - to define a setter method to set the property value

//JavaScript Getter [In JavaScript, getter methods are used to access the properties of an object.]
var student = {
    // data property
    firstName: 'Monica',
    // accessor property(getter)
    get getName() {
        return this.firstName;
    }
};
// accessing data property
console.log(student.firstName); // Monica
// accessing getter methods
console.log(student.getName); // Monica
// trying to access as a method
//console.log(student.getName()); // error

//JavaScript Setter [In JavaScript, setter methods are used to change the values of an object.]

var student = {
    firstName: 'Monica',
    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};
console.log(student.firstName); // Monica
// change(set) object property using a setter
student.changeName = 'Sarah';
console.log(student.firstName); // Sarah

//---------JavaScript Prototype------------------------------------------------------------------------------------
// prototypes allow properties and methods to be shared among instances of the function or object.
function Car() {
    console.log("Car instance created!");
};
// add a property to prototype
Car.prototype.color = "Red";
// add a method to the prototype
Car.prototype.drive = function () {
    console.log(`Driving the car painted in ${this.color}...`);
};
// display the added property
console.log(`The car's color is: ${Car.prototype.color}`);
// call the added method
Car.prototype.drive();
//---------------------------------------------JavaScript Prototype Chaining---------------------------------------------
// *JavaScript always searches for properties in the objects of the constructor function first. Then, it searches in the prototype.
function Car() {
    this.color = "Red";
};
// add property that already exists
Car.prototype.color = "Blue";
// add a new property
Car.prototype.wheels = 4;
const c1 = new Car();
console.log(`The car's color is ${c1.color}.`); //The car's color is Red. {When we display c1.color, JavaScript searches for color in c1 and then displays it without checking the prototype.}
console.log(`The car has ${c1.wheels} wheels.`); //The car has 4 wheels.  {avaScript can't find wheels in c1. So, when we display c1.wheels, it displays the prototype property.}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------Array Methods--------------------------------------------------------
//--|----------------|---------------------------------------------------------------------------------|
//  | Method	     |                           Description                                           |
//--|----------------|---------------------------------------------------------------------------------|
//  | concat()	     |     Joins two or more arrays and returns a result.                              |
//  | toString()	 |     Converts an array to a string of (comma-separated) array values.            |
//  | indexOf()	     |     Searches an element of an array and returns its position (index).           |
//  | find()	     |     Returns the first value of the array element that passes a given test.      |
//  | findIndex()	 |     Returns the first index of the array element that passes a given test.      |
//  | forEach()	     |     Calls a function for each element.                                          |
//  | includes()	 |     Checks if an array contains a specified element.                            |
//  | sort()	     |     Sorts the elements alphabetically in strings and ascending order in numbers.|
//  | slice()	     |     Selects part of an array and returns it as a new array.                     |
//  | splice()	     |     Removes or replaces existing elements and/or adds new elements.             |
//--|----------------|---------------------------------------------------------------------------------|

//index num:  [ 0,  1,  2,  3,  4]
var numbers = [10, 30, 40, 60, 80]
// access first element
console.log(numbers[0]);  // 10
// access third element
console.log(numbers[2]);  // 40

//Add Element to an Array [Using the push() Method]
var dailyActivities = ["eat", "sleep"];
// add an element at the end
dailyActivities.push("exercise");
console.log(dailyActivities);
// Output: [ 'eat', 'sleep', 'exercise' ]
//-----------------------------------------------------------------------
//Add Element to an Array [Using the unshift() Method]

var dailyActivities = ["eat", "sleep"];
// add an element at the beginning
dailyActivities.unshift("work"); // shift every element 
console.log(dailyActivities);
// Output: [ 'work', 'eat', 'sleep' ]

//Change the Elements of an Array [We can add or change elements by accessing the index value]

var dailyActivities = ["eat", "work", "sleep"];
console.log("before change the 2nd element the array is : ", dailyActivities); // output : before change the 2nd element the array is : ['eat', 'work', 'sleep']

// change the second element
// use array index 1
dailyActivities[1] = "exercise";
console.log("after change the 2nd element the array is : ", dailyActivities);
// output : after change the 2nd element the array is : ['eat', 'exercise', 'sleep']
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//----------------------Remove Elements From an Array [We can remove an element from any specified index of an array using the splice() method.]-----------------------------------------
var numbers = [1, 2, 3, 4, 5];
// remove one element , starting from index 2
numbers.splice(2, 1);
console.log(numbers);
// Output: [ 1, 2, 4, 5 ]
//-----------------------------------------------------------------------------------------------------------------------------------
// Find Length of an Array.
var dailyActivities = ["eat", "sleep"];
// return the length of array
console.log(dailyActivities.length); // Output: 2

//Remove elements from an array using pop() and shift() methods.
//pop() : this method is used to remove the last element
//shift() : this method is used to remove the first element
//----pop()-------------------
var arr = [1, 2, 3, 4, 5, 6];
console.log("before popup : ", arr); //before popup : [1, 2, 3, 4, 5, 6]
arr.pop();
console.log("after popup : ", arr); //after popup : [1, 2, 3, 4, 5]
//------------shift()---------------------
var arr = [1, 2, 3, 4, 5, 6];
console.log("before shift : ", arr); //before shift : [1, 2, 3, 4, 5, 6]
arr.shift();
console.log("after shift : ", arr); //after shift : [2, 3, 4, 5, 6]
//--------------------------------------------------------------------------------------------------

//------------------------------------Multidimensional Array-------------------------------------------------------

// declare three arrays
var student1 = ['Jack', 24];
var student2 = ['Sara', 23];
var student3 = ['Peter', 24];
// create multidimensional array
// using student1, student2, and student3
var studentsData = [student1, student2, student3];
// print the multidimensional array
console.log(studentsData); // Output: [ [ 'Jack', 24 ], [ 'Sara', 23 ], [ 'Peter', 24 ] ]
//Access Elements of an Array
console.log(studentsData[0][0]);//Jack
console.log(studentsData[2][1]);//24
studentsData[1][2] = "hello";
console.log(studentsData);//[ [ 'Jack', 24 ], ['Sara', 23, 'hello'], [ 'Peter', 24 ] ]

//--------------string-----------------------

//JavaScript String Methods
//---------------------------------------------------------------------------------------------------------------------------------------------
//  |  Method	        |                Description
//--|-------------------|----------------------------------------------------------------------------------------------------------------------
//  |  charAt()	        |     Returns the character at the specified index.
//  |  concat()	        |     Joins two or more strings.
//  |  replace()	    |     Replace a string with another string.
//  |  split()	        |     Converts the string to an array of strings.
//  |  substr()	        |     Returns a part of a string by taking the starting position and length of the substring.
//  |  substring()	    |     Returns a part of the string from the specified start index (inclusive) to the end index (exclusive).
//  |  slice()	        |     Returns a part of the string from the specified start index (inclusive) to the end index (exclusive).
//  |  toLowerCase()    |     Returns the passed string in lowercase.
//  |  toUpperCase()    |     Returns the passed string in uppercase.
//  |  trim()	        |     Removes whitespace from the strings.
//  |  includes()	    |     Searches for a string and returns a boolean value.
//  |  search()	        |     Searches for a string and returns the position of a match.
//-------------------------------------------------------------------------------------------------------------------------------------------

var message = "hello";//Get String Length
console.log(message.length); // Output: 5

//---------------------------JavaScript for...in loop-------------------------
var salaries = {
    Jack: 24000,
    Paul: 34000,
    Monica: 55000
};
// use for...in to loop through
// properties of salaries
for (var i in salaries) {
    // access object key using [ ]
    // add a $ symbol before the key
    var salary = "$" + salaries[i];
    // display the values
    console.log(`${i}: ${salary}`); //Jack: $24000  //Paul: $34000 //Monica: $55000
};

//for..in loop for string
var string = 'code';
// using for...in loop
for (var i in string) {
    console.log(string[i]);// c  o  d  e
};

//------------------JavaScript Number Methods--------------------------------------
//-----------------------------------------------------------------------------------------------
// | Method	             |               Description                                             | 
// |---------------------|-----------------------------------------------------------------------|           
// | isNaN()	         | Determines whether the passed value is NaN.                           |        
// | isFinite()	         | Determines whether the passed value is a finite number.               |
// | isInteger()	     | Determines whether the passed value is an integer.                    |
// | isSafeInteger()	 | Determines whether the passed value is a safe integer.                |
// | parseFloat()	     | Converts the numeric floating string to a floating-point number.      |
// | parseInt()	         | Converts the numeric string to an integer.                            |
// | toExponential()	 | Returns a string value for a number in exponential notation.          |
// | toFixed()	         | Returns a string value for a number in fixed-point notation.          |
// | toPrecision()	     | Returns a string value for a number to a specified precision.         |
// | toString()	         | Returns a string value in a specified radix (base).                   |
// | valueOf()	         | Returns the number's value.                                           |
// | toLocaleString()    | Returns a string with a language-sensitive representation of a number.|
//------------------------------------------------------------------------------------------------

//----------JavaScript try...catch...finally Statement---------------------
const numerator = 100, denominator = 'a';
try {
    console.log(numerator / denominator);
    console.log(a);
}
catch (error) {
    console.log('An error caught');
    console.log('Error message: ' + error);
}
finally {
    console.log('Finally will execute every time');
}
//Output:
//NaN
//An error caught
//Error message: ReferenceError: a is not defined
//Finally will execute every time

//-----------------try...catch...throw Example----------------------------
const number = 40;
try {
    if (number > 50) {
        console.log('Success');
    }
    else {

        // user-defined throw statement
        throw new Error('The number is low');
    }
    // if throw executes, the below code does not execute
    console.log('hello');
}
catch (error) {
    console.log('An error caught');
    console.log('Error message: ' + error);
}
//output : An error caught
//ERROR!
//Error message: Error: The number is low

//------------JavaScript Arrow Function-------------------
// an arrow function to add two numbers
var addNumbers = (a, b) => a + b;
// call the function with two numbers
var result = addNumbers(5, 3);
console.log(result); // Output: 8
//----------------------------------------------
var square = x => x * x; // use the arrow function to square a number
console.log(square(5)); // Output: 25
//---------------------------------------------------
//JavaScript Template Literals [We can use template literals to embed JavaScript expressions or variables with the help of the ${...} syntax.]
var number1 = 8;
var number2 = 3;
// embed expression within template literal 
var result = `The sum of ${number1} and ${number2} is ${number1 + number2}.`;
console.log(result);
// Output: The sum of 8 and 3 is 11.

//------------JavaScript Spread Operator----------------
var fruits = ["Apple", "Banana", "Cherry"];
// add fruits array to moreFruits1
// without using the ... operator
var moreFruits1 = ["Dragonfruit", fruits, "Elderberry"];
// spread fruits array within moreFruits2 array
var moreFruits2 = ["Dragonfruit", ...fruits, "Elderberry"];
console.log(moreFruits1); //[ 'Dragonfruit', [ 'Apple', 'Banana', 'Cherry' ], 'Elderberry' ]
console.log(moreFruits2); //[ 'Dragonfruit', 'Apple', 'Banana', 'Cherry', 'Elderberry' ]

//Array Destructuring
var arrValue = ['one', 'two', 'three'];
// destructuring assignment in arrays
var [x, y, z] = arrValue;
console.log(x); // one
console.log(y); // two
console.log(z); // three

//Swapping Variables
// program to swap variables
var x = 4;
var y = 7;
console.log("before swap : ", "x = ", x, ",", "y = ", y);//before swap :  x =  4 , y =  7
// swapping variables
[x, y] = [y, x];
console.log("after swap : ", "x = ", x, ",", "y = ", y); //after swap :  x =  7 , y =  4
//-----------------------------------------------------------------------------------------------
//JavaScript Class

// define a class named 'Person'
class Persons {
    // class constructor to initialize the 'name' and 'age' properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // method to display a message
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
// create two objects of the Person class
var person1 = new Persons("Jack", 30);
var person2 = new Persons("Tina", 33);
// call greet() method on two instances 
person1.greet();
person2.greet();
//Class Inheritance
//[Inheritance enables you to define a class that takes all the functionality from a parent class and allows you to add more. 
// &Using class inheritance, a class can inherit all the methods and properties of another class.]

// parent class
class hello { 
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
// inheriting parent class
class Student extends hello {
}
var student1 = new Student('Poulomi');
student1.greet();