// 1. Enter 5 elements of an array and find the sum of those.

var arr = [5, 10, 15, 20, 25];
var sum = 0;

for (var i = 0; i < arr.length; i++) {
    sum = (sum + arr[i]);
}
console.log("Sum of the array elements is :", sum); // Sum of the array elements is : 75

//----------------------------------------------------------------------------------------------------------------------------

// 2. Enter the size of an array and then find the sum of those n numbers.

var n = parseInt(prompt("Enter the size of the array : "));

var sum = 0;
var arr = [];

for (var i = 0; i < n; i++) {
    var numbers = parseInt(prompt(`Enter number ${i + 1} :`));
    arr.push(numbers);
    sum = (sum + numbers);
}
console.log("Array elements :", arr);
console.log("sum of the array elements : ", sum);

// output: 
// Enter the size of the array : 5
// Enter number 1 :12
// Enter number 2 :5
// Enter number 3 :8
// Enter number 4 :6
// Enter number 5 :52
// Array elements : [ 12, 5, 8, 6, 52 ]
// sum of the array elements :  83

//-----------------------------------------------------------------------------------------------------------------

// 3. Enter the size and elements of an array and find the largest element

var n = parseInt(prompt("Enter the size of the array : "));
var arr = [];
var max;

for (var i = 0; i < n; i++) {
    var numbers = parseInt(prompt(`Enter number ${i + 1} :`));
    arr.push(numbers);
}
max = arr[0];

for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log("Array elements :", arr);
console.log("Largest element of this array : ", max);

// output:
// Enter the size of the array : 3
// Enter number 1 :5
// Enter number 2 :10
// Enter number 3 :2
// Array elements : [ 5, 10, 2 ]
// Largest element of this array :  10

//-----------------------------------------------------------------------------------------------------------------

//4. Enter the size and elements of an array and find the smallest one

var n = parseInt(prompt("Enter the size of the array : "));
var arr = [];
var min;

for (var i = 0; i < n; i++) {
    var numbers = parseInt(prompt(`Enter number ${i + 1} :`));
    arr.push(numbers);
}
min = arr[0];

for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log("Array elements :", arr);
console.log("Smallest element of this array : ", min);

// output:
// Enter the size of the array : 3
// Enter number 1 :12
// Enter number 2 :5
// Enter number 3 :4
// Array elements : [ 12, 5, 4 ]
// Smallest element of this array :  4

//-------------------------------------------------------------------------------------------------------------------

//5. Enter the size and elements of an array and find the average, largest,smallest and the sum together using a single loop. 

var n = +prompt("Enter the size of the array:");
var arr = [];
var sum = 0, min, max, avg;

for (var i = 0; i < n; i++) {
    var num = +prompt("Enter number " + (i + 1) + ":");
    arr.push(num);
    sum += num;

    if (i === 0) {
        max = min = num;  // Initialize with first number
    } else {
        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }
    }
}
avg = sum / n;

console.log("Array: ", arr);
console.log("Sum = " + sum);
console.log("Average = " + avg);
console.log("Largest = " + max);
console.log("Smallest = " + min);

//output:
// Enter the size of the array:2
// Enter number 1:12
// Enter number 2:5
// Array:  [ 12, 5 ]
// Sum = 17
// Average = 8.5
// Largest = 12
// Smallest = 5

//---------------------------------------------------------------------------------------------------------------------------

//6. Enter the size and elements of an array and print the array in reverse order.
var n = parseInt(prompt("Enter the size of the array : "));
var arr = [];

for (var i = 0; i < n; i++) {
    var num = parseInt(prompt(`Enter number ${i + 1} :`));
    arr.push(num);
}

console.log("Array elements :", arr);
console.log("Reverce array :", arr.slice().reverse());

// output:
// Enter the size of the array : 4
// Enter number 1 :10
// Enter number 2 :20
// Enter number 3 :30
// Enter number 4 :40
// Array elements : [ 10, 20, 30, 40 ]
// Reverce array : [ 40, 30, 20, 10 ]

//------------------------------------------------------------------------------------------------------------------------------

//7. Enter the size and elements of an array and physically store the array in reverse order.

var n = parseInt(prompt("Enter the size of the array : "));

var arr = [];

for (var i = 0; i < n; i++) {
    var num = parseInt(prompt(`Enter number ${i + 1} :`));
    arr.push(num);
}
console.log("Array elements :", arr);

var revArr = [];
while (arr.length > 0) {
    revArr.push(arr.pop());
}
console.log("Reverce array :", revArr);

// output: 
// Enter the size of the array : 3
// Enter number 1 :10
// Enter number 2 :20
// Enter number 3 :30
// Array elements : [ 10, 20, 30 ]
// Reverce array : [ 30, 20, 10 ]

//--------------------------------------------------------------------------------------------------------------------------------

// 8. Enter the size and elements of an array. After that enter a search value and find if the value is present in the array or not.

var n = parseInt(prompt("Enter the size of the array : "));

var arr = [];
var flag = 0;

for (var i = 0; i < n; i++) {
    var num = parseInt(prompt(`Enter number ${i + 1} :`));
    arr.push(num);
}
console.log("Array elements :", arr);
var findNum = parseInt(prompt("Enter a number for search : "));
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === findNum) {
        flag = 1;
        break;
    }
}

if (flag === 1) {
    console.log(`${findNum} is found in the array`);
} else {
    console.log(`${findNum} is not found in the array`);
}

// output:
// Enter the size of the array : 3
// Enter number 1 :5
// Enter number 2 :7
// Enter number 3 :9
// Array elements : [ 5, 7, 9 ]
// Enter a number for search : 5
// 5 is found in the array

//-----------------------------------------------------------------------------------------------------------------------------

//9.Enter the size and elements of an array. After that enter a search value and find if present in the array or not. If yes, find the places.

var n = parseInt(prompt("Enter the size of the array : "));

var arr = [];
var flag = 0;

for (var i = 0; i < n; i++) {
    var num = parseInt(prompt(`Enter number ${i + 1} :`));
    arr.push(num);
}
console.log("Array elements :", arr);
var findNum = parseInt(prompt("Enter a number for search : "));
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === findNum) {
        console.log(findNum, "is found at place", arr.indexOf(findNum));
        flag = 1;
        break;
    }
}

if (flag === 1) {
    console.log(`${findNum} is found in the array`);
} else {
    console.log(`${findNum} is not found in the array`);
}

// output:
// Enter the size of the array : 3
// Enter number 1 :10
// Enter number 2 :0
// Enter number 3 :5
// Array elements : [ 10, 0, 5 ]
// Enter a number for search : 5
// 5 is found at place 2
// 5 is found in the array

//-------------------------------------------------------------------------------------------------------------

//10.eter the size and elements of an of that value array. After that enter a search value and find the frequency

var n = parseInt(prompt("Enter the size of the array : "));

var arr = [];
var flag = 0;

for (var i = 0; i < n; i++) {
    var num = parseInt(prompt(`Enter number ${i + 1} :`));
    arr.push(num);
}
console.log("Array elements :", arr);
var findNum = parseInt(prompt("Enter a number for search : "));
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === findNum) {
        flag++;
    }
}
console.log("Frequency of", findNum, "is", flag);

// output:
// Enter the size of the array : 5
// Enter number 1 :12
// Enter number 2 :20
// Enter number 3 :12
// Enter number 4 :5
// Enter number 5 :12
// Array elements : [ 12, 20, 12, 5, 12 ]
// Enter a number for search : 12
// Frequency of 12 is 3

//----------------------------------------------------------------------------------------------------------------
//11. Enter the size and elements of an array and then find the middle most value.

var n = parseInt(prompt("Enter the size of the array : "));

var arr = [];
var flag = 0;
var midIndex, midIndex1, midIndex2;

for (var i = 0; i < n; i++) {
    var num = parseInt(prompt(`Enter number ${i + 1} :`));
    arr.push(num);
}
console.log("Array elements :", arr);

if (n % 2 === 1) {
    midIndex = Math.floor(n / 2)
    console.log("Middle value of the array is :", arr[midIndex]);
} else {
    midIndex1 = arr[n / 2 - 1];
    midIndex2 = arr[n / 2];
    console.log("Middle values of the array are :", midIndex1, "and", midIndex2);
}

// output:
// Enter the size of the array : 4
// Enter number 1 :5
// Enter number 2 :8
// Enter number 3 :7
// Enter number 4 :6
// Array elements : [ 5, 8, 7, 6 ]
// Middle values of the array are : 8 and 7
//-----------------------------------------------------------------------------------------------------------------------------------
