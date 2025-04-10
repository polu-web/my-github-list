// 1. Enter 2 numbers and find the result after addition, subtraction, multiplication and division.

var a = Number(prompt("enter first number : "));
var b = Number(prompt("enter second number : "));
var add = console.log("addition of a + b = ", a + b);
var sub = console.log("subtraction of a - b = ", a - b);
var mul = console.log("multiplication of a * b = ", a * b);
var div = console.log("divition of a / b = ", a / b);
//-----------------------------------------------------------------------------------------------------------------------------------------------

// 2. Write a program to input your age and mobile number, then print the same.
var age = prompt("enter your age : ");
var mobileNo = Number(prompt("enter your mobile no. : "));
console.log("I am ", age, "year old .");
console.log("My mobile number is : ", mobileNo);
//----------------------------------------------------------------------------------------------------------------------------------------------

// 3. Write a program to print a block Fusing hash (#), where the F has a height of six characters and width of five and four characters.

//  (
//     Expected Output:
//       ######
//       #
//       #
//       #####
//       #
//       #
//  )

for (let i = 0; i <= 6; i++) {
  if (i === 0) {
    console.log("######");
  } else if (i === 3) {
    console.log("#####");
  } else {
    console.log("#");
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------
// 4. Write a program to compute the perimeter and area of a rectangle with a height of 7inches and width of 5 inches.
// (
//   Expected Output:
//   Perimeter of the rectangle = 24 inches
//   Area of the rectangle = 35 square inches
// )

var width = Number(5);
var height = Number(7);

var perimeter = 2 * (height + width);
var area = (height * width);
console.log("perimeter of the rectangle is : ", perimeter, "inches");
console.log("area of the rectangle is : ", area, "square inches");
//---------------------------------------------------------------------------------------------------------------------------------------

// 5. Write a program to compute the perimeter and area of a circle with a radius of 6 inches
// 
// (
//    Expected Output:
//    Perimeter of the circle = 37.680000 inches
//    Area of the circle = 113.040001 square inches
// )

var r = Number(6); //r=radius of the circle
const pi = Number(3.14);

var perimeter = (2 * pi * r);
var area = (pi * (r ** 2));
console.log("perimeter of the circle is : ", perimeter, "inches");
console.log("area of the circle is : ", area, "square inches");
//-----------------------------------------------------------------------------------------------------------------------------------------

// 6. Enter 2 sides of a rectangle and find the area and perimeter.

var width = Number(prompt("Enter the width of the rectangle : "));
var height = Number(prompt("Enter the height of the rectangle : "));

var perimeter = (2 * (height + width));
var area = (height * width);
console.log("perimeter of the rectangle is : ", perimeter, "inches");
console.log("area of the rectangle is : ", area, "square inches");
//-------------------------------------------------------------------------------------------------------------------------------------------
// 7. Write a program that takes hours and minutes as input, and calculates the total number of minutes.

var hour = Number(prompt("Enter Hours : "));
var min = Number(prompt("Enter minute : "));
var totalMinute = ((hour * 60) + min);
console.log("total number of minutes are ", totalMinute, "minute .");
//----------------------------------------------------------------------------------------------------------------------------------------------
// 8. Enter the length in meter and find the equivalent in centimeter and kilometer.

var meterLength = Number(prompt("Enter length in meter : "));
console.log("The", meterLength, "meter length in centimeter is :", (meterLength * 100), "cm");
console.log("The", meterLength, " meter length in kilometer is :", (meterLength / 1000), "km");
//----------------------------------------------------------------------------------------------------------------------------------------------

// 9. Write a program to find the third angle of a triangle if two angles are given

var angle1 = Number(65);
var angle2 = Number(30);
var angle3 = (180 - (angle1 + angle2));
console.log("If 1st angle is 65 \nand 2nd angle is 30 \nthen the 3rd angle is ", angle3, ".");
//----------------------------------------------------------------------------------------------------------------------------------------------

// 10. Enter the temperature in centigrade and find the equivalent in Fahrenheit.

// formula is : (0degree c * (9/5)) +32
var tempC = Number(prompt("Enter the temparature in centigrade : "));
var tempF = ((tempC * (9 / 5)) + 32);
console.log("The ", tempC, "degree tempareture in centigrade is equivalent to ", tempF, "degree fahrenheit.");
//----------------------------------------------------------------------------------------------------------------------------------------------

// 11. Enter the radius of a circle and find the area, diameter and perimeter.

var radius = Number(prompt("Enter the radius of a circle : "))

console.log("Area of the circle is : ", (pi * (radius ** 2)), "square inches");
console.log("Diameter of the circle is : ", (2 * radius), "inches");
console.log("Peremeter of the circle is : ", (2 * pi * radius), "inches");
//-------------------------------------------------------------------------------------------------------------------------------------------

// 12. Write a program that calculates the volume of a sphere. Volume of a sphere is (4/3)*π*r³

var radius = Number(5);
var volume = ((4 / 3) * pi * (radius ** 3));
console.log("Volume of a sphere is : ", Math.round(volume));
//------------------------------------------------------------------------------------------------------------------------------------------------

// 13. Write a program that converts kilometers per hour to miles per hour. (1km = 0.621371 miles)
//     (
//         Expected Output:
//         Input kilometers per hour: 15
//         9.320568 miles per hour
//     )

function kilometersToMiles(kmPerHour) {
  return kmPerHour * 0.621371
}
var result = kilometersToMiles(7);
console.log("7 km/hr is equivalent to ", result, "miles/hr.");

// 14. Write a program to read an amount (integer value) and break the amount into smallest possible number of bank notes.
// 
//    (
//    e.g.
//        Input the amount: 485
//        Expected Output:
//        There are:
//        0 Note(s) of 2000.00
//        0 Note(s) of 500.00
//        2 Note(s) of 200.00
//        0 Note(s) of 100.00
//        1 Note(s) of 50.00
//        1 Note(s) of 20.00
//        1 Note(s) of 10.00
//        1 Note(s) of 5.00
//        0 Note(s) of 2.00
//        0 Note(s) of 1.00
//    )

var amount = parseInt(prompt("Input the amount : "));

var notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
console.log("The amount is :" + amount)
console.log("There are:\n");
for (var i = 0; i < notes.length; i++) {
  var count = Math.floor(amount / notes[i]);
  console.log(count + " Note(s) of " + notes[i].toFixed(2) + "\n");
  amount = amount % notes[i];
}
//---------------------------------------------------------------------------------------------------------------------------------------------

// 15. Enter a number and find the cube and square of the number.

var num = parseInt(prompt("Input the number : "));
console.log("the number is " + num);
console.log("cube of " + num + " is : " + (num ** 3));
console.log("square of " + num + " is : " + (num ** 2));
//--------------------------------------------------------------------------------------------------------------------------------------------

// 16. Enter a number find the double and triple of that number.
var num = parseInt(prompt("Input the number : "));
console.log("The number is " + num + "\n" + "Double of " + num + " is : " + (num * 2) + "\n" + "Triple of " + num + " is :" + (num * 3));

//---------------------------------------------------------------------------------------------------------------------------------------------

// 17. Enter time in seconds, then show it in the Hour: Minute: Second format.
//    (
//        e.g.
//        Input seconds: 25300
//        Output:
//        There are :
//        H:M:S - 7:1:40
//    ) 

var totalSeconds = parseInt(prompt("Enter time in seconds:"));

var hours = Math.floor(totalSeconds / 3600);
var minutes = Math.floor((totalSeconds % 3600) / 60);
var seconds = totalSeconds % 60;
console.log("Total seconds are - ", totalSeconds)
console.log("Time is: \n H:M:S - " + hours + " : " + minutes + " : " + seconds);
//-------------------------------------------------------------------------------------------------------------------------------------------

// 18. Write a program to to convert a given integer (in days) to years, months and days, assumes that all months have 30 days and all years have 365 days.
//    (
//        e.g.
//        Input no. of days: 2535
//        Expected Output:
//        6 Year(s)
//        11 Month(s)
//        15 Day(s).
//    )

var totalDays = parseInt(prompt("Enter number of days :"));

var years = Math.floor(totalDays / 365); // find years 
var months = Math.floor((totalDays % 365) / 30); //first calculate the remainder days after find the year ,  then calculate months 
var days = totalDays % 30; // find remainder days after find months 
console.log("Total days are - ", totalDays)
console.log("Result is: \n" + years + " Year(s) \n" + months + " Month(s)\n" + days + " Day(s). ");

//---------------------------------------------------------------------------------------------------------------------------------------------

// 19. Enter 2 numbers and store it into 2 variables a and b respectively. Swap the values of the variable.

var a = parseInt(prompt("enter first number : "));
var b = parseInt(prompt("enter second number : "));
console.log("Before swap : " + "a = " + a + " , b = " + b);
a = a + b;
b = a - b;
a = a - b;
console.log("After swap : " + "a = " + a + " , b = " + b);
//------------------------------------------------------------------------------------------------------------------------------------------

// 20. Enter 2 numbers and store it into 2 variables a and b respectively. Swap the values of the variable without using a third variable.
var a = parseInt(prompt("enter first number : "));
var b = parseInt(prompt("enter second number : "));
console.log("Before swap : " + "a = " + a + " , b = " + b);

var temp = a;
a = b;
b = temp
console.log("After swap : " + "a = " + a + " , b = " + b);
//----------------------------------------------------------------------------------------------------------------------------------------------

// 21. Enter u,t and f and then find the distance (s) using the formula s=ut+(1/2)*ft²

function distance(u, t, f) {
  return ((u * t) + (1 / 2) * (f * t * t));
}
var dist = distance(10, 4, 3);
console.log("Distance is : " + dist + "m");
//-----------------------------------------------------------------------------------------------------------------------------------------------

// 22. Enter 2 numbers and find the modulus without using the modulus operator (%).

var n1 = parseInt(prompt("Enter the first number (dividend):"));
var n2 = parseInt(prompt("Enter the second number (divisor):"));

var quotient = Math.floor(n1 / n2);
var rem = (n1 - (quotient * n2));
console.log("The modulus is : " + rem);
//--------------------------------------------------------------------------------------------------------------------------------------------\

// 23. Write a program to enter P, T, R and calculate Simple Interest.
// (Formula is A=P (1+RT) Where A is the Accumulated amount of Principal Amount P with R rate of Interest for T no, of years)

var P = parseFloat(prompt("Enter Principal Amount (P): "));
var T = parseFloat(prompt("Enter Time in years (T): "));
var R = parseFloat(prompt("Enter Rate of Interest (R) in %: "));

R = R / 100;  // Convert rate from percent to decimal
var A = (P * (1 + (R * T)));
var SI = A - P
console.log("simple interest : " + SI.toFixed(2) + "\n Accumulated amount : " + A.toFixed(2));

// 24. Write a program to enter P, T, R, N and calculate Compound Interest.
// ( Formula is A=P (1+R/N)^NT Where A is the Accumulated amount of Principal Amount P with R rate of Interest for T no. of years and N is the no. of times interest is compounded per year)

var P = parseFloat(prompt("Enter Principal Amount (P):"));
var R = parseFloat(prompt("Enter Annual Rate of Interest (R) in %:"));
var T = parseFloat(prompt("Enter Time in years (T):"));
var N = parseInt(prompt("Enter number of times interest is compounded per year (N):"));

R = R / 100;
// Compound Interest formula: A = P * (1 + R/N) ^ (N*T)
var A = P * Math.pow((1 + R / N), N * T);//Math.pow(base,exponent)
var CI = A - P;

console.log("Compound Interest = " + CI.toFixed(2) + "\n Total Amount (A) = " + A.toFixed(2));
//------------------------------------------------------------------------------------------------------------------------------------------------
// 25. Write a program to enter base and height of a right angled triangle and find its area.
// ( Area of a right angled triangle is (1/2)*base*height )

var base = parseInt(prompt("Enter the base : "));
var height = parseInt(prompt("Enter the height : "));
var area = ((1 / 2) * base * height);
console.log("Area of the right angled triangle is : " + area);
//-----------------------------------------------------------------------------------------------------------------------------------------------

// 26. Write a program to enter the coordinates (x,y) of 2 points and find the distance between those 2 points.
// ( Distance between point1 (x1,y1) and point2 (x2,y2) is square root of (x1-x2)² + (y1-y2)²)

var x1 = 7, y1 = 4;
var x2 = 3, y2 = 1;

var distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
console.log("Distance between the two points is: " + distance);
//-----------------------------------------------------------------------------------------------------------------------------------------------

// 27. Write a program to enter two timings with hour, minute and second. Then add them and print the answer in the same format.
// ( Suppose the 1st timing is: 5 hour 50 mins 40 seconds nd the 2nd timing is: 2 hour 20 mins 50 seconds And
// The sum of 2 timings will be: 8 hour 11 mins 30 seconds)

function addTimings(h1, m1, s1, h2, m2, s2) {
  var sec = s1 + s2;
  var min = m1 + m2;
  var hour = h1 + h2;

  if (sec >= 60) {
    sec -= 60;
    min += 1;
  }

  if (min >= 60) {
    min -= 60;
    hour += 1;
  }

  console.log(`Sum of timings = ${hour} hour ${min} mins ${sec} seconds`);
}
addTimings(3, 40, 50, 3, 30, 20);
//-----------------------------------------------------------------------------------------------------------------------------------------

// 1. Enter 2 numbers and find the maximum one.

var a = parseInt(prompt("Enter value for a : "));
var b = parseInt(prompt("Enter value for b : "));
console.log(`a = ${a} , b = ${b}`);
if (a > b) {
  console.log("a is greater");
} else {
  console.log("b is greater");
}
//----------------------------------------------------------------------------------------------------------------------------------------

// 2. Enter 1 number and find if it divisible by 5 or not.

var num = parseInt(prompt("Enter a number : "));

if (num % 5 === 0) {
  console.log(num + " is divisible by 5");
} else {
  console.log(num + " is not divisible by 5");
}
//----------------------------------------------------------------------------------------------------------------------------------------

// 3. Enter a number and find if it is positive, negative? (consider zero as positive)

var num = parseInt(prompt("Enter a number to check it is positive or negative : "));
if (num >= 0) {
  console.log("The" + num + "is a positive number.");
} else {
  console.log("The " + num + " is a negative number.");
}
//----------------------------------------------------------------------------------------------------------------------------------------

// 4. Enter 2 numbers and find if the first one is divisible by second one or not.

var firstNumber = parseInt(prompt("Enter first number : "));
var secondNumber = parseInt(prompt("Enter second number : "));

if (firstNumber % secondNumber === 0) {
  console.log(`the first one ${firstNumber} is divisible by second one ${secondNumber}.`)
}
//---------------------------------------------------------------------------------------------------------------------------------------

// 5. Enter a number and find if it is single digit or more than single digit number.

var num = parseInt(prompt("Enter a number to check it is single-digit number or more than single-digit number : "));

if (num >= -9 && num <= 9) {
  console.log("The " + num + " is a single-digit number");
} else {
  console.log("The " + num + " is more than a single-digit number");
}
//------------------------------------------------------------------------------------------------------------------------------------------

// 6. Enter a year and find if it is leap year or not.

var year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}
//----------------------------------------------------------------------------------------------------------------------------------------

// 7. Enter a number and find if it is even or odd.

var num = parseInt(prompt("Enter a number : "));

if (num % 2 === 0) {
  console.log(num + " is a even number");
} else {
  console.log(num + " is a odd number");
}
//------------------------------------------------------------------------------------------------------------------------------------------

// 8. Enter 2 numbers and find if they are equal or not.

var num1 = parseInt(prompt("Enter first number : "));
var num2 = parseInt(prompt("Enter second number : "));
if (num1 === num2) {
  console.log("Both numbers are equal");
} else {
  console.log("Numbers are not equal");
}
//----------------------------------------------------------------------------------------------------------------------------------------

// 9. Enter the length and breadth of a rectangle and the radius of a circle, then find whose area is greater.
var radius = Number(prompt("Enter the radius of a circle : "))
var areaOfCircle = (pi * (radius ** 2));
console.log("Area of the circle is : ", areaOfCircle, "square inches");

var width = Number(5);
var height = Number(7);
var areaOfRectangle = (height * width);
console.log("area of the rectangle is : ", areaOfRectangle, "square inches");

if (areaOfRectangle > areaOfCircle) {
  console.log("The rectangle's area is greater.")
} else {
  console.log("The circle's area is greater.")
}
//----------------------------------------------------------------------------------------------------------------------------------------

// 10. Enter the marks of physics of 1 student and then check it is pass or fail?
var marks = parseInt(prompt("enter your physics marks : "));
if (marks >= 30) {
  console.log("You are pass!");
} else {
  console.log("you are fail!");
}
//--------------------------------------------------------------------------------------------------------------------------------------

// 11. Enter 3 angles of a triangle and then find if it is possible to form the same or not.

var angle1 = 40;
var angle2 = 70;
var angle3 = 60;

var sum = angle1 + angle2 + angle3;

if (sum === 180) {
  console.log("Yes, it is possible to form a triangle.");
} else {
  console.log("No, it is not possible to form a triangle.");
}
//---------------------------------------------------------------------------------------------------------------------------------------

// 12. Write a program to calculate profit and loss on a transaction. User should enter the buying amount and selling amount of the same.

var buyingAmount = parseInt(prompt("Enter buying amount : "));
var sellingAmount = parseInt(prompt("Enter selling amount : "));

if (sellingAmount > buyingAmount) {
  var profit = (sellingAmount - buyingAmount);
  console.log("profit of Rs. ", +profit);

} else if (buyingAmount > sellingAmount) {
  var loss = (buyingAmount - sellingAmount);
  console.log("Loss of Rs. ", +loss);

} else {
  console.log("No loss and no profit");
}
//-------------------------------------------------------------------------------------------------------------------------------------

// 1. Enter 3 numbers and find the maximum and minimum one.

var a = Number(10);
var b = Number(20);
var c = Number(15);
console.log(`a = ${a} , b = ${b} , c = ${c}`);
if (a > b && a > c) {
  console.log("a is greater!");
} else if (b > a && b > c) {
  console.log("b is greater!");
} else {
  console.log("c is greater!");
}
//--------------------------------------------------------------------------------------------------------------------------------------
// 2. Suppose there is a criteria to apply for a voter card is like below:
// a. Candidate must be adult.
// b. Candidate should be Indian by birth.
// c. Candidate should stay in India at least for 5 years.
// If the candidate fulfil all the criteria, then he/she can apply for the voter cars 
//    (
//      e.g.
//          Enter the age = 20
//          Enter the no. of years stayed india =10
//          Enter 1 if indian, 0 if not = 1
//          Output: Candidate can have voter card.
//    )

var age = parseInt(prompt("Enter your age : "));
var stayIndia = parseInt(prompt("Enter for how much years you stayed in India : "));
var indian = parseInt(prompt("press '1' if you are indian by birth otherwise press '0' ."));

if (age >= 18 && stayIndia >= 5 && indian === 1) {
  console.log("Candidate is eligible for applying for voter card.");
} else {
  console.log("Candidate is not eligible for applying voter card.")
}
//---------------------------------------------------------------------------------------------------------------------------------------------

// 3. Suppose there is a criteria to apply for an aadhar card is like below:

//        a. Candidate must be adult.
//        b. Candidate should be Indian by birth.
//        c. Candidate should stay in India at least for 5 years.

//    If the candidate fulfil any of the above criteria, then he/she can apply for the aadhar card.
var age = parseInt(prompt("Enter your age : "));
var stayIndia = parseInt(prompt("Enter for how much years you stayed in India : "));
var indian = parseInt(prompt("press '1' if you are indian by birth otherwise press '0' ."));

if (age >= 18 || stayIndia >= 5 || indian === 1) {
  console.log("Candidate is eligible for applying for voter card.");
} else {
  console.log("Candidate is not eligible for applying voter card.")
}
//-------------------------------------------------------------------------------------------------------------------------------------------

// 4. Enter the year and find if it is leap year or not.
//    (
//      2016 is a leap year
//      2017 is not a leap year
//      2100 is not a leap year (though it is divisible by 4, but it is also divisible by 100)
//      2400 is leap year (though it is divisible by 100, but it is divisible by 400 as well)
//    )

var year = parseInt(prompt("Enter a year to check it is leap year or not . "));

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}
//---------------------------------------------------------------------------------------------------------------------------------------

// 5. Enter 3 sides of a triangle and find if it is possible to form the tringle or not.
// e.g.
// The sum of each 2 sides should be greater than the 3rd one

var ang1 = Number(45);
var ang2 = Number(60);
var ang3 = Number(90);

if (ang1 + ang2 > ang3 && ang1 + ang3 > ang2 && ang2 + ang3 > ang1) {
  console.log("Yes, it is possible to form a triangle.");
} else {
  console.log("No, it is not possible to form a triangle.");
}

//--------------------------------------------------------------------------------------------------------------------------------------

//  6. Enter 3 sides of a triangle and find if it is equilateral or isosceles or scalene?

var a = 90;
var b = 45;
var c = 45;

// Check the type of triangle
if (a === b && b === c) {
  console.log("It is an Equilateral triangle.");
} else if (a === b || a === c || b === c) {
  console.log("It is an Isosceles triangle.");
} else {
  console.log("It is a Scalene triangle.");
}

//------------------------------------------------------------------------------------------------------------------------------------------
//  7. Enter 3 angles of a triangle and find if it is acute or obtuse or right angled triangle?

var angle1 = 60;
var angle2 = 60;
var angle3 = 60;

var sum = angle1 + angle2 + angle3;

if (sum === 180) {
  if (angle1 === 90 || angle2 === 90 || angle3 === 90) {
    console.log("It is a Right-angled triangle."); // one angle is 90 degree
  } else if (angle1 > 90 || angle2 > 90 || angle3 > 90) {
    console.log("It is an Obtuse triangle."); // one angle is greater than 90 degree
  } else {
    console.log("It is an Acute triangle."); // one angle is lessthan 90 degree
  }
} else {
  console.log("Not a valid triangle."); // sum of 3 angle is not equals to 180 degree , so it is not a valid triangle
}
// ----------------------------------------------------------------------------------------------------------------------------------------- 

//  8. Write a program which is a Menu-Driven Program to compute the area of the various geometrical shape.

//  --------------------------------------------------------------------------------------------------------------------------------------
//  9. Write a program to read any Month Number in integer and display the season. Suppose month number 12,1,2 (that is December, January,         February) //  represents Winter. month no. 3,4,5 represents Summer, month no. 6,7,8 represents Monsoon and month no. 9,10,11 represents Autumn.

var month = parseInt(prompt("enter a month  number in integer between 1 to 12"));

if (month === 12 || month === 1 || month === 2) {
  console.log("Season : winter");
} else if (month === 3 || month === 4 || month === 5) {
  console.log("Season : Summer");
} else if (month === 6 || month === 7 || month === 8) {
  console.log("Season : Monsoon");
} else if (month === 9 || month === 10 || month === 11) {
  console.log("Season : Autumn");
} else {
  console.log("Invalid month number! Please enter 1 to 12.");
}
//  --------------------------------------------------------------------------------------------------------------------------------------------

//  10. Write a program to accept a number and print the grade
//
//   |  Marks     |   Grade   |
//   |------------|-----------|
//   |  >80       |     A     |
//   |  60-80     |     B     |
//   |  40-60     |     C     |
//   |  Below 40  |     D     |
//   |------------|-----------|

var marks = parseInt(prompt("Enter your marks : "));

if (marks > 80) {
  console.log("Grade: A");
}
else if (marks >= 60 && marks <= 80) {
  console.log("Grade: B");
}
else if (marks >= 40 && marks < 60) {
  console.log("Grade: C");
}
else {
  console.log("Grade: D");
}

//  ---------------------------------------------------------------------------------------------------------------------------
//  11. Write a program to accept a number and print the remarks.

//   |---------------|--------------|
//   |  Marks        |   Remarks    |
//   |---------------|--------------|
//   |  >90          |   Too goo d  |
//   |  80-90        |   good       |
//   |  10-20        |   Bad        |
//   |  Below 10     |   Too bad    |
//   |  Rest         |   Average    |
//   |---------------|--------------|

var marks = parseInt(prompt("Enter your marks : "));

if (marks > 90) {
  console.log("Remarks: Too good");
}
else if (marks >= 80 && marks <= 90) {
  console.log("Remarks: Good");
}
else if (marks >= 10 && marks <= 20) {
  console.log("Remarks: Bad");
}
else if (marks < 10) {
  console.log("Remarks: Too bad");
}
else {
  console.log("Remarks: Average");
}
//------------------------------------------------------------------------------------------------------------------------------------------

//  12. Enter a,b and c for an equation ax^2+bx+c and find the roots and the type of roots.

//---------------------------------------------------------------------------------------------------------------------------------------------
//  13. The length of a month varies from 28 to 31 days. In this exercise you will create a program that reads the no. of a month from the user. Then your program should display the number of days in that month. Display "28 or 29 days" for February so that leap years are addressed.

var month = parseInt(prompt("Enter the month number (1 to 12):"));

if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
  console.log(" There are 31 days in this month");
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
  console.log("There are 30 days in this month");
} else if (month === 2) {
  console.log("There are 28 or 29 days in this month");
} else {
  alert("Invalid month number enter between 1 to 12");
}
//---------------------------------------------------------------------------------------------------------------------------------------------
//  14. Write a program to accept a coordinate point in a XY coordinate system and determine in which quadrant the coordinate point lies. Go to the editor
//
//  (
//  Test data : 7 9
//  Expected Output: The coordinate point (7,9) lies in the first quadrant.
//  )

//-------------------------------------------------------------------------------------------------------------------------------------------------

// 15. Write a program to calculate and print the Electricity bill of a given customer. The customer id., name and unit consumed by the user should be taken from the keyboard and display the total amount to pay to the customer. The charge are as follow
// __________________________________________________
// |Unit                             |Charge/unit   |
// |---------------------------------|--------------|
// |Upto 200                         |  @1 Rs.      | 
// |201 and above, but less than 400 |  @2 Rs       |
// |401 and above but less than 600  |  @3 Rs       |
// |601 and above                    |  @4 Rs       |
// |_________________________________|______________|

// If bill exceeds Rs. 500 then a surcharge of 15% will be charged

var customerId = prompt("Enter customer Id : ");
var customerName = prompt("Enter Customer Name : ");
var unit = parseInt(prompt("Enter Electricity Unit Consumed : "));

var totalBill = 0;
var chargePerUnit = 0;
var surcharge = 0;
var amount = 0;

if (unit <= 200) {
  chargePerUnit = 1;
} else if (unit >= 201 && unit < 400) {
  chargePerUnit = 2;
} else if (unit >= 401 && unit < 600) {
  chargePerUnit = 3;
} else {
  chargePerUnit = 4
}

amount = (unit * chargePerUnit);

if (amount > 500) {
  surcharge = (amount * 0.15);
}

totalBill = (amount + surcharge);

// print the bill (store the whole message into the bill an dthen print it)

var bill = "Electricity Bill \n";
bill += "----------------------------------\n";
bill += "Customer Id : " + customerId + "\n";
bill += "Customer Name : " + customerName + "\n";
bill += "Unit Consumed : " + unit + "\n";
bill += "Charge Per Unit : Rs. " + chargePerUnit + "\n";
bill += "Basic Amount : Rs. " + amount.toFixed(2) + "\n";
if (surcharge > 0) {
  bill += "Surcharge (15%) : Rs. " + surcharge.toFixed(2) + "\n";
}
bill += "Total amount to pay : Rs. " + totalBill.toFixed(2) + "\n";

console.log(bill);

// -----------------------------------------------------------------------------------------------------------------------------------------------

// 16. Write a program to input electricity unit charges and calculate total electricity bill according to
// the given condition:

// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit

var units = parseFloat(prompt("Enter the unit of electricity consumed : "));
bill = 0;

if (units <= 50) {
  bill = unit * 0.50;
} else if (unit <= 150) {
  bill = ((50 * 0.50) + ((units - 50) * 0.75));
} else if (unit <= 250) {
  bill = ((50 * 0.50) + (100 * 0.75) + ((units - 150) * 1.20));
} else {
  bill = ((50 * 0.50) + (100 * 0.75) + (100 * 1.20) + ((units - 250) * 1.50));
}

console.log("Total electricity bill : Rs. " + bill.toFixed(2));

// ------------------------------------------------------------------------------------------------------------------------------------------------

// 17. Write a program to input basic salary of an employee and calculate its Gross salary according
// to following:

//  Basic Salary <= 10000: HRA = 20%, DA = 80%
//  Basic Salary <= 20000: HRA = 25%, DA = 90%
//  Basic Salary > 20000: HRA = 30%, DA = 95%

var basicSalary = parseInt(prompt("Enter your basic salary : "));
var hra = 0;
var da = 0;
var gross = 0;

if (basicSalary <= 10000) {
  hra = basicSalary * 0.20;
  da = basicSalary * 0.80;

} else if (basicSalary <= 20000) {
  hra = basicSalary * 0.25;
  da = basicSalary * 0.90;

} else if (basicSalary > 20000) {
  hra = basicSalary * 0.30;
  da = basicSalary * 0.95;
}

gross = (basicSalary + hra + da);

console.log("Your Gross salary is : Rs. " + gross);
//----------------------------------------------------------------------------------------------------------------------------------------------

// 18. Write a program to enter your salary and find the tax as per the below formatted rule.
// ____________________________________
// |Salary             |     tax      |
// |-------------------|--------------|
// |<10000             |     No tax   |
// |10000 - 20000      |     10%      |
// |20000 - 30000      |     20%      |
// |>30000             |     30%      |
// |___________________|______________|

var salary = parseInt(prompt("Enter your salary : "));
var tax = 0;
if (salary < 10000) {
  console.log("No tax needed !");
} else if (salary >= 10000 && salary <= 20000) {
  tax = salary * 0.10;
  console.log("Tax : Rs." + tax);
} else if (salary > 20000 && salary <= 30000) {
  tax = salary * 0.20;
  console.log("Tax : Rs." + tax);
} else if (salary > 30000) {
  tax = salary * 0.30;
  console.log("Tax : Rs." + tax);
} else {
  console.log("invalid input!");
}

//-----------------------------------------------------------------------------------------------------------------------------------------------







